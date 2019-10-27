class ImgClass {
  String annotationSpecId;
  String displayName;
  Classification classification;
  String detail;

  ImgClass(
      {this.annotationSpecId,
      this.displayName,
      this.classification,
      this.detail});

  ImgClass.fromJson(Map<String, dynamic> json) {
    annotationSpecId = json['annotationSpecId'];
    displayName = json['displayName'];
    classification = json['classification'] != null
        ? new Classification.fromJson(json['classification'])
        : null;
    detail = json['detail'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['annotationSpecId'] = this.annotationSpecId;
    data['displayName'] = this.displayName;
    if (this.classification != null) {
      data['classification'] = this.classification.toJson();
    }
    data['detail'] = this.detail;
    return data;
  }
}

class Classification {
  double score;

  Classification({this.score});

  Classification.fromJson(Map<String, dynamic> json) {
    score = json['score'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['score'] = this.score;
    return data;
  }
}