<?php

//$arr = ['0' => 'hello'];
////$arr = [1 => 'hello', 2 => 'world'];
//
//echo json_encode($arr);
//
//$string = '{"0":"934e290162b33b98c0b87642a53fe691f119e26a88c5a357e8f5a2942b457a8d","1":"a3018588d74716f9c7e10b561a0033352c5ea4a5b7e6aee0115ebb8656af9b69","2":"459682bbd98289a3748d8b584eba0a2baec789f9f5af88d513e1b1e040cb2e35","3":"6929833af607fd2a97eec4065299bb04212ec50587713014009758ef2ff27667","4":"e55b626a661ba3737199a1fa93b3872b97bfa986ae1288321545ebea42bedea7","5":"f1a7f0a93f3b4458f2d6fbbd7d69c0bab2e426feb0d3385aaed447bca2c49448","6":"a7bd1b5a2a3924a7cd08e4d299bbe10912cd0404892eba1116f28e829bc36273","7":"5c4a3794d1739a4404cb544a718907a82e8d3c63609d5d666b1f774832f02b27","8":"ec9e0ea5c0eabc27c06ee60653159e6fa1c27d5bd1cfabde7c1e935acf0cac39","9":"05a1c9f75553f7f9dcb2fac1c17b6bfef9498747569b07a82eaf5db891ac6fae","10":"865b0eccf3af6c907022bb892e31b26ca9e9d50cb638228d5589193018a8c5bb","12":"eda97cc62e68963ae0e14945ae4dc4ca21872bf3a2eb2203ddd1cf3cebd2b72c","13":"126f2bc9585e682b7091fab936a299590e6c1a2f5ca7199c48726626b94a7b45","14":"4e18ebbc323049850f29d3e66842a44d6dc947078b0de55668d1272b5fa065c7","17":"1498d59d9af562f9a830e98fdb9458b1d4b5dff771fcd433ae0b1c3a830db8a9","18":"126e931c1989e4f7ea142c4ece0b194dd05ef80a9d844c997d18a91c0eb8db34","19":"fd909d9be9e85f605263092215aab0de3c912810c6bc68806116aeae6c89dc1a","20":"5949f0df424e909b03bf09d6673cec1fb45ac4da501724859b1c83635e214f4d","21":"1f85ccf9e75243643a9d59413661693df15b11b3ea72f75bc994ff729fd0f47d","22":"2aad9740b028025c8f05462e6c09e9d3a6c641e91911ec5bac448e3e2b03c62c"}';
//var_dump(json_decode($string));
//
//$string2 = '["hello"]';
//var_dump($string2);
//
//exit;
//


$mq_message = array(
    'kind' => 'publish_batch_token',
    'data' => array(
        'appid' => 1111,
        'tokens' => array('sdfsdf', 'sdfasdfasd'),
        'alert' => 'ddddd',
        'badge' => 1,
        'payload' => array('userinfo' => array('mid' => 2, 'kind' => 1, 'data' => 1)),
    ),
);

var_dump(json_encode($mq_message));