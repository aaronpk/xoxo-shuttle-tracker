<?php
include('lib/inc.php');

header('Content-type: application/json');

$shuttles = ['rose','grey'];

// Only one shuttle Friday morning 8am-4pm
if(time() >= strtotime('2018-09-07T08:00:00-0700') && time() <= strtotime('2018-09-07T16:00:00-0700'))
  $shuttles = ['grey'];

$positions = [];
$stops = [];

foreach($shuttles as $shuttle) {

  $current = $redis->get('xoxo-tracker-location-'.$shuttle);

  $history = array();

  $loc = $redis->lrange('xoxo-history-'.$shuttle, 0, 1000);
  $coordinates = [];
  foreach($loc as $l) {
    $p = json_decode($l, true);
    if(isset($p['properties']['horizontal_accuracy']) && $p['properties']['horizontal_accuracy'] <= 100)
      $coordinates[] = $p['geometry']['coordinates'];
  }


  // Trim the line based on the line's distance
  $maxDistance = 1200;

  $newCoordinates = array();
  $distance = 0;
  $lineDistance = 0;
  $last = false;
  foreach($coordinates as $c) {
    if($last) {
      $d = geo\gcDistance($last[1],$last[0],$c[1],$c[0]);
      $distance += $d;
    }
    if($distance <= $maxDistance) {
      $newCoordinates[] = $c;
      if($last)
        $lineDistance += $d;
    }
    $last = $c;
  }

  if(count($newCoordinates)) {
    // Simplify the line
    $newCoordinates = geo\ramerDouglasPeucker($newCoordinates, 0.0001);
  }

  $history = array_map(function($item){
    return array($item[1],$item[0]);
  }, $newCoordinates);
  $history = array_reverse($history);

  $positions[] = [
    'current' => json_decode($current),
    'history' => $history
  ];

  if($redis->get('xoxo-shuttle-current::'.$shuttle)) {
    $stops[] = json_decode($redis->get('xoxo-shuttle-current::'.$shuttle));
  }
}


echo json_encode([
  'shuttles' => $positions,
  'stops' => $stops
]);
