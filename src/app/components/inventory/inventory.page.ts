import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.page.html',
  styleUrls: ['./inventory.page.scss'],
})
export class InventoryPage implements OnInit {

  sensors = [{"sensorId":"sensor-14","avg_temperature":44.892041524251304,"max_temperature":144.38213,"min_temperature":-25.963116,"avg_humidity":46.68814388910929,"max_humidity":98.99461,"min_humidity":0.4975915},
    {"sensorId":"sensor-5","avg_temperature":43.34910063743591,"max_temperature":147.28601,"min_temperature":-49.79532,"avg_humidity":52.87135496735573,"max_humidity":98.98124,"min_humidity":1.3794899},
    {"sensorId":"sensor-15","avg_temperature":52.35545471736363,"max_temperature":139.5441,"min_temperature":-35.580837,"avg_humidity":48.417285442352295,"max_humidity":98.1404,"min_humidity":6.514329},
    {"sensorId":"sensor-4","avg_temperature":46.81761108125959,"max_temperature":143.33984,"min_temperature":-45.29419,"avg_humidity":52.43080461238112,"max_humidity":99.87413,"min_humidity":0.18576384},
    {"sensorId":"sensor-16","avg_temperature":26.67456595102946,"max_temperature":104.659836,"min_temperature":-45.184135,"avg_humidity":53.984077612559,"max_humidity":82.95709,"min_humidity":12.962145},
    {"sensorId":"sensor-18","avg_temperature":73.32830483572823,"max_temperature":147.35121,"min_temperature":-43.537594,"avg_humidity":54.16736652169909,"max_humidity":98.63535,"min_humidity":3.4859478},
    {"sensorId":"sensor-6","avg_temperature":56.032775004704796,"max_temperature":139.85124,"min_temperature":-42.484486,"avg_humidity":38.568687538305916,"max_humidity":99.24204,"min_humidity":0.23053885},
    {"sensorId":"sensor-10","avg_temperature":71.45606327056885,"max_temperature":148.29504,"min_temperature":-19.93959,"avg_humidity":51.59092456102371,"max_humidity":93.91644,"min_humidity":11.584848},
    {"sensorId":"sensor-11","avg_temperature":68.26686520046658,"max_temperature":125.08769,"min_temperature":-40.658722,"avg_humidity":55.22199477089776,"max_humidity":94.55674,"min_humidity":3.6001086},
    {"sensorId":"sensor-2","avg_temperature":52.28431582900713,"max_temperature":149.95865,"min_temperature":-49.663734,"avg_humidity":50.32239919563509,"max_humidity":99.84322,"min_humidity":1.3147116},
    {"sensorId":"sensor-3","avg_temperature":54.04702220243566,"max_temperature":148.58833,"min_temperature":-46.3055,"avg_humidity":49.082303358059306,"max_humidity":96.708206,"min_humidity":0.08111596},
    {"sensorId":"sensor-17","avg_temperature":63.28305080958775,"max_temperature":123.55832,"min_temperature":-35.448,"avg_humidity":49.968835302761626,"max_humidity":95.94921,"min_humidity":0.46437383},
    {"sensorId":"sensor-9","avg_temperature":23.991934299468994,"max_temperature":112.02287,"min_temperature":-29.721296,"avg_humidity":54.19291500250498,"max_humidity":96.13486,"min_humidity":0.3094554},
    {"sensorId":"sensor-7","avg_temperature":55.783411916097,"max_temperature":142.27603,"min_temperature":-43.472324,"avg_humidity":57.82327156066894,"max_humidity":97.74057,"min_humidity":19.502962},
    {"sensorId":"sensor-13","avg_temperature":20.625694433848064,"max_temperature":106.69351,"min_temperature":-47.996296,"avg_humidity":37.74838354190191,"max_humidity":87.455376,"min_humidity":2.343756},
    {"sensorId":"sensor-8","avg_temperature":90.29381521124589,"max_temperature":144.10657,"min_temperature":-20.940006,"avg_humidity":62.71785058473286,"max_humidity":93.40577,"min_humidity":0.5272627},
    {"sensorId":"sensor-20","avg_temperature":75.1158836364746,"max_temperature":149.88008,"min_temperature":-28.03402,"avg_humidity":48.75142850875854,"max_humidity":98.616005,"min_humidity":13.963824},
    {"sensorId":"sensor-19","avg_temperature":32.032103493100124,"max_temperature":128.65527,"min_temperature":-37.03568,"avg_humidity":43.89633628300258,"max_humidity":95.54478,"min_humidity":4.804784},
    {"sensorId":"sensor-12","avg_temperature":37.17107290380142,"max_temperature":133.79958,"min_temperature":-46.843945,"avg_humidity":42.3524491927203,"max_humidity":99.72279,"min_humidity":4.99354},
    {"sensorId":"sensor-1","avg_temperature":51.362637711202865,"max_temperature":149.9821,"min_temperature":-49.943077,"avg_humidity":50.73405764852928,"max_humidity":99.95446,"min_humidity":0.027632713}]
    ;
  filteredSensors : any;
  searchTerm = '';
  inventoryData: any;
  constructor(private restService: RestService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    try {
      this.filteredSensors = this.sensors;
    } catch (error) {
      console.error('Error loading data', error);
    }
  }

  filterSensors() {
    const term = this.searchTerm.toLowerCase();
    this.filteredSensors = this.sensors.filter((sensor: any) =>
      sensor.sensorId.toLowerCase().includes(term)
    );
  }
}
