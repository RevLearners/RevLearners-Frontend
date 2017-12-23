import {HttpClient} from "@angular/common/http";

export const backendUrl: string = "http://localhost:8085/RevLearners";

export class BackendService {
    constructor(private http: HttpClient) {
    }
}
