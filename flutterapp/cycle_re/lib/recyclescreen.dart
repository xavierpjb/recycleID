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
        title: Text('Result'),
        backgroundColor: Colors.blueGrey,
      ),
      body: Container(
        child: Text(widget.bin)
      )
    );
  }

}