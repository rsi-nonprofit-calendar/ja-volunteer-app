import { HttpClient } from '@angular/common/http';


export class JoinEventService {
    constructor(http: HttpClient) {
        http.get("http://jsonplaceholder.typicode.com/posts")
            .subscribe(response => {
                console.log(response);
            });
    }




    getDetails() {
        return ["Event Name", "Time", "Details"];
    }
}


