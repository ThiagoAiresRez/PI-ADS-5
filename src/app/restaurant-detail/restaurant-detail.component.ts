import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {RestaurantsService} from '../restaurants/restaurant/restaurants.service'
import { Restaurant } from '../restaurants/restaurant/restaurant.model'

@Component({
  selector: 'ap-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant

  constructor(private restaurantsService: RestaurantsService, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = 
    this.restaurantsService.restaurantById(this.route.snapshot.params['id'])
    .subscribe(restaurant => this.restaurant = restaurant)
  }

}
