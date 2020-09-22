import {AfterViewInit, Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";



@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.scss']
})
export class GoogleComponent implements OnInit, AfterViewInit {
  windowObjectReference = null;
  previousUrl = null;
  url:string;
  params;
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      // see also
      window.opener.postMessage(this.params);
      console.log(val instanceof NavigationEnd)
    });
  }
  ngAfterViewInit() {
    this.params = window.location.search;
    console.log('1', this.params)

    if (window.opener) {
      this.params = window.location.search;

      console.log('2', this.params)
      // send them to the opening window
      // window.opener.postMessage(this.params);
      // close the popup
      // window.close();
    }
  }

  // receiveMessage (event: MessageEvent<any>) {
  //   console.log(event)
  // }
  openSignInWindow(url, name) {
    // remove any existing event listeners
    window.removeEventListener('message', this.receiveMessage);

    // window features
    const strWindowFeatures =
      'toolbar=no, menubar=no, width=600, height=700, top=100, left=100';

    if (this.windowObjectReference === null || this.windowObjectReference.closed) {
      /* if the pointer to the window object in memory does not exist
       or if such pointer exists but the window was closed */
      this.windowObjectReference = window.open('/login', 'child',
        'toolbar=no,location=no,directories=no,status=no,menubar=no,' +
        'titlebar=no,fullscreen=no,scrollbars=1,resizable=no,width=430,height=220,left=500,top=100');
      // this.windowObjectReference = window.open(url, name, strWindowFeatures);
    // }
    } else if (this.previousUrl !== url) {
      /* if the resource to load is different,
       then we load it in the already opened secondary window and then
       we bring such window back on top/in front of its parent window. */
      this.windowObjectReference = window.open('/login', 'child',
        'toolbar=no,location=no,directories=no,status=no,menubar=no,' +
        'titlebar=no,fullscreen=no,scrollbars=1,resizable=no,width=430,height=220,left=500,top=100');
      this.windowObjectReference.focus();
    } else {
      /* else the window reference must exist and the window
       is not closed; therefore, we can bring it back on top of any other
       window with the focus() method. There would be no need to re-create
       the window or to reload the referenced resource. */
      this.windowObjectReference.focus();
    }
    // add the listener for receiving a message from the popup
    window.addEventListener('message', event => this.receiveMessage(event), false);
    // assign the previous URL
    this.previousUrl = url;
  }
  receiveMessage(event){
    console.log('3',event)
    console.log('3',event.path[0].location.pathname)
    // Do we trust the sender of this message? (might be
    // different from what we originally opened, for example).
    // if (event.origin !== BASE_URL) {
    //   return;
    // }
    const { data } = event;
    // if we trust the sender and the source is our popup
    // if (data.source === 'lma-login-redirect') {
    //   // get the URL params and redirect to our server to use Passport to auth/login
    //   const { payload } = data;
    //   const redirectUrl = `/auth/google/login${payload}`;
    //   window.location.pathname = redirectUrl;
    // }
  };


}
