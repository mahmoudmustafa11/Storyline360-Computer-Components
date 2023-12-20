function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5iCmtHBgMpl":
        Script1();
        break;
  }
}

function Script1()
{
  var currentDate = new Date().toLocaleDateString();
var player = GetPlayer();
player.SetVar("CurrentDate", currentDate);

}

