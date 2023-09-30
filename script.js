var shoplist={};
shoplist.name="My Buylist 購物清單";
shoplist.time="2021/7/28";
shoplist.list=[
  
];

var item_html="<li id={{id}} class='buy_item'>{{num}}.{{item}}<div class='price'>{{price}}</div><div id={{del_id}} data_del_id='{{delid}}' class='del_btn'>X</div></li>";

var total_html="<li class='buy_item total'>總價:<div class='price'>{{price}}</div></li>";

function showlist(){
  $("#items_list").html("")
  var total_price=0;
  for(var i=0; i<shoplist.list.length; i++){
    var item = shoplist.list[i];
    total_price = total_price + parseInt(item.price);
    var current_item_html=
      item_html.replace("{{num}}",i+1)
               .replace("{{item}}",item.name)
               .replace("{{id}}","buyitem_"+i)
               .replace("{{del_id}}","del_item_"+i)
               .replace("{{price}}",item.price)
               .replace("{{delid}}",i)
    ;
    $("#items_list").append(current_item_html);
    
    $("#del_item_"+i).click(
      function(){
        removelist($(this).attr("data_del_id"));
      }
    );
  };
  var current_total_price=
      total_html.replace("{{price}}",total_price);
    $("#items_list").append(current_total_price);
}

showlist();

$(".addbtn").click(
  function(){
    shoplist.list.push(
      {
        name:$("#input_name").val(),
        price:$("#input_price").val(),
      }
    );
    $("#input_name").val("");
    $("#input_price").val("");
    showlist();
  }
);

function removelist(id){
  shoplist.list.splice(id,1);
  showlist();
}
