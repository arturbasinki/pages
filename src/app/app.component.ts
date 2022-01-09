import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage: number = 0;
  tmp: boolean = true;
  images = [
    {
      title: 'Being on the beach.',
      url: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=1296&q=60',
    },
    {
      title: 'Being in the mountains.',
      url: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1296&q=60',
    },
    {
      title: 'Being in the woods.',
      url: 'https://images.unsplash.com/photo-1596237563267-84ffd99c80e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1296&q=60',
    },
    {
      title: 'Being at the lake.',
      url: 'https://images.unsplash.com/photo-1557456170-0cf4f4d0d362?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1296&q=60',
    },
    {
      title: 'Being on the beach.',
      url: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=1296&q=60',
    },
    {
      title: 'Being in the mountains.',
      url: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1296&q=60',
    },
    {
      title: 'Being in the woods.',
      url: 'https://images.unsplash.com/photo-1596237563267-84ffd99c80e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1296&q=60',
    },
    {
      title: 'Being at the lake.',
      url: 'https://images.unsplash.com/photo-1557456170-0cf4f4d0d362?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1296&q=60',
    },
    {
      title: 'Being on the beach.',
      url: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=1296&q=60',
    },
    {
      title: 'Being in the mountains.',
      url: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1296&q=60',
    },
    {
      title: 'Being in the woods.',
      url: 'https://images.unsplash.com/photo-1596237563267-84ffd99c80e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1296&q=60',
    },
    {
      title: 'Being at the lake.',
      url: 'https://images.unsplash.com/photo-1557456170-0cf4f4d0d362?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1296&q=60',
    },
    {
      title: 'Being on the beach.',
      url: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=1296&q=60',
    },
    {
      title: 'Being in the mountains.',
      url: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1296&q=60',
    },
    {
      title: 'Being in the woods.',
      url: 'https://images.unsplash.com/photo-1596237563267-84ffd99c80e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1296&q=60',
    },
    {
      title: 'Being at the lake.',
      url: 'https://images.unsplash.com/photo-1557456170-0cf4f4d0d362?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1296&q=60',
    },
  ];
  checkWindowInex(index: number) {
    this.tmp = Math.abs(this.currentPage - index) < 3;
    console.log(
      `current page : ${this.currentPage}
       index : ${index}
      `
    );
    console.log(this.tmp);
    return this.tmp;
  }
}
