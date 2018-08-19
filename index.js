function produceDrivingRange(tripRange){
  return function withinRange(tripDistance){
    if(tripDistance > tripRange){
      return false;
    }else{
      return true;
    }
  }
}