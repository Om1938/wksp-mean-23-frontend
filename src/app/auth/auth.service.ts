import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) {}

  login(email: string, password: string) {
    return this.http.post(`${this.baseUrl}auth/login`, {
      email,
      password,
    });
  }
}
