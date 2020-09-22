import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit, AfterViewInit {
  animal: string;
  name: string;
  params

  constructor(public dialog: MatDialog) {}
 ngOnInit() {
 }
ngAfterViewInit() {
  this.params = window.location.search;
  console.log('1', this.params)

  if (window.opener) {
    this.params = window.location.search;

    console.log('4', this.params)
    // send them to the opening window
    window.opener.postMessage(this.params);
    // close the popup
    // window.close();
  }
}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-example.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  goGoogle(){
    window.location.replace('https://www.google.com/');
  }

}
