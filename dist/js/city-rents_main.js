let subhead=document.getElementsByClassName("chart-subhead"),headline=document.getElementById("chart-head");if(!headline)for(var i=0;i<subhead.length;i++)subhead[i].style.fontWeight="600";Highcharts.setOptions({lang:{thousandsSep:","}});let chartId=document.getElementById("chart-container");function drawHighcharts(){Highcharts.chart(chartId,{chart:{type:"scatter",styledMode:!0,spacingBottom:25,spacingRight:100,spacingLeft:0},title:{text:null},data:{googleSpreadsheetKey:"1emTlFRn0LG5YQWculO-zMoUUeVK5fCsCUBJzKaB_7o0",googleSpreadsheetWorksheet:2,seriesMapping:[{x:0,y:1,name:2,color:3}]},plotOptions:{series:{states:{hover:{enabled:!1}}}},legend:{enabled:!1},xAxis:{title:{text:"AVERAGE MONTHLY RENT"},labels:{useHTML:!0,style:{whiteSpace:"nowrap"},formatter:function(){return Highcharts.numberFormat(this.value,0,".",",")}},min:0,max:5e3,tickLength:0,tickPosition:"inside"},yAxis:{title:{text:"MEDIAN HOSUEHOLD INCOME FOR RENTERS"},labels:{useHTML:!0,overflow:"allow"},min:0,max:1e5},credits:{enabled:!1},tooltip:{shadow:!1,padding:10,formatter:function(){return point=this.point,html=point.name,html}},annotations:[{shapes:[{type:"path",points:[{x:0,y:0,xAxis:0,yAxis:0},{x:5e3,y:2e5,xAxis:0,yAxis:0}]}],labels:[{point:{x:5e3,y:58e3,yAxis:0,xAxis:0},text:"Manhattan, N.Y."},{point:{x:800,y:52e3,yAxis:0,xAxis:0},text:"Virginia Beach, Va."},{point:{x:4e3,y:92e3,yAxis:0,xAxis:0},text:"San Francisco"},{point:{x:4e3,y:38e3,yAxis:0,xAxis:0},text:"Boston"}]}],responsive:{rules:[{condition:{maxWidth:500},chartOptions:{chart:{spacingRight:10},legend:{align:"left",x:-18},xAxis:{max:6e3}}}]}})}setTimeout(function(){if(""===chartId.innerHTML){let t=document.getElementsByClassName("chart-area");for(var e=0;e<t.length;e++)t[e].style.display="none";document.getElementById("chart-fallback").innerHTML+='<img src="https://fm-static.cnbc.com/awsmedia/chart/2019/10/08/chart-error_wide.1570569331252.png" style="width: 100%;max-width:660px">'}},500),"complete"===document.readyState||"interactive"===document.readyState?drawHighcharts():document.addEventListener("DOMContentLoaded",drawHighcharts);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsic3ViaGVhZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImhlYWRsaW5lIiwiZ2V0RWxlbWVudEJ5SWQiLCJpIiwibGVuZ3RoIiwic3R5bGUiLCJmb250V2VpZ2h0IiwiSGlnaGNoYXJ0cyIsInNldE9wdGlvbnMiLCJsYW5nIiwidGhvdXNhbmRzU2VwIiwiY2hhcnRJZCIsImRyYXdIaWdoY2hhcnRzIiwiY2hhcnQiLCJ0eXBlIiwic3R5bGVkTW9kZSIsInNwYWNpbmdCb3R0b20iLCJzcGFjaW5nUmlnaHQiLCJzcGFjaW5nTGVmdCIsInRpdGxlIiwidGV4dCIsImRhdGEiLCJnb29nbGVTcHJlYWRzaGVldEtleSIsImdvb2dsZVNwcmVhZHNoZWV0V29ya3NoZWV0Iiwic2VyaWVzTWFwcGluZyIsIngiLCJ5IiwibmFtZSIsImNvbG9yIiwicGxvdE9wdGlvbnMiLCJzZXJpZXMiLCJzdGF0ZXMiLCJob3ZlciIsImVuYWJsZWQiLCJsZWdlbmQiLCJ4QXhpcyIsImxhYmVscyIsInVzZUhUTUwiLCJ3aGl0ZVNwYWNlIiwiZm9ybWF0dGVyIiwibnVtYmVyRm9ybWF0IiwidGhpcyIsInZhbHVlIiwibWluIiwibWF4IiwidGlja0xlbmd0aCIsInRpY2tQb3NpdGlvbiIsInlBeGlzIiwib3ZlcmZsb3ciLCJjcmVkaXRzIiwidG9vbHRpcCIsInNoYWRvdyIsInBhZGRpbmciLCJwb2ludCIsImh0bWwiLCJhbm5vdGF0aW9ucyIsInNoYXBlcyIsInBvaW50cyIsInJlc3BvbnNpdmUiLCJydWxlcyIsImNvbmRpdGlvbiIsIm1heFdpZHRoIiwiY2hhcnRPcHRpb25zIiwiYWxpZ24iLCJzZXRUaW1lb3V0IiwiaW5uZXJIVE1MIiwiY2hhcnRBcmVhIiwiZGlzcGxheSIsInJlYWR5U3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiQUFRQSxJQUFBQSxRQUFBQyxTQUFBQyx1QkFBQSxpQkFDQUMsU0FBQUYsU0FBQUcsZUFBQSxjQUNBLElBQUFELFNBQ0EsSUFBQSxJQUFBRSxFQUFBLEVBQUFBLEVBQUFMLFFBQUFNLE9BQUFELElBQ0FMLFFBQUFLLEdBQUFFLE1BQUFDLFdBQUEsTUFJQUMsV0FBQUMsV0FBQSxDQUNBQyxLQUFBLENBQ0FDLGFBQUEsT0FJQSxJQUFBQyxRQUFBWixTQUFBRyxlQUFBLG1CQWlCQSxTQUFBVSxpQkFDQUwsV0FBQU0sTUFBQUYsUUFBQSxDQUNBRSxNQUFBLENBQ0FDLEtBQUEsVUFDQUMsWUFBQSxFQUNBQyxjQUFBLEdBQ0FDLGFBQUEsSUFDQUMsWUFBQSxHQUVBQyxNQUFBLENBQ0FDLEtBQUEsTUFFQUMsS0FBQSxDQUNBQyxxQkFBQSwrQ0FDQUMsMkJBQUEsRUFDQUMsY0FBQSxDQUFBLENBQUFDLEVBQUEsRUFBQUMsRUFBQSxFQUFBQyxLQUFBLEVBQUFDLE1BQUEsS0FHQUMsWUFBQSxDQUNBQyxPQUFBLENBQ0FDLE9BQUEsQ0FDQUMsTUFBQSxDQUNBQyxTQUFBLE1Bc0JBQyxPQUFBLENBQ0FELFNBQUEsR0FFQUUsTUFBQSxDQUNBaEIsTUFBQSxDQUNBQyxLQUFBLHdCQUVBZ0IsT0FBQSxDQUNBQyxTQUFBLEVBQ0FoQyxNQUFBLENBQ0FpQyxXQUFBLFVBRUFDLFVBQUEsV0FDQSxPQUFBaEMsV0FBQWlDLGFBQUFDLEtBQUFDLE1BQUEsRUFBQSxJQUFBLE9BR0FDLElBQUEsRUFDQUMsSUFBQSxJQUNBQyxXQUFBLEVBQ0FDLGFBQUEsVUFFQUMsTUFBQSxDQUNBNUIsTUFBQSxDQUNBQyxLQUFBLHVDQUVBZ0IsT0FBQSxDQUNBQyxTQUFBLEVBQ0FXLFNBQUEsU0FFQUwsSUFBQSxFQUNBQyxJQUFBLEtBRUFLLFFBQUEsQ0FDQWhCLFNBQUEsR0FFQWlCLFFBQUEsQ0FFQUMsUUFBQSxFQUNBQyxRQUFBLEdBQ0FiLFVBQUEsV0FHQSxPQUZBYyxNQUFBWixLQUFBWSxNQUNBQyxLQUFBRCxNQUFBMUIsS0FDQTJCLE9BR0FDLFlBQUEsQ0FBQSxDQUNBQyxPQUFBLENBQUEsQ0FDQTFDLEtBQUEsT0FDQTJDLE9BQUEsQ0FBQSxDQUNBaEMsRUFBQSxFQUNBQyxFQUFBLEVBQ0FTLE1BQUEsRUFDQVksTUFBQSxHQUNBLENBQ0F0QixFQUFBLElBQ0FDLEVBQUEsSUFDQVMsTUFBQSxFQUNBWSxNQUFBLE1BR0FYLE9BQUEsQ0FBQSxDQUNBaUIsTUFBQSxDQUNBNUIsRUFBQSxJQUNBQyxFQUFBLEtBQ0FxQixNQUFBLEVBQ0FaLE1BQUEsR0FHQWYsS0FBQSxtQkFDQSxDQUNBaUMsTUFBQSxDQUNBNUIsRUFBQSxJQUNBQyxFQUFBLEtBQ0FxQixNQUFBLEVBQ0FaLE1BQUEsR0FHQWYsS0FBQSx1QkFDQSxDQUNBaUMsTUFBQSxDQUNBNUIsRUFBQSxJQUNBQyxFQUFBLEtBQ0FxQixNQUFBLEVBQ0FaLE1BQUEsR0FFQWYsS0FBQSxpQkFDQSxDQUNBaUMsTUFBQSxDQUNBNUIsRUFBQSxJQUNBQyxFQUFBLEtBQ0FxQixNQUFBLEVBQ0FaLE1BQUEsR0FHQWYsS0FBQSxhQUdBc0MsV0FBQSxDQUNBQyxNQUFBLENBQUEsQ0FDQUMsVUFBQSxDQUNBQyxTQUFBLEtBRUFDLGFBQUEsQ0FDQWpELE1BQUEsQ0FDQUksYUFBQSxJQUVBaUIsT0FBQSxDQUNBNkIsTUFBQSxPQUNBdEMsR0FBQSxJQUVBVSxNQUFBLENBQ0FTLElBQUEsV0F6S0FvQixXQUFBLFdBQ0EsR0FBQSxLQUFBckQsUUFBQXNELFVBQUEsQ0FFQSxJQUFBQyxFQUFBbkUsU0FBQUMsdUJBQUEsY0FDQSxJQUFBLElBQUFHLEVBQUEsRUFBQUEsRUFBQStELEVBQUE5RCxPQUFBRCxJQUNBK0QsRUFBQS9ELEdBQUFFLE1BQUE4RCxRQUFBLE9BR0FwRSxTQUFBRyxlQUFBLGtCQUFBK0QsV0FBQSw0SUFJQSxLQXFLQSxhQUFBbEUsU0FBQXFFLFlBQUEsZ0JBQUFyRSxTQUFBcUUsV0FDQXhELGlCQUVBYixTQUFBc0UsaUJBQUEsbUJBQUF6RCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYWRkcyBzb2NpYWwgY2xhc3MgdG8gZ2V0IHNvY2lhbCBjaGFydFxuLy8gbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2hhcnQtYXJlYVwiKTtcbi8vIGZvcih2YXIgaSA9IDA7IGkgPCBlbGVtZW50Lmxlbmd0aDsgaSsrKVxuLy8ge1xuLy8gICAgIGVsZW1lbnRbaV0uY2xhc3NOYW1lICs9IFwiIHNvY2lhbFwiO1xuLy8gfVxuXG4vLyBib2xkcyB0aGUgc3ViaGVhZCBpZiB0aGVyZSBpcyBubyBoZWFkbGluZVxubGV0IHN1YmhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2hhcnQtc3ViaGVhZFwiKSxcbiAgICBoZWFkbGluZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhcnQtaGVhZFwiKTtcbiAgICBpZiAoIWhlYWRsaW5lKSB7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBzdWJoZWFkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzdWJoZWFkW2ldLnN0eWxlLmZvbnRXZWlnaHQgPSBcIjYwMFwiO1xuICAgICAgICB9ICAgICAgIFxuICAgICB9XG5cbkhpZ2hjaGFydHMuc2V0T3B0aW9ucyh7XG4gICAgbGFuZzoge1xuICAgICAgICB0aG91c2FuZHNTZXA6ICcsJyxcbiAgICB9XG59KTtcblxubGV0IGNoYXJ0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXJ0LWNvbnRhaW5lclwiKTtcblxuLy8gY2hlY2tzIGZvciB0aGUgY2hhcnQgSUQgYW5kIGRpc3BsYXlzIGEgYmFja3VwIGltYWdlIGlmIHRoZSBicm93c2VyIGNhbid0IGZpbmQgaXRcbnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgaWYoY2hhcnRJZC5pbm5lckhUTUwgPT09IFwiXCIpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ25vSWQnKTtcbiAgICAgICAgbGV0IGNoYXJ0QXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjaGFydC1hcmVhXCIpO1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgY2hhcnRBcmVhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjaGFydEFyZWFbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9IFxuICAgICAgICAvLyBpbnNlcnQgY2hhcnQgc2NyZWVuc2hvdCBoZXJlXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhcnQtZmFsbGJhY2tcIikuaW5uZXJIVE1MICs9ICc8aW1nIHNyYz1cImh0dHBzOi8vZm0tc3RhdGljLmNuYmMuY29tL2F3c21lZGlhL2NoYXJ0LzIwMTkvMTAvMDgvY2hhcnQtZXJyb3Jfd2lkZS4xNTcwNTY5MzMxMjUyLnBuZ1wiIHN0eWxlPVwid2lkdGg6IDEwMCU7bWF4LXdpZHRoOjY2MHB4XCI+JztcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygneWVzSWQnKVxuICAgIH1cbn0sNTAwKTtcblxuZnVuY3Rpb24gZHJhd0hpZ2hjaGFydHMoKSB7XG4gICAgSGlnaGNoYXJ0cy5jaGFydChjaGFydElkLCB7XG4gICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICB0eXBlOiAnc2NhdHRlcicsXG4gICAgICAgICAgICBzdHlsZWRNb2RlOiB0cnVlLFxuICAgICAgICAgICAgc3BhY2luZ0JvdHRvbTogMjUsXG4gICAgICAgICAgICBzcGFjaW5nUmlnaHQ6IDEwMCxcbiAgICAgICAgICAgIHNwYWNpbmdMZWZ0OiAwXG4gICAgICAgIH0sIFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdGV4dDogbnVsbFxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBnb29nbGVTcHJlYWRzaGVldEtleTogJzFlbVRsRlJuMExHNVlRV2N1bE8tek1vVVVlVks1ZkNzQ1VCSnpLYUJfN28wJyxcbiAgICAgICAgICAgIGdvb2dsZVNwcmVhZHNoZWV0V29ya3NoZWV0OiAyLFxuICAgICAgICAgICAgc2VyaWVzTWFwcGluZzogW3t4OiAwLCB5OiAxLCBuYW1lOiAyLCBjb2xvcjogM31dLFxuICAgICAgICB9LFxuICAgICAgICAvLyBmb3IgYmFyIGNoYXJ0cyBvbmx5XG4gICAgICAgIHBsb3RPcHRpb25zOiB7XG4gICAgICAgICAgICBzZXJpZXM6IHtcbiAgICAgICAgICAgICAgICBzdGF0ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBcbiAgICAgICAgfSxcbiAgICAgICAgLy8gZm9yIGxpbmUgY2hhcnRzIG9ubHlcbiAgICAgICAgLy8gcGxvdE9wdGlvbnM6IHtcbiAgICAgICAgLy8gICAgIHNlcmllczoge1xuICAgICAgICAvLyAgICAgICAgIGxpbmVXaWR0aDogMSxcbiAgICAgICAgLy8gICAgICAgICAvLyBjbGlwOiBmYWxzZSxcbiAgICAgICAgLy8gICAgICAgICBtYXJrZXI6IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgIC8vICAgICAgICAgICAgIHN5bWJvbDogJ2NpcmNsZScsXG4gICAgICAgIC8vICAgICAgICAgICAgIGZpbGxDb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICAvLyAgICAgICAgICAgICBzdGF0ZXM6IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGhvdmVyOiB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgZmlsbENvbG9yOiAnI2ZmZmZmZidcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSxcbiAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB4QXhpczoge1xuICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICB0ZXh0OiAnQVZFUkFHRSBNT05USExZIFJFTlQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgIHVzZUhUTUw6IHRydWUsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gSGlnaGNoYXJ0cy5udW1iZXJGb3JtYXQodGhpcy52YWx1ZSwwLCcuJywnLCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDUwMDAsXG4gICAgICAgICAgICB0aWNrTGVuZ3RoOiAwLFxuICAgICAgICAgICAgdGlja1Bvc2l0aW9uOiAnaW5zaWRlJ1xuICAgICAgICB9LFxuICAgICAgICB5QXhpczoge1xuICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICB0ZXh0OiAnTUVESUFOIEhPU1VFSE9MRCBJTkNPTUUgRk9SIFJFTlRFUlMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgICAgIHVzZUhUTUw6IHRydWUsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdhbGxvdydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDEwMDAwMFxuICAgICAgICB9LFxuICAgICAgICBjcmVkaXRzOiB7XG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAvLyB1c2VIVE1MOiB0cnVlLFxuICAgICAgICAgICAgc2hhZG93OiBmYWxzZSxcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwLFxuICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBwb2ludCA9IHRoaXMucG9pbnQ7XG4gICAgICAgICAgICAgICAgaHRtbD0gIHBvaW50Lm5hbWVcbiAgICAgICAgICAgICAgICByZXR1cm4gaHRtbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYW5ub3RhdGlvbnM6IFt7XG4gICAgICAgICAgICBzaGFwZXM6IFt7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3BhdGgnLFxuICAgICAgICAgICAgICAgIHBvaW50czogW3tcbiAgICAgICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgICAgICAgeEF4aXM6IDAsXG4gICAgICAgICAgICAgICAgICAgIHlBeGlzOiAwXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICB4OiA1MDAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAyMDAwMDAsXG4gICAgICAgICAgICAgICAgICAgIHhBeGlzOiAwLFxuICAgICAgICAgICAgICAgICAgICB5QXhpczogMFxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIGxhYmVsczogW3tcbiAgICAgICAgICAgICAgICBwb2ludDoge1xuICAgICAgICAgICAgICAgICAgICB4OiA1MDAwLFxuICAgICAgICAgICAgICAgICAgICB5OiA1ODAwMCxcbiAgICAgICAgICAgICAgICAgICAgeUF4aXM6IDAsXG4gICAgICAgICAgICAgICAgICAgIHhBeGlzOiAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvLyB1c2VIVE1MOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdNYW5oYXR0YW4sIE4uWS4nXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgcG9pbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgeDogODAwLFxuICAgICAgICAgICAgICAgICAgICB5OiA1MjAwMCxcbiAgICAgICAgICAgICAgICAgICAgeUF4aXM6IDAsXG4gICAgICAgICAgICAgICAgICAgIHhBeGlzOiAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvLyB1c2VIVE1MOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdWaXJnaW5pYSBCZWFjaCwgVmEuJ1xuICAgICAgICAgICAgfSx7XG4gICAgICAgICAgICAgICAgcG9pbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgeDogNDAwMCxcbiAgICAgICAgICAgICAgICAgICAgeTogOTIwMDAsXG4gICAgICAgICAgICAgICAgICAgIHlBeGlzOiAwLFxuICAgICAgICAgICAgICAgICAgICB4QXhpczogMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGV4dDogJ1NhbiBGcmFuY2lzY28nXG4gICAgICAgICAgICB9LHtcbiAgICAgICAgICAgICAgICBwb2ludDoge1xuICAgICAgICAgICAgICAgICAgICB4OiA0MDAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAzODAwMCxcbiAgICAgICAgICAgICAgICAgICAgeUF4aXM6IDAsXG4gICAgICAgICAgICAgICAgICAgIHhBeGlzOiAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvLyBcbiAgICAgICAgICAgICAgICB0ZXh0OiAnQm9zdG9uJ1xuICAgICAgICAgICAgfV0sXG4gICAgICAgIH1dLFxuICAgICAgICByZXNwb25zaXZlOiB7XG4gICAgICAgICAgICBydWxlczogW3tcbiAgICAgICAgICAgIGNvbmRpdGlvbjoge1xuICAgICAgICAgICAgICAgIG1heFdpZHRoOiA1MDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGFydE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgIHNwYWNpbmdSaWdodDogMTBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICBhbGlnbjogJ2xlZnQnLFxuICAgICAgICAgICAgICAgICAgICB4OiAtMThcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHhBeGlzOiB7XG4gICAgICAgICAgICAgICAgICAgIG1heDogNjAwMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2ludGVyYWN0aXZlJykge1xuICAgIGRyYXdIaWdoY2hhcnRzKCk7XG59IGVsc2Uge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGRyYXdIaWdoY2hhcnRzKTtcbn0iXX0=
