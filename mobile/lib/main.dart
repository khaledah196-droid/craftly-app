import 'package:flutter/material.dart';

void main() {
  runApp(const CraftlyApp());
}

class CraftlyApp extends StatelessWidget {
  const CraftlyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Craftly',
      theme: ThemeData(
        primaryColor: const Color(0xFF4F46E5),
        secondaryHeaderColor: const Color(0xFF22C55E),
        useMaterial3: true,
      ),
      home: const HomePage(),
    );
  }
}

class HomePage extends StatelessWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Craftly'),
      ),
      body: const Center(
        child: Text('Welcome to Craftly'),
      ),
    );
  }
}