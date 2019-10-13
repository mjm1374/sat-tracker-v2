class Satelite {
    constructor(id, satname, intlDesignator, launchDate, satlat, satlng, satInfo) {
        this.satid = id;
        this.satname = satname;
        this.intlDesignator = intDesignator;
        this.launchDate = launchDate;
        this.satlat = satlat;
        this.satlng = satlng;
        this.satalt = satalt;
        this.satinfo = setInfo(satinfo);
        this.SatDesignation = () => {
            return this.satname + " (" + this.id + ")";
        };
    }

    changeName(name) {
        this.satname = name;
    }

    setLocation(satlat, satlng, satalt){
        this.satlat = lat;
        this.satlng = lng;
        this.satalt = alt;
    }

    getLocation(){
        return {
            lat: this.satlat,
            lng: this.satlng,
            alt: this.satalt
        };
    }

    setInfo(info){
        this.satinfo = info;
    }
}