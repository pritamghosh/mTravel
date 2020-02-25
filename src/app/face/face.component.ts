import {
  Component,
  OnInit,
  Inject,
  ViewChild,
  ElementRef
} from "@angular/core";
import { Observable } from "rxjs/Observable";
import { switchMap } from "rxjs/operators";
import { FaceRecognitionService } from "../services/face-recognition.service";
import { LoginService } from "../services/login.service";
import { Router } from "@angular/router";
import {
  NgForm,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { environment } from "../../environments/environment";
import { DesktopCameraService } from "../services/desktop-camera.service";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
@Component({
  selector: "app-face",
  templateUrl: "./face.component.html",
  styleUrls: ["./face.component.scss"]
})
export class FaceComponent implements OnInit {
  message: string;
  imageString = "";
  faceApiResponse: Observable<any>;
  //subscriptionKey: string = 'b36a4edbc372433ea78d2786acb63dbe';
  //subscriptionKey: string = "f19864adc9dc421b999b28f03212170b";
  subscriptionKey = environment.subscriptionKey;
  isButtonVisible = true;
  model: any = {};
  errorMessage: string;

  @ViewChild("videoIn") videoIn: ElementRef;
  userForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  constructor(
    private faceRecognitionService: FaceRecognitionService,
    private cameraService: DesktopCameraService,
    private loginService: LoginService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<FaceComponent>
  ) {}
  public ngOnInit(): void {
    this.cameraService
      .getMediaDevices()
      .getUserMedia({ video: true, audio: false })
      .then(function(stream) {
        var video: any = document.querySelector("#videoElement");
        video.srcObject = stream;
      })
      .catch(function(err0r) {
        console.log("Something went wrong!");
      });
  }

  get submitButtonName() {
    return this.data.buttonName;
  }
  onCancel() {
    this.stopCamera();
    this.data.cancelled = true;
    this.dialogRef.close();
  }
  stopCamera() {
    var video: any = document.querySelector("#videoElement");
    var stream = video.srcObject;
    var tracks = stream.getTracks();

    for (var i = 0; i < tracks.length; i++) {
      var track = tracks[i];
      track.stop();
    }

    video.srcObject = null;
  }
  processImage() {
    if (!this.subscriptionKey) {
      console.log("subscriptionKey Invalid");
      return;
    }

    this.cameraService.getPhoto().subscribe(base64Image => {
      this.stopCamera();

      this.imageString = base64Image;

      this.faceRecognitionService
        .scanImage(this.subscriptionKey, base64Image)
        .subscribe(resp => {
          this.data.faceId = resp[0].faceId;
          this.dialogRef.close();
        });
    });

    // this.faceApiResponse = this.cameraService.getPhoto().pipe(
    //   switchMap(base64Image => {
    //     console.log("Inside getPhoto");
    //     this.isButtonVisible = false;
    //     this.imageString = base64Image;

    //     return this.faceRecognitionService.scanImage(
    //       this.subscriptionKey,
    //       base64Image
    //     );
    //   })
    // );
  }
}
