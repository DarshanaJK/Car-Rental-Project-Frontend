import { NgModule} from "@angular/core";

//NG ZORRO IMPORTS
import {NzSpinModule} from "ng-zorro-antd/spin";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzMessageService} from "ng-zorro-antd/message";

@NgModule({
  exports: [
    //NG ZORRO IMPORTS
    NzSpinModule,
    NzFormModule,
    NzInputModule,
    NzLayoutModule,
    NzButtonModule,
  ]
})

export class NgZorroImportsModule { }
