var IntroTourQueue=function(r,i){"use strict";var e=function(e){this.tourSetData=new i;var n=this.tourSetData.getAvailableTours();if(e&&e.remainingTours){for(var t in n)n.hasOwnProperty(t)&&e.remainingTours[t]&&(n[t]=r.extend(!0,n[t],e.remainingTours[t]));this.remainingTours=n}else this.remainingTours=n};return e.prototype.laterThisTour=function(){var r=this._findNextAvailableTour();r&&(r.showDate=new Date,r.showDate.setDate(r.showDate.getDate()+3),r.isLater=!0)},e.prototype.takeThisTour=function(){var r=this._findNextAvailableTour();r&&(r.isTaken=!0)},e.prototype.neverThisTour=function(){var r=this._findNextAvailableTour();r&&(r.isNever=!0)},e.prototype.getAvailableTour=function(i){var e=null,n=this._findNextAvailableTour(i);return n&&(e=r.extend(!0,{},n)),e},e.prototype._findNextAvailableTour=function(r){for(var i in this.remainingTours)if(this.remainingTours.hasOwnProperty(i)&&(r||!this.remainingTours[i].isTaken&&!this.remainingTours[i].isNever&&new Date>=new Date(this.remainingTours[i].showDate)))return this.remainingTours[i];return null},e.prototype.getOptions=function(){var r={};for(var i in this.remainingTours)this.remainingTours.hasOwnProperty(i)&&(r[i]={name:this.remainingTours[i].name,showDate:this.remainingTours[i].showDate,isLater:this.remainingTours[i].isLater,isTaken:this.remainingTours[i].isTaken,isNever:this.remainingTours[i].isNever});return{remainingTours:r}},e.prototype.makeLaterNowTours=function(){for(var r in this.remainingTours)this.remainingTours.hasOwnProperty(r)&&this.remainingTours[r]&&!0===this.remainingTours[r].isLater&&(this.remainingTours[r].showDate=new Date)},e}(jQuery,IntroTourData);