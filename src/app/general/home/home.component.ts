import { ActivatedRoute, Router } from '@angular/router';
import { EventEmitter, Component, OnInit, Output, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  isHome!: boolean
  fromHome: string = ""
  types: string[][] = [['Numbers','/assets/numbers.png'],[ 'Letters','/assets/abc.png']]
  @Output()
  onChangeType: EventEmitter<string> = new EventEmitter<string>()

  constructor(private route: ActivatedRoute, private _router: Router,private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.ref.detectChanges(); 
    
    this.fromHome = this.route.snapshot.params['type'];
    if ((typeof this.fromHome == 'undefined') || (this.fromHome == 'home')) {
      this.isHome = true
    }
  }
  navigate(page: string) {
    this._router.navigate([page, { type: 'typeDefault' }])
  }

  navigateWithType(page: string, Type: string) {
    this._router.navigate([page, { type: Type }])
    this.onChangeType.emit(Type)
  }

  toHome() {
    this._router.navigate(["home", { type: 'home' }])
  }
}
