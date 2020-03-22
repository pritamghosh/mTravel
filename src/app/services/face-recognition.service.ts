import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs/Observable";

@Injectable({
  providedIn: "root"
})
export class FaceRecognitionService {
  faceResponse: Observable<any>;
  constructor(private httpClient: HttpClient) {}

  scanImage(subscriptionKey: string, base64Image: string) {
    const headers = this.getHeaders(subscriptionKey);
    const params = this.getParams();
    const blob = this.makeblob(base64Image);

    this.faceResponse = this.httpClient.post<any>(environment.endpoint, blob, {
      params,
      headers
    });
    return this.faceResponse;
  }

  private makeblob(dataURL) {
    const BASE64_MARKER = ";base64,";
    const parts = dataURL.split(BASE64_MARKER);
    const contentType = parts[0].split(":")[1];
    const raw = window.atob(parts[1]);
    console.log(raw);

    const rawLength = raw.length;
    const uInt8Array = new Uint8Array(rawLength);

    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }

    console.log(uInt8Array);

    return new Blob([uInt8Array], { type: contentType });
  }

  private getHeaders(subscriptionKey: string) {
    let headers = new HttpHeaders();
    headers = headers.set("Content-Type", "application/octet-stream");
    headers = headers.set("Ocp-Apim-Subscription-Key", subscriptionKey);

    return headers;
  }

  private getParams() {
    const httpParams = new HttpParams()
      .set("returnFaceId", "true")
      .set("returnFaceLandmarks", "false")
      .set(
        "returnFaceAttributes",
        "age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise"
      );

    return httpParams;
  }
}
