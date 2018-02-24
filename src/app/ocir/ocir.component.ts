import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

import { NavButtonComponent } from '../nav-button/nav-button.component';
import { CurParticipantService } from '../participant/cur-participant.service';
import { ParticipantService } from '../participant/participant.service';

@Component({
  selector: 'tg-ocir',
  templateUrl: './ocir.component.html',
  styleUrls: ['./ocir.component.css'],
  providers: [ ParticipantService ]
})

export class OcirComponent {
  answers: { value: string }[] = [
    { value: '0' },
    { value: '0' },
    { value: '0' },
    { value: '0' },
    { value: '0' },
    { value: '0' },
    { value: '0' },
    { value: '0' },
    { value: '0' },
    { value: '0' },
    { value: '0' },
    { value: '0' },
    { value: '0' },
    { value: '0' },
    { value: '0' },
    { value: '0' },
    { value: '0' },
    { value: '0' }
  ]
  answersSubmitted: boolean;
  feedback: {}
  numResponse: number;
  quess: { ques: string, a: string, b: string, c: string, d:string, e:string, f:string, id:string, ans: string }[];

  constructor(private router: Router,
              private participantService: ParticipantService,
              private curParticipantService: CurParticipantService,
              private http: Http) {
    this.http.get('/assets/ocir.json')
            .subscribe(res => {
              this.quess = res.json();
            });
    this.http.get('/assets/attention_check_feedback.json')
            .subscribe(res => {
              this.feedback = res.json();
            });
  }

  checkAnswer(): void {
    this.answersSubmitted = true;
    this.numResponse = this.answers.map((answer, idx) => {
      return +(answer.value === this.quess[idx].id);
    })
    .reduce((total, current) => {return total + current}, 0);
    this.curParticipantService.numResponse = this.numResponse;
    this.participantService.updateParticipant(this.curParticipantService.participant)
                            .subscribe();
  }

  isValid(): boolean {
    let numAnswered = 0;
    this.answers.forEach(answer => {
      if (parseInt(answer.value) > 0)
        numAnswered++;
    });
    return numAnswered === 18;
  }
}
