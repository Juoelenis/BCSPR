
if (typeof archive_analytics !== 'undefined') {
  archive_analytics.send_pageview_on_load(archive_analytics);
  archive_analytics.process_url_events(location);
  var vs = archive_analytics.get_data_packets();
  for (var i in vs) {
    if (!vs[i]) {
      vs[i] = {};
    }
    vs[i]['cache_bust']=Math.random();
    vs[i]['server_ms']=185;
    vs[i]['server_name']="www20.us.archive.org";
      }

  if (document.querySelectorAll('.more_search').length) {
    archive_analytics.send_scroll_fetch_base_event();
  }
}
