import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { User } from '../users/user.type';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) {}

  user = new Subject<string>();
  user$ = this.user.asObservable();

  login(email: string, password: string) {
    return this.http
      .post<User>(
        `${this.baseUrl}auth/login`,
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .pipe(tap((user) => this.user.next(user.username)));
  }

  getProfile() {
    return this.http
      .get<User>(`${this.baseUrl}auth/me`, {
        withCredentials: true,
      })
      .pipe(tap((user) => this.user.next(user.username)));
  }
}
