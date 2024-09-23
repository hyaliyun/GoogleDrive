# Googleapis Client

Library ini di buat agar mempermudah kalian menggunakan googleapis karena library official sulit terutama bagi orang baru / awam / pemula.

---
### Membuat Secret Api Key

1. Service Account
   - Buka browser kamu [console.cloud.google.com](https://console.cloud.google.com)
   - Bikin Project / Pilih Project
   - Buka Tab Api & services
   - Tap Create Credentials
   - Pilih Service Account
  
instruksi Full Silahkan liat video di bawah ini

[create_service_account_googleapis.webm](https://github.com/azkadev/googleapis_client/assets/82513502/bd8b5fca-3329-4f71-ab66-8705727a149e)


---

### Install library

```bash
dart pub add googleapis_client
```

### Add Library

```dart
import 'package:googleapis_client/googleapis_client.dart';
```

### Documentation

Jika kamu tidak memiliki banyak kuota internet kamu bisa melihat dokumentasi menggunakan cara ini

```bash
git clone https://github.com/azkadev/googleapis_client.git
cd googleapis_client
cd web
flutter clean
flutter pub get
flutter run
```

### Quickstart

```dart
import 'dart:convert';
import 'package:googleapis_client/googleapis_client.dart';

void prettyPrint(dynamic data) {
  if (data is Map || data is List) {
    print(JsonEncoder.withIndent(" " * 2).convert(data));
  } else {
    print(data.toString());
  }
}

void main(List<String> args) async { 
  GoogleApisClient googleApisClient = GoogleApisClient(
    googleApisClientApiKey: GoogleApisClientApiKey(
      {
        "type": "service_account",
        "project_id": "nod",
        "private_key_id": "",
        "private_key": "-----BEGIN -----END PRIVATE KEY-----\n",
        "client_email": "mkkm",
        "client_id": "1580",
        "auth_uri": "https://o/oauth2/auth",
        "token_uri": "https:/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "",
        "universe_domain": "",
      },
    ),
  );

  await googleApisClient.youtube.subscribeChannel(channel: "@azkadev");
  await googleApisClient.youtube.addComment(videoId: "HV4kn5j7IwQ", text: "Hai ini pesan automatis");

  // with dart class scheme
  await googleApisClient.request(
    requestData: YoutubeGetChannel.create(
      special_type: "youtubeGetChannel",
      channel_id: "@azkadev",
    ),
  );
  // with dart class scheme
  await googleApisClient.request(
    requestData: JsonApis({
      "@type": "youtubeSubscribeChannel",
      "@client_channel": "",
      "channel_id": "@azkadev",
    }),
  );

  await googleApisClient.request(
    requestData: JsonApis({
      "@type": "gmailSendMessage",
      "email_id": "email@gmail.com",
      "text": "",
    }),
  );
}
```

### Example client use this library


