import { Component, OnInit} from "@angular/core";

@Component({
    selector: 'spread-js',
    templateUrl: './spread.component.html'
  })
export class SpreadComponent {
    title: any;
    spreadBackColor = 'aliceblue';
    sheetName = 'Java 101 Chapters';
    hostStyle = {
        width: '800px',
        height: '600px'
    };
    data: any;
    rowOutlineInfo: any;
    showRowOutline = true;

    constructor(){
    let commands = [
        { name: 'Preface', chapter: '1', page: 1, indent: 0 },
        { name: 'Java SE5 and SE6', chapter: '1.1', page: 2, indent: 1 },
        { name: 'Java SE6', chapter: '1.1.1', page: 2, indent: 2 },
        { name: 'The 4th edition', chapter: '1.2', page: 2, indent: 1 },
        { name: 'Changes', chapter: '1.2.1', page: 3, indent: 2 },
        { name: 'Note on the cover design', chapter: '1.3', page: 4, indent: 1 },
        { name: 'Acknowledgements', chapter: '1.4', page: 4, indent: 1 },
        { name: 'Introduction', chapter: '2', page: 9, indent: 0 },
        { name: 'Prerequisites', chapter: '2.1', page: 9, indent: 1 },
        { name: 'Learning Java', chapter: '2.2', page: 10, indent: 1 },
        { name: 'Goals', chapter: '2.3', page: 10, indent: 1 },
        { name: 'Teaching from this book', chapter: '2.4', page: 11, indent: 1 },
        { name: 'JDK HTML documentation', chapter: '2.5', page: 11, indent: 1 },
        { name: 'Exercises', chapter: '2.6', page: 12, indent: 1 },
        { name: 'Foundations for Java', chapter: '2.7', page: 12, indent: 1 },
        { name: 'Source code', chapter: '2.8', page: 12, indent: 1 },
        { name: 'Coding standards', chapter: '2.8.1', page: 14, indent: 2 },
        { name: 'Errors', chapter: '2.9', page: 14, indent: 1 },
        { name: 'Introduction to Objects', chapter: '3', page: 15, indent: 0 },
        { name: 'The progress of abstraction', chapter: '3.1', page: 15, indent: 1 },
        { name: 'An object has an interface', chapter: '3.2', page: 17, indent: 1 },
        { name: 'An object provides services', chapter: '3.3', page: 18, indent: 1 },
        { name: 'The hidden implementation', chapter: '3.4', page: 19, indent: 1 },
        { name: 'Reusing the implementation', chapter: '3.5', page: 20, indent: 1 },
        { name: 'Inheritance', chapter: '3.6', page: 21, indent: 1 },
        { name: 'Is-a vs. is-like-a relationships', chapter: '3.6.1', page: 24, indent: 2 },
        { name: 'Interchangeable objects with polymorphism', chapter: '3.7', page: 25, indent: 1 },
        { name: 'The singly rooted hierarchy', chapter: '3.8', page: 28, indent: 1 },
        { name: 'Containers', chapter: '3.9', page: 28, indent: 1 },
        { name: 'Parameterized types (Generics)', chapter: '3.10', page: 29, indent: 1 },
        { name: 'Object creation & lifetime', chapter: '3.11', page: 30, indent: 1 },
        { name: 'Exception handling: dealing with errors', chapter: '3.12', page: 31, indent: 1 },
        { name: 'Concurrent programming', chapter: '3.13', page: 32, indent: 1 },
        { name: 'Java and the Internet', chapter: '3.14', page: 33, indent: 1 },
        { name: 'What is the Web?', chapter: '3.14.1', page: 33, indent: 2 },
        { name: 'Client-side programming', chapter: '3.14.2', page: 34, indent: 2 },
        { name: 'Server-side programming', chapter: '3.14.3', page: 38, indent: 2 },
        { name: 'Summary', chapter: '3.15', page: 38, indent: 1 },
        { name: 'End', chapter: '', indent: null }

    ];
    this.data = commands;
}
    ngOnInit() {
        this.title = "Welcome to spreadjs tutorial";
        
      };
    
}
