import { Component, OnInit, Inject } from '@angular/core';
import { FileUploader, FileItem } from 'ng2-file-upload';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FilesService } from '../files.service';
import { ViprahubService } from '../viprahub.service';
import { ModelsService } from '../models.service';
import { LoggedinUserInfoService } from '../services/loggedin-user-info.service';

@Component({
  selector: 'app-upload-download',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadDownloadComponent implements OnInit {


  constructor() {}

  ngOnInit() {

  }
}
