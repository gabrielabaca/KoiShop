export interface ICartProps {
    data: [{
      key: string,
      data:{
        name: string,
        image: '',
        cantidad: number,
        price: number,
      }
    }],
    onQuitar: (item:string) => void;
    onRead: () => void;
  }