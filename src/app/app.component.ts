import { Component } from '@angular/core';
import { AdvantageType } from 'src/types/advantage.type';
import { FormValuesType } from 'src/types/form-value.type';
import { ProductType } from 'src/types/product.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public advantages: AdvantageType[] = [
    {
      image_size: ' width="20px" height="42px"',
      y: 'y="42.0619999999999px"',
      number: '1',
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      image_size: ' width="29px" height="43px"',
      y: 'y="43.0719999999999px"',
      number: '2',
      title: 'Много вкусов',
      description: ' Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      image_size: ' width="31px" height="43px"',
      y: 'y="43.0719999999999px"',
      number: '3',
      title: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей! '
    },
    {
      image_size: ' width="34px" height="42px"',
      y: 'y="42.0619999999999px"',
      number: '4',
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    },
  ]

  public products: ProductType[] = [
    {
      image: "macaroon1.png",
      title: "Макарун с малиной",
      price: '1,70'
    },
    {
      image: "macaroon2.png",
      title: "Макарун с манго",
      price: '1,70'
    },
    {
      image: "macaroon3.png",
      title: "Пирог с ванилью",
      price: '1,70'
    },
    {
      image: "macaroon4.png",
      title: "Пирог с фисташкой",
      price: '1,70'
    }
  ]

  public formValues: FormValuesType = {
    productTitle: '',
    name: '',
    phone: '',
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({ behavior: "smooth" });
  }

  public addToCard(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = product.title.toUpperCase();

  }

  public showPresent: boolean = false;
  public phone: string = "375 (29) 368-98-68";
  public instagram: string = 'Мы в Instagram';

}
