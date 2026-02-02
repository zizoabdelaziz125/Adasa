import { Component } from '@angular/core';
import { Hero } from "./hero/hero";
import { FeaturedArticles } from "./featured-articles/featured-articles";
import { Categories } from "./categories/categories";
import { LatestArticles } from "./latest-articles/latest-articles";
import { Newsletter } from "../../shared/newsletter/newsletter";

@Component({
  selector: 'app-home',
  imports: [ Hero, FeaturedArticles, Categories, LatestArticles, Newsletter],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
