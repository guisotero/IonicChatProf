import { OnInit } from "@angular/core";

import { App, AlertController, MenuController, NavController } from 'ionic-angular';

import { SigninPage } from './../pages/signin/signin';
import { AuthService } from "../providers/auth/auth.service";

export abstract class BaseComponent implements OnInit {

    protected navCtrl: NavController;

    constructor(
        public alertCtrl: AlertController,
        public authService: AuthService,
        public app: App,
        public menuCtrl: MenuController
    ) {}

    ngOnInit(): void {
        this.navCtrl = this.app.getActiveNavs()[0];
    }

    onLogout(): void {
        this.alertCtrl.create({
            message: 'Voce deseja sair?',
            buttons: [
                {
                    text: 'sim',
                    handler: () => {
                        this.authService.logout()
                            .then(() => {
                                this.navCtrl.setRoot(SigninPage);
                                this.menuCtrl.enable(false, 'user-menu');
                            });
                    }
                },
                {
                    text: 'Nao'
                }
            ]
        }).present();
    }

}
