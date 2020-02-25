import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { LoginService } from "../services/login.service";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogConfig
} from "@angular/material/dialog";
import { FaceComponent } from "../face/face.component";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {}
  loginForm: FormGroup;
  returnUrl: string;
  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, Validators.required),
      faceId: new FormControl()
    });
  }

  onSubmit() {
    this.loginService.login(this.loginForm.value).then(resp => {
      this.router.navigateByUrl(this.returnUrl);
    });
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      faceId: "",
      buttonName: "Login"
    };

    const dialogRef = this.dialog.open(FaceComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (!dialogConfig.data.cancelled && dialogConfig.data.faceId != null) {
        this.loginForm.get("faceId").setValue(dialogConfig.data.faceId);
        this.onSubmit();
      }
    });
  }
}
