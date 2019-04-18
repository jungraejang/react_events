const React = require("react");
const militiaImg = require("../src/img/Untitled-1.png");
const corpsecImg = require("../src/img/Untitled-2.png");
const colonialForceImg = require("../src/img/Untitled-3.png");
const fedPlanetFleetImg = require("../src/img/Untitled-4.png");
const fedOritalFleetImg = require("../src/img/Untitled-5.png");
const fedInterFleetImg = require("../src/img/Untitled-6.png");
const HMSJRJImg = require("../src/img/Untitled-7.png");
const smallDomeImg = require("../src/img/smallDome.png");
const domeGroupImg = require("../src/img/domeGroup.png");
const largeDomeImg = require("../src/img/largeDome.png");
const undergroundCityImg = require("../src/img/undergroundCity.png");
const undergroundNetworkImg = require("../src/img/undergroundNetwork.png");
const colonialCapitalImg = require("../src/img/colonialCapital.png");
const orbitalStructureImg = require("../src/img/orbitalStructure.png");
const oreMineImg = require("../src/img/oreMine.png");
const gasPlantImg = require("../src/img/gasPlant.png");
const agriDomeImg = require("../src/img/agriDome.png");
const waterPlantImg = require("../src/img/waterPlant.png");
const nanoFabricImg = require("../src/img/nanofabric.png");
const spacePortImg = require("../src/img/spacePort.png");
const orbitalStationImg = require("../src/img/orbitalStation.png");
const startButton = require("../src/img/start_button.png");
const moneyButton = require("../src/img/money_button.png");


const Sound = require("react-sound").default;
const themeSong = require("../src/mp3/theme.mp3");

class Clicker extends React.Component {
  constructor() {
    super();
    this.state = {
      points: 0,
      population: 100,
      populationGrowth: 0,
      rate: 1,
      message: "START",
      startButtonDisabled: false,
      militaryIndex: 0,
      numberOfMines: 0,
      numberOfGasProcessing: 0,
      numberOfAgricultureDome: 0,
      numberOfWaterPlant: 0,
      numberOfNanoFabricator: 0,
      numberOfSpacePort: 0,
      numberOfOrbitalStation: 0,
      numberOfSmallDome: 0,
      numberOfDomeGroup: 0,
      numberOfLargeDome: 0,
      numberOfUndergroundCity: 0,
      numberOfUndergroundNetwork: 0,
      numberOfColonialCapital: 0,
      numberOfOrbitalStructure: 0,
      numberOfMilitia: 0,
      numberOfCorpSecForce: 0,
      numberOfColonialForce: 0,
      numberOfFedPlanetFleet: 0,
      numberOfFedOrbitFleet: 0,
      numberOfFedInterFleet: 0,
      numberOfHMSJRJ: 0
    };
  }

  // componentDidMount() {
  //   fetch("https://ghibliapi.herokuapp.com/films")
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(response => {
  //       this.setState({ movies: response });
  //     });
  // }

  handleClicker = () => {
    if(this.state.startButtonDisabled) {
    this.setState({
      points: this.state.points + this.state.rate
    });
  }
  };

  buyHMSJRJ = () => {
    let cost = 1000000;
    let populationCost = 1000000;
    if (
      this.state.points >= cost + this.state.numberOfHMSJRJ * 10 &&
      this.state.population >= populationCost + this.state.numberOfHMSJRJ * 10
    ) {
      this.setState({
        points: this.state.points - (cost + this.state.numberOfHMSJRJ * (cost / 10)),
        militaryIndex: this.state.militaryIndex + 1,
        numberOfHMSJRJ: (this.state.numberOfHMSJRJ += 1),
        population: (this.state.population -= 100),
        message: "Unit Ready"
      });
    } else if (
      this.state.population <=
      populationCost + this.state.numberOfHMSJRJ * 10
    ) {
      this.setState({
        message: "Not enough People. Need " + (cost - this.state.population)
      });
    } else if (
      this.state.points <= cost + this.state.numberOfHMSJRJ * 10 &&
      cost - this.state.points > 0
    ) {
      this.setState({
        message: "Not enough Credit. Need " + "$" + (cost - this.state.points)
      });
    }
  };

  buyFedInterFleet = () => {
    let cost = 100000;
    let populationCost = 100000;
    if (
      this.state.points >= cost + this.state.numberOfFedInterFleet * 10 &&
      this.state.population >=
        populationCost + this.state.numberOfFedInterFleet * 10
    ) {
      this.setState({
        points:
          this.state.points - (cost + this.state.numberOfFedInterFleet * (cost / 10)),
        militaryIndex: this.state.militaryIndex + 1,
        numberOfFedInterFleet: (this.state.numberOfFedInterFleet += 1),
        population: (this.state.population -= 100),
        message: "Unit Ready"
      });
    } else if (
      this.state.population <=
      populationCost + this.state.numberOfFedInterFleet * 10
    ) {
      this.setState({
        message: "Not enough People. Need " + (cost - this.state.population)
      });
    } else if (
      this.state.points <= cost + this.state.numberOfFedInterFleet * 10 &&
      cost - this.state.points > 0
    ) {
      this.setState({
        message: "Not enough Credit. Need " + "$" + (cost - this.state.points)
      });
    }
  };

  buyFedOrbitalFleet = () => {
    let cost = 20000;
    let populationCost = 20000;
    if (
      this.state.points >= cost + this.state.numberOfFedOrbitFleet * (cost / 10) &&
      this.state.population >=
        populationCost + this.state.numberOfFedOrbitFleet * 10
    ) {
      this.setState({
        points:
          this.state.points - (cost + this.state.numberOfFedOrbitFleet * (cost / 10)),
        militaryIndex: this.state.militaryIndex + 1,
        numberOfFedOrbitFleet: (this.state.numberOfFedOrbitFleet += 1),
        population: (this.state.population -= 100),
        message: "Unit Ready"
      });
    } else if (
      this.state.population <=
      populationCost + this.state.numberOfFedOrbitFleet * 10
    ) {
      this.setState({
        message: "Not enough People. Need " + (cost - this.state.population)
      });
    } else if (
      this.state.points <= cost + this.state.numberOfFedOrbitFleet * 10 &&
      cost - this.state.points > 0
    ) {
      this.setState({
        message: "Not enough Credit. Need " + "$" + (cost - this.state.points)
      });
    }
  };

  buyFedPlanetForce = () => {
    let cost = 5000;
    let populationCost = 5000;
    if (
      this.state.points >= cost + this.state.numberOfFedPlanetFleet * 10 &&
      this.state.population >=
        populationCost + this.state.numberOfFedPlanetFleet * (cost / 10)
    ) {
      this.setState({
        points:
          this.state.points - (cost + this.state.numberOfFedPlanetFleet * (cost / 10)),
        militaryIndex: this.state.militaryIndex + 1,
        numberOfFedPlanetFleet: (this.state.numberOfFedPlanetFleet += 1),
        population: (this.state.population -= populationCost),
        message: "Unit Ready"
      });
    } else if (
      this.state.population <=
      populationCost + this.state.numberOfFedPlanetFleet * 10
    ) {
      this.setState({
        message: "Not enough People. Need " + (cost - this.state.population)
      });
    } else if (
      this.state.points <= cost + this.state.numberOfFedPlanetFleet * 10 &&
      cost - this.state.points > 0
    ) {
      this.setState({
        message: "Not enough Credit. Need " + "$" + (cost - this.state.points)
      });
    }
  };

  buyColonialForce = () => {
    let cost = 1000;
    let populationCost = 1000;
    if (
      this.state.points >= cost + this.state.numberOfColonialForce * 10 &&
      this.state.population >=
        populationCost + this.state.numberOfColonialForce * (cost / 10)
    ) {
      this.setState({
        points:
          this.state.points - (cost + this.state.numberOfColonialForce * (cost / 10)),
        militaryIndex: this.state.militaryIndex + 1,
        numberOfColonialForce: (this.state.numberOfColonialForce += 1),
        population: (this.state.population -= 100),
        message: "Unit Ready"
      });
    } else if (
      this.state.population <=
      populationCost + this.state.numberOfColonialForce * 10
    ) {
      this.setState({
        message: "Not enough People. Need " + (cost - this.state.population)
      });
    } else if (
      this.state.points <= cost + this.state.numberOfColonialForce * 10 &&
      cost - this.state.points > 0
    ) {
      this.setState({
        message: "Not enough Credit. Need " + "$" + (cost - this.state.points)
      });
    }
  };

  buyCorpSecForce = () => {
    let cost = 300;
    let populationCost = 300;
    if (
      this.state.points >= cost + this.state.numberOfCorpSecForce * (cost / 10) &&
      this.state.population >=
        populationCost + this.state.numberOfCorpSecForce * 10
    ) {
      this.setState({
        points:
          this.state.points - (cost + this.state.numberOfCorpSecForce * (cost / 10)),
        militaryIndex: this.state.militaryIndex + 1,
        numberOfCorpSecForce: (this.state.numberOfCorpSecForce += 1),
        population: (this.state.population -= 100),
        message: "Unit Ready"
      });
    } else if (
      this.state.population <=
      populationCost + this.state.numberOfCorpSecForce * 10
    ) {
      this.setState({
        message: "Not enough People. Need " + (cost - this.state.population)
      });
    } else if (
      this.state.points <= cost + this.state.numberOfCorpSecForce * 10 &&
      cost - this.state.points > 0
    ) {
      this.setState({
        message: "Not enough Credit. Need " + "$" + (cost - this.state.points)
      });
    }
  };

  buyMilitia = () => {
    let cost = 100;
    let populationCost = 100;
    if (
      this.state.points >= cost + this.state.numberOfMilitia * 10 &&
      this.state.population >= populationCost + this.state.numberOfMilitia * 10
    ) {
      this.setState({
        points: this.state.points - (cost + this.state.numberOfMilitia * (cost / 10)),
        militaryIndex: this.state.militaryIndex + 1,
        numberOfMilitia: (this.state.numberOfMilitia += 1),
        population: (this.state.population -= 100),
        message: "Unit Ready"
      });
    } else if (
      this.state.population <=
      populationCost + this.state.numberOfMilitia * 10
    ) {
      this.setState({
        message:
          "Not enough People. Need " +
          (populationCost +
            this.state.numberOfMilitia * 10 -
            this.state.population)
      });
    } else if (
      this.state.points <= cost + this.state.numberOfMilitia * 10 &&
      cost - this.state.points > 0
    ) {
      this.setState({
        message: "Not enough Credit. Need " + "$" + (cost - this.state.points)
      });
    }
  };

  buyOrbitalStructure = () => {
    let cost = 100000;
    let popIncrease = 100000;
    if (this.state.points >= cost + this.state.numberOfOrbitalStructure * 10) {
      this.setState({
        points:
          this.state.points - (cost + this.state.numberOfOrbitalStructure * (cost / 10)),
        populationGrowth: this.state.populationGrowth + 3,
        numberOfOrbitalStructure: (this.state.numberOfOrbitalStructure += 1),
        population: (this.state.population += popIncrease),
        message: "Successfully Constructed"
      });
    } else if (cost - this.state.points > 0) {
      this.setState({
        message: "Not enough Credit. Need " + "$" + (cost - this.state.points)
      });
    }
  };

  buyColonialCapital = () => {
    let cost = 10000;
    let popIncrease = 10000;
    if (this.state.points >= cost + this.state.numberOfColonialCapital * 10) {
      this.setState({
        points:
          this.state.points - (cost + this.state.numberOfColonialCapital * (cost / 10)),
        populationGrowth: this.state.populationGrowth + 3,
        numberOfColonialCapital: (this.state.numberOfColonialCapital += 1),
        population: (this.state.population += popIncrease),
        message: "Successfully Constructed"
      });
    } else if (cost - this.state.points > 0) {
      this.setState({
        message: "Not enough Credit. Need " + "$" + (cost - this.state.points)
      });
    }
  };

  buyUndergroundNetwork = () => {
    let cost = 3000;
    let popIncrease = 3000;
    if (
      this.state.points >=
      cost + this.state.numberOfUndergroundNetwork * 10
    ) {
      this.setState({
        points:
          this.state.points -
          (cost + this.state.numberOfUndergroundNetwork * (cost / 10)),
        populationGrowth: this.state.populationGrowth + 3,
        numberOfUndergroundNetwork: (this.state.numberOfUndergroundNetwork += 1),
        population: (this.state.population += popIncrease),
        message: "Successfully Constructed"
      });
    } else if (cost - this.state.points > 0) {
      this.setState({
        message: "Not enough Credit. Need " + "$" + (cost - this.state.points)
      });
    }
  };

  buyUndergroundCity = () => {
    let cost = 1000;
    let popIncrease = 1000;
    if (this.state.points >= cost + this.state.numberOfUndergroundCity * 10) {
      this.setState({
        points:
          this.state.points - (cost + this.state.numberOfUndergroundCity * (cost / 10)),
        populationGrowth: this.state.populationGrowth + 3,
        numberOfUndergroundCity: (this.state.numberOfUndergroundCity += 1),
        population: (this.state.population += popIncrease),
        message: "Successfully Constructed"
      });
    } else if (cost - this.state.points > 0) {
      this.setState({
        message: "Not enough Credit. Need " + "$" + (cost - this.state.points)
      });
    }
  };

  buyLargeDome = () => {
    let cost = 500;
    let popIncrease = 500;
    if (this.state.points >= cost + this.state.numberOfLargeDome * 10) {
      this.setState({
        points: this.state.points - (cost + this.state.numberOfLargeDome * (cost / 10)),
        populationGrowth: this.state.populationGrowth + 3,
        numberOfLargeDome: (this.state.numberOfLargeDome += 1),
        population: (this.state.population += popIncrease),
        message: "Successfully Constructed"
      });
    } else if (cost - this.state.points > 0) {
      this.setState({
        message: "Not enough Credit. Need " + "$" + (cost - this.state.points)
      });
    }
  };

  buyDomeGroup = () => {
    let cost = 300;
    let popIncrease = 300;
    if (this.state.points >= cost + this.state.numberOfDomeGroup * 10) {
      this.setState({
        points: this.state.points - (cost + this.state.numberOfDomeGroup * (cost / 10)),
        populationGrowth: this.state.populationGrowth + 3,
        numberOfDomeGroup: (this.state.numberOfDomeGroup += 1),
        population: (this.state.population += popIncrease),
        message: "Successfully Constructed"
      });
    } else if (cost - this.state.points > 0) {
      this.setState({
        message: "Not enough Credit. Need " + "$" + (cost - this.state.points)
      });
    }
  };

  buySmallDome = () => {
    let cost = 100;
    let popIncrease = 100;
    if (this.state.points >= cost + this.state.numberOfSmallDome * 10) {
      this.setState({
        points: this.state.points - (cost + this.state.numberOfSmallDome * (cost / 10)),
        populationGrowth: this.state.populationGrowth + 3,
        numberOfSmallDome: (this.state.numberOfSmallDome += 1),
        population: (this.state.population += popIncrease),
        message: "Successfully Constructed"
      });
    } else if (cost - this.state.points > 0) {
      this.setState({
        message: "Not enough Credit. Need " + "$" + (cost - this.state.points)
      });
    }
  };

  buyOrbitalStation = () => {
    let cost = 100000;
    let rateIncrease = 1000;
    let popIncrease = 10000;
    if (this.state.points >= cost + this.state.numberOfOrbitalStation * 10) {
      this.setState({
        points:
          this.state.points - (cost + this.state.numberOfOrbitalStation * 10),
        rate: this.state.rate + rateIncrease,
        numberOfOrbitalStation: (this.state.numberOfOrbitalStation += 1),
        population: (this.state.population += popIncrease),
        message: "Successfully Constructed"
      });
    } else if (cost - this.state.points > 0) {
      this.setState({
        message:
          "Not enough Credit. Need " +
          "$" +
          (cost + this.state.numberOfOrbitalStation * 10 - this.state.points)
      });
    }
  };

  buySpacePort = () => {
    let cost = 10000;
    let rateIncrease = 120;
    let popIncrease = 500;
    if (this.state.points >= cost + this.state.numberOfSpacePort * 10) {
      this.setState({
        points: this.state.points - (cost + this.state.numberOfSpacePort * 10),
        rate: this.state.rate + rateIncrease,
        numberOfSpacePort: (this.state.numberOfSpacePort += 1),
        population: (this.state.population += popIncrease),
        message: "Successfully Constructed"
      });
    } else if (cost - this.state.points > 0) {
      this.setState({
        message:
          "Not enough Credit. Need " +
          "$" +
          (cost + this.state.numberOfSpacePort * 10 - this.state.points)
      });
    }
  };

  buyNanoFabricator = () => {
    let cost = 3000;
    let rateIncrease = 45;
    // let population = 0;
    let popIncrease = 0;
    if (this.state.points >= cost + this.state.numberOfNanoFabricator * 10) {
      this.setState({
        points:
          this.state.points - (cost + this.state.numberOfNanoFabricator * 10),
        rate: this.state.rate + rateIncrease,
        numberOfNanoFabricator: (this.state.numberOfNanoFabricator += 1),
        population: (this.state.population += popIncrease),
        message: "Successfully Constructed"
      });
    } else if (cost - this.state.points > 0) {
      this.setState({
        message:
          "Not enough Credit. Need " +
          "$" +
          (cost + this.state.numberOfNanoFabricator * 10 - this.state.points)
      });
    }
  };

  buyAgricultureDome = () => {
    let cost = 500;
    let rateIncrease = 7;
    let popIncrease = 50;
    if (this.state.points >= cost + this.state.numberOfAgricultureDome * 10) {
      this.setState({
        points:
          this.state.points - (cost + this.state.numberOfAgricultureDome * 10),
        rate: this.state.rate + rateIncrease,
        numberOfAgricultureDome: (this.state.numberOfAgricultureDome += 1),
        population: (this.state.population += popIncrease),
        message: "Successfully Constructed"
      });
    } else if (cost - this.state.points > 0) {
      this.setState({
        message:
          "Not enough Credit. Need " +
          "$" +
          (cost + this.state.numberOfAgricultureDome * 10 - this.state.points)
      });
    }
  };

  buyWaterPlant = () => {
    let cost = 1000;
    let rateIncrease = 10;
    let popIncrease = 100;
    if (this.state.points >= cost + this.state.numberOfWaterPlant * 10) {
      this.setState({
        points: this.state.points - (cost + this.state.numberOfWaterPlant * 10),
        rate: this.state.rate + rateIncrease,
        numberOfWaterPlant: (this.state.numberOfWaterPlant += 1),
        population: (this.state.population += popIncrease),
        message: "Successfully Constructed"
      });
    } else if (cost - this.state.points > 0) {
      this.setState({
        message:
          "Not enough Credit. Need " +
          "$" +
          (cost + this.state.numberOfWaterPlant * 10 - this.state.points)
      });
    }
  };

  buyGasProcessing = () => {
    let cost = 300;
    let rateIncrease = 5;
    if (this.state.points >= cost + this.state.numberOfGasProcessing * 10) {
      this.setState({
        points:
          this.state.points - (cost + this.state.numberOfGasProcessing * 10),
        rate: this.state.rate + rateIncrease,
        numberOfGasProcessing: (this.state.numberOfGasProcessing += 1),
        message: "Successfully Constructed"
      });
    } else if (cost - this.state.points > 0) {
      this.setState({
        message:
          "Not enough Credit. Need " +
          "$" +
          (cost + this.state.numberOfGasProcessing * 10 - this.state.points)
      });
    }
  };

  buyOreMine = () => {
    let cost = 100;
    let rateIncrease = 2;
    if (this.state.points >= cost + this.state.numberOfMines * 10) {
      this.setState({
        points: this.state.points - (cost + this.state.numberOfMines * 10),
        rate: this.state.rate + rateIncrease,
        numberOfMines: (this.state.numberOfMines += 1),
        message: "Successfully Constructed"
      });
    } else if (cost + this.state.numberOfMines * 10 - this.state.points > 0) {
      this.setState({
        message:
          "Not enough Credit. Need " +
          "$" +
          (cost + this.state.numberOfMines * 10 - this.state.points)
      });
    }
  };

//   onMouseover = (event) => {
//   this.setState({
//     text : 'some text'
//   })
// }
//   onMouseout = (event) => {
//   this.setState({
//     text : ''})
// }

  autoAccumulate = () => {
    this.setState({
      startButtonDisabled: true
    })
    setInterval(() => {
      this.setState({
        rate: this.state.rate,
        points: this.state.points + this.state.rate
      });
    }, 1000);
    setInterval(() => {
      this.setState({
        populationGrowth: Math.floor(this.state.population * 0.01),
        population: this.state.population + this.state.populationGrowth
      });
    }, 10000);
  };

  render() {
    const { points } = this.state;
    return (
      <div>
      <div className="game_title">
        <h1>{"J R J's Civilization ® : New Frontier"}</h1>
        </div>
        <div className="coreButtons">
        <button onClick={this.autoAccumulate} class="start_button" disabled={this.state.startButtonDisabled}>
        <img src={startButton} />
        </button>
          <audio controls autoplay>
            <source src={themeSong} type="audio/mpeg" />
          </audio>
          <img src={moneyButton} onClick={this.handleClicker} class="money_button" />
        </div>
        <div className="coreStats">
          <p>Galactic Credit Accumulated 💰: <br />${points}</p>
          <p>Credit Per Second 💵: <br />{this.state.rate}</p>
          <p>Total Population 👨‍🚀: <br />{this.state.population}</p>
          <p>Population Growth 🤱: <br />{this.state.populationGrowth}</p>
          <p>Defense Strength ⚔️: <br />{this.state.militaryIndex}</p>
        </div>
        <div className="middleMessage">
          <p>{this.state.message}</p>
        </div>
        <div className="allDiv">
          <div className="economyDiv">
            <div className="econBuildingsTabs">
              <button onClick={this.buyOreMine}>
                <img src={oreMineImg} />
                <p>Ore Mine <br /> ${100 + this.state.numberOfMines * (100 / 10)}</p>
              </button>
              <button onClick={this.buyGasProcessing}>
                <img src={gasPlantImg} />
                <p>Gas Processing Facility <br />$
                {300 + this.state.numberOfGasProcessing * (300 / 10)}</p>
              </button>
              <button onClick={this.buyAgricultureDome}>
                <img src={agriDomeImg} />
                <p>Agriculture Dome<br /> $
                {500 + this.state.numberOfAgricultureDome * (500 / 10)}</p>
              </button>
              <button onClick={this.buyWaterPlant}>
                <img src={waterPlantImg} />
                <p>Water Processing Plant<br /> $
                {1000 + this.state.numberOfWaterPlant * (1000 / 10)}</p>
              </button>
              <button onClick={this.buyNanoFabricator}>
                <img src={nanoFabricImg} />
                <p>Nano Fabricator<br /> $
                {3000 + this.state.numberOfNanoFabricator * (3000 / 10)}</p>
              </button>
              <button onClick={this.buySpacePort}>
                <img src={spacePortImg} />
                <p>Space Port<br /> $
                {10000 + this.state.numberOfSpacePort * (10000 / 10)}</p>
              </button>
              <button onClick={this.buyOrbitalStation}>
                <img src={orbitalStationImg} />
                <p>Orbital Station <br />$
                {100000 + this.state.numberOfOrbitalStation * (100000 / 10)}</p>
              </button>
            </div>
            <div className="econBuildingsStats">
              <p>Ore Mines in Operation 🗻: {this.state.numberOfMines}</p>
              <p>
                Gas Processing Facilities 🌋:{" "}
                {this.state.numberOfGasProcessing}
              </p>
              <p>
                Agricultural Domes 🥬:{" "}
                {this.state.numberOfAgricultureDome}
              </p>
              <p>
                Water Processing Plants 💧:{" "}
                {this.state.numberOfWaterPlant}
              </p>
              <p>
                Nano Fabricators ⚙️:{" "}
                {this.state.numberOfNanoFabricator}
              </p>
              <p>
                Space Ports ⚓️: {this.state.numberOfSpacePort}
              </p>
              <p>
                Orbital Stations 🛰:{" "}
                {this.state.numberOfOrbitalStation}
              </p>
            </div>
          </div>

          <div className="habitatDiv">
            <div className="habitatBuildingsTabs">
              <button onClick={this.buySmallDome}>
                <img src={smallDomeImg} />
                <p>Small Dome <br />${100 + this.state.numberOfSmallDome * (100 / 10)}</p>
              </button>
              <button onClick={this.buyDomeGroup}>
                <img src={domeGroupImg} />
                <p>Dome Group <br />${300 + this.state.numberOfDomeGroup * (300 / 10)}</p>
              </button>
              <button onClick={this.buyLargeDome}>
                <img src={largeDomeImg} />
                <p>Large Dome<br /> ${500 + this.state.numberOfLargeDome * (500 / 10)}</p>
              </button>
              <button onClick={this.buyUndergroundCity}>
                <img src={undergroundCityImg} />
                <p>Underground City<br /> $
                {1000 + this.state.numberOfUndergroundCity * (1000 / 10)}</p>
              </button>
              <button onClick={this.buyUndergroundNetwork}>
                <img src={undergroundNetworkImg} />
                <p>Underground Network <br />$
                {3000 + this.state.numberOfUndergroundNetwork * (3000 / 10)}</p>
              </button>
              <button onClick={this.buyColonialCapital}>
                <img src={colonialCapitalImg} />
                <p>Colonial Capital<br /> $
                {10000 + this.state.numberOfColonialCapital * (10000 / 10)}</p>
              </button>
              <button onClick={this.buyOrbitalStructure}>
                <img src={orbitalStructureImg} />
                <p>Orbital Structure <br />$
                {100000 + this.state.numberOfOrbitalStructure * (100000 / 10)}</p>
              </button>
            </div>
            <div className="habitatBuildingsStats">
              <p>Small Domes 🏠: {this.state.numberOfSmallDome}</p>
              <p>Dome Groups 🏡: {this.state.numberOfDomeGroup}</p>
              <p>Large Domes 🏘: {this.state.numberOfLargeDome}</p>
              <p>
                Underground Cities 🏞 :{" "}
                {this.state.numberOfUndergroundCity}
              </p>
              <p>
                Underground Networks 🚇:{" "}
                {this.state.numberOfUndergroundNetwork}
              </p>
              <p>
                Colonial Capitals 🌆: {this.state.numberOfColonialCapital}
              </p>
              <p>
                Orbital Structures 🌌:{" "}
                {this.state.numberOfOrbitalStructure}
              </p>
            </div>
          </div>

          <div className="militaryDiv">
            <div className="militaryUnitsTabs">
              <button className="militaryTabs" onClick={this.buyMilitia}>
                <img src={militiaImg} />
                <p>
                  Settlement Militia<br /> ${100 + this.state.numberOfMilitia * (100/10)}
                </p>
              </button>
              <button className="militaryTabs" onClick={this.buyCorpSecForce}>
                <img src={corpsecImg} />
                <p>
                  Corporation Security Force <br />$
                  {300 + this.state.numberOfCorpSecForce * (300/10)}
                </p>
              </button>
              <button className="militaryTabs" onClick={this.buyColonialForce}>
                <img src={colonialForceImg} />
                <p>
                  Colonial Planetary Force <br />$
                  {1000 + this.state.numberOfColonialForce * (1000/10)}
                </p>
              </button>
              <button className="militaryTabs" onClick={this.buyFedPlanetForce}>
                <img src={fedPlanetFleetImg} />
                <p>
                  Federation Planetary Fleet<br /> $
                  {5000 + this.state.numberOfFedPlanetFleet * (5000/10)}
                </p>
              </button>
              <button
                className="militaryTabs"
                onClick={this.buyFedOrbitalFleet}
              >
                <img src={fedOritalFleetImg} />
                <p>
                  Federation Orbital Fleet <br />$
                  {20000 + this.state.numberOfFedOrbitFleet * (20000/10)}
                </p>
              </button>
              <button className="militaryTabs" onClick={this.buyFedInterFleet}>
                <img src={fedInterFleetImg} />
                <p>
                  Federation Intergalactic Fleet<br /> $
                  {100000 + this.state.numberOfFedInterFleet * (100000/10)}
                </p>
              </button>
              <button className="militaryTabs" onClick={this.buyHMSJRJ}>
                <img src={HMSJRJImg} />
                <p>HMS Emperor JRJ <br />${1000000 + this.state.numberOfHMSJRJ * (1000000/10)}</p>
              </button>
            </div>

            <div className="militaryUnitsStats">
              <p>
                Settlement Militia Recruited 🚓: {this.state.numberOfMilitia}
              </p>
              <p>
                Corporate Security Force 🚔:{" "}
                {this.state.numberOfCorpSecForce}
              </p>
              <p>
                Colonial Planetary Fleet 🛩:{" "}
                {this.state.numberOfColonialForce}
              </p>
              <p>
                Federation Planetary Fleet ✈️:{" "}
                {this.state.numberOfFedPlanetFleet}
              </p>
              <p>
                Federation Orbital Fleet 🚀:{" "}
                {this.state.numberOfFedOrbitFleet}
              </p>
              <p>
                Federation Intergalactic Fleet 🌠:{" "}
                {this.state.numberOfFedInterFleet}
              </p>
              <p>HMS Emperor JRJ 🛸: {this.state.numberOfHMSJRJ}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Clicker;
