import { Component} from '@angular/core';
import * as Highcharts from 'highcharts';
import { ServiceService } from '../services/service.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent {
   
   qualitychart: typeof Highcharts = Highcharts;  
   costChart: typeof Highcharts = Highcharts;
   colorchart: typeof Highcharts = Highcharts;
   QPC_chart: typeof Highcharts = Highcharts;


   quality_chartOptions: any;
   cost_chartOptions: any;
   color_chartOptions: any;
   qpc_chartOptions: any;

   producers:any=[];

   toggle = new FormControl('toggle');
   toggleLabel = new FormControl('Show analytic tools');

   selectedQ = new FormControl('');
   selectedC = new FormControl('');
   selecteP = new FormControl('');

   constructor(private service: ServiceService) {   }

   onChange() {
      if(this.toggleLabel.value == 'Show analytic tools') {
         this.toggleLabel.setValue('Hide analytic tools');
      }
      else{
         this.toggleLabel.setValue('Show analytic tools');
      }
   }

   onChangeQuality() {
      var PD: any = this.selectedQ.value;
      if (PD != "Qualities")
      {
      this.service.getForGraph(PD).subscribe(dt=> {
         var qData = dt.map((item, index) => ( {
            name: [item.Vineyard],
            data: [item.Quality/item.DIV]
         }));
         this.QualityChart(qData,"Qualities based on "+PD);
         })
      }
      else
      {
         this.retrieveData("Qualities");
      }
   }

   onChangeCost() {
      var CD: any = this.selectedC.value;
      if (CD != "Costs")
      {
         this.service.getForGraph(CD).subscribe(dt=>{
            var cData = dt.map((item, index) => ({
               name: [item.Vineyard],
               data: [item.Cost/item.DIV]
            }));
            this.CostChart(cData,"Costs based on "+CD);
            })
      }
      else
      {
         this.retrieveData("Costs");
      }
   }
   
   onChangeColor() {
      var Pro: any = this.selecteP.value;
      this.retrieveDataColor(Pro);
   }

   ngOnInit(): void{
      this.retrieveProducerList();
      this.retrieveData("init");
      this.retrieveDataColor("init");
   }
   retrieveProducerList(){
      this.service.getMetadata().subscribe(dt=>{
         this.producers = dt;
      });


   }

   retrieveData(sh: String) {
         this.service.getMetadata().subscribe(dt=>{
            var qData = dt.map((item, index) => ({
               name: [item.Vineyard],
               data: [item.Quality]
            }));
            var cData = dt.map((item, index) => ({
               name: [item.Vineyard],
               data: [item.Cost]
            }));
            var qpcData = dt.map((item, index) => ({
               name: [item.Vineyard],
               data: [item.Quality/item.Cost]
            }));


            if(sh == "init"){
               this.QualityChart(qData,"Qualities");
               this.CostChart(cData,"Costs");
               this.QPCChart(qpcData);
            }
            else if (sh == "Qualities"){
               this.QualityChart(qData,"Qualities");
            }
            else if (sh == "Costs"){
               this.CostChart(cData,"Costs");
            }
         });
   }
   
   retrieveDataColor(sh: string)
   {
      var ID: string
      if(sh == "init"){
         ID = "2016AR_2018";
      }
      else{
         ID = sh;
      }
      this.service.getColorList(ID).subscribe(dt=>{
         var colorData = dt.map((item)=> ({
            name: [item.Vineyard],
            data: [['Yellow',item.Yellow],['Red',item.Red],['Blue',item.Blue]],
            colors: ["#F9E79F","#CD6155","#2980B9"]
         }));
         this.ColorChart(colorData, dt[0].Vineyard);
      });
   }

   public QualityChart(dt: any, str: String){

      this.quality_chartOptions = 
      {
         chart: { type: 'column'},
         title: { text: 'Wind Qualities'},
         //subtitle:{ text: 'Keep on working'},
         accessibility: {
            announceNewData: {
                enabled: true
            }
         },
         xAxis: { categories:
              [
                str         
              ]},
         series: dt
      }
   }
   public CostChart(t: any, str: String){
      this.cost_chartOptions = 
      {
         chart: { type: 'column'},
         title: { text: 'Costs'},
         //subtitle:{ text: 'Keep on working'},
         accessibility: {
            announceNewData: {
                enabled: true
            }
         },
         xAxis: { categories:
              [
                  str         
              ]},
         series: t
      }
   }
   public ColorChart(t:any, str: String){
      this.color_chartOptions = 
      {
         chart: { type: 'pie'},
         title: { text: 'Berry colors'},
         subtitle:{ text: str},
         accessibility: {
            announceNewData: {
                enabled: true
            }
         },
         series: t
      }
   }
   public QPCChart(t: any){
      this.qpc_chartOptions = 
      {
         chart: { type: 'bar'},
         title: { text: 'Quality/Cost'},
         //subtitle:{ text: 'Keep on working'},
         accessibility: {
            announceNewData: {
                enabled: true
            }
         },
         xAxis: { categories:
              [
                'Quality/Cost'  
              ]},
         series: t
      }
   }

}
