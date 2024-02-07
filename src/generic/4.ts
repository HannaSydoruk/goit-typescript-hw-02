/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface IPageInfo {
  title: string;
}

class Component<T> {
  constructor (public props: T) {

  }
}

class Page extends Component<IPageInfo> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};