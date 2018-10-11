import { Component, OnInit, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import chartJs from 'chart.js';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.page.html',
  styleUrls: ['./graficas.page.scss'],
})
export class GraficasPage implements OnInit {

@ViewChild('barCanvas') barCanvas;
@ViewChild('lineCanvas') lineCanvas;
@ViewChild('pieCanvas') pieCanvas;
@ViewChild('doughnutCanvas') doughnutCanvas;

barChart: any;
lineChart: any;
pieChart: any;
doughnutChart : any;


  lugares: any = [
    {nombre: 'lugar 1', direccion: 'direccion 1', categoria: 'categoria 1'},
    {nombre: 'lugar 2', direccion: 'direccion 2', categoria: 'categoria 2'},
    {nombre: 'lugar 3', direccion: 'direccion 3', categoria: 'categoria 3'}
  ];
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    setTimeout(() => {
      this.barChart = this.getBarChart();
      this.lineChart = this.getLineChart();
    }, 150)
    setTimeout(() => {
      this.pieChart = this.getPieChart();
      this.doughnutChart = this.getDoughnutChart();
    }, 250)
  }

  getChart(context, chartType, data, options?) {
    return new chartJs(context, {
      data,
      options,
      type: chartType
    })
  }


  getBarChart(){
    const data = {
      labels: ['Coca-Cola', 'Zucaritas', 'Tortillinas', 'Gansito', 'Leche'],
      datasets: [{
        label: 'Tienda',
        data: [90, 40, 120, 40, 140],
        backgroundColor: [
          'rgba(255, 43, 46, 0.7)',
          'rgba(23, 109, 233, 0.7)',
          'rgba(255, 207, 0,0.7)',
          'rgba(109, 190, 31, 0.7)',
          'rgba(59, 27, 98, 0.7)'
        ],
        borderWidth: 1
      }]
    };

    const options = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }

    return this.getChart(this.barCanvas.nativeElement, 'bar', data, options);
  }

  getLineChart(){
    const data = {
      labels: ['Jun', 'Jul', 'Ago', 'Sep'],
      datasets: [{
        label: 'Ganancias',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(23, 109, 233, 0.7)',
        borderColor: 'rgba(23, 109, 233, 0.7)',
        borderCapStyle: 'butt',
        borderJoinStyle: 'miter',
        pointRadius: 1,
        pointHitRadius: 10,
        data:[2000, 4050, 8900, 15570],
        scanGaps: false,
      }, {
        label: 'Gastos',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(255, 43, 46, 0.7)',
        borderColor: 'rgba(255, 43, 46, 0.7)',
        borderCapStyle: 'butt',
        borderJoinStyle: 'miter',
        pointRadius: 1,
        pointHitRadius: 10,
        data:[6000, 4700, 4500, 3900],
        scanGaps: false,
      }
    ]
    }

    return this.getChart(this.lineCanvas.nativeElement, 'line', data)
  }

  getPieChart(){
    const data = {
      labels: ['Médicamentos', 'Servicios', 'Alimentos'],
      datasets: [{
        data: [75, 300, 224],
        backgroundColor: ['rgba(23, 109, 233, 0.7)', 'rgba(255, 43, 46, 0.7)', 'rgba(255, 207, 0,0.7)']
      }]
    }

    return this.getChart(this.pieCanvas.nativeElement, 'pie', data);
  }

  getDoughnutChart(){
    const data = {
      labels: ['Médicamentos', 'Servicios', 'Alimentos'],
      datasets: [{
        label: 'Teste Chart',
        data: [12, 25, 40],
          backgroundColor: [
          'rgba(23, 109, 233, 0.7)',
          'rgba(255, 43, 46, 0.7)',
          'rgba(255, 207, 0, 0.7)'
        ]
      }]
    }

    return this.getChart(this.doughnutCanvas.nativeElement, 'doughnut', data);
  }




}
