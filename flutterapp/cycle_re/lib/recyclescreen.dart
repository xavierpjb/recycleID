import 'package:flutter/material.dart';


class RecycleScreen extends StatefulWidget {
    final String bin;

    RecycleScreen({this.bin});

    @override
    _RecycleScreen createState()=> _RecycleScreen();
}

class _RecycleScreen extends State<RecycleScreen>{
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: Text('Result'),
        backgroundColor: detCol(),
      ),
      body: Container(
        child: Text(prompt())
      )
    );
  }

  //Determing the color based on the item result
  Color detCol(){
    Color color;

    switch(widget.bin){
      case "trash":
        color = Colors.black;
        break;
      case "plastic":
      case "metal":
      case "glass":
        color = Colors.lightGreen;
        break;
      case "paper":
      case "carboard":
        color = Colors.lightBlue;
        break;
    }
    return color;
  }

  String prompt(){
    String prompt;
    switch(widget.bin){
      case "trash":
        prompt = "Throw into Trash bin";
        break;
      case "plastic":
      case "metal":
      case "glass":
        prompt = "Throw into plastic/metal/glass bin";
        break;
      case "paper":
      case "carboard":
        prompt = "Throw into paper/cardboard bin";
        break;
    }
    return prompt;
  }


}