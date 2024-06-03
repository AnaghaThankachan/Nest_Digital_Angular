import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {
  department=[
    {
      id:1,
      Title:"Healthcare",
      image:"../../../assets/healthcare.jpg",
      Discription:"Healthcare endeavors to empower individuals by offering accessible and comprehensive services, addressing diverse health needs while promoting holistic well-being across communities, ensuring everyone can lead healthier and more fulfilling lives."
    },
    {
      id:2,
      Title:"Banking",
      image:"../../../assets/banking.jpg",
      Discription:"Banking is the backbone of modern economies, providing financial services such as lending, borrowing, saving, and investing to individuals, businesses, and governments, facilitating economic growth and stability."
    },
    {
      id:3,
      Title:"Aerospace",
      image:"../../../assets/aeronautic.jpg",
      Discription:"Aerospace & Defence explores the science and engineering behind flight, encompassing the design, development, and operation of aircraft and spacecraft, driving innovation in transportation, exploration, and technology."
    },
    {
      id:4,
      Title:"Mobility",
      image:"../../../assets/mobility.jpg",
      Discription:"Mobility refers to the movement of people and goods, encompassing various modes of transportation, infrastructure, and technologies aimed at enhancing accessibility, efficiency, and sustainability in both urban and rural environments."
    },
    {
      id:5,
      Title:"GIS",
      image:"../../../assets/gis.jpg",
      Discription:"A Global Information System (GIS) integrates worldwide data sources for collecting, managing, analyzing, and visualizing information, aiding decision-making in fields like economics, environment, health, and security."
    },
    {
      id:6,
      Title:"Insurance",
      image:"../../../assets/insurance.jpg",
      Discription:"Contract between an individual/entity and an insurer, providing financial protection against specified losses for premium payments, mitigating risks and offering peace of mind amid unexpected events like accidents, illnesses, property damage, or liability claims."
    },
  ]

}
