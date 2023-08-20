export const PROBLEMS = [
  "２進数の 11、1001 は10進数では {{3}} 、 {{9}} である。",
  "２進数の 110 は８進数では {{6}} である。",
  "８進数では数字のうち０〜 {{7}} を表記に使用する。",
  "16進数では０〜９に加えて英文字の {{A〜F（小文字も可）}} を表記に使用する。",
  "コンピュータで実数を表す場合、通常は {{浮動小数点数}} が用いられる。",
  "8進数の 21 は10進数では {{17}} である。",
  "16進数の A は10進数では {{10}} である。",
  "16進数の 100 は10進数では {{256}} 、８進数では {{400}} である。",
  "nビットで０以上の整数を表現すると、０〜 ${{2^n  ‐  1}}$ が表現できる。",
  "演算結果が一定の桁数に収まらない場合を {{桁あふれ}} という。",
  "英語でDecimal Number, Binary Numberは {{10進数}} 、 {{2進数}} のことである。",
  "英語でHexadecimal Number, Octal numberは {{16進数}} 、 {{8進数}} のことである。",
  "8ビットで０以上の整数を表現すると、最大値は {{255}} である。",
  "8ビットで負の数も含めた整数を表現すると、最小値は {{‐128}} 、最大値は {{127}} 。",
  "整数を表すビット列で、最も上位の桁を {{MSB (most significant bit)}} 、最も下位の桁を {{LSB (least significant bit)}} と呼ぶ。",
  "負の整数の表現には {{２の補数}} 表現が用いられることが多い。",
  "正の整数Nに対し、‐Nを表す {{２の補数}} 表現のビットを構成するには {{全ビットを反転し、１を加算}} する。",
  "nビットで負の数も含めた整数を表現すると、{{‐2^(n‐1)}} 〜 {{2^(n‐1) ‐ 1}} が表現できる。",
  "浮動小数点数は、 {{仮数}} 部の桁数が多ければ正確さ（精度）が高いと言える。",
  "浮動小数点数には、 {{仮数}} 部に加え、 {{指数}} 部、 {{符号}} ビットがある。",
  "決められた桁数に収めるために発生する誤差を {{丸め誤差}} と呼ぶ。",
  "計算の手続きをある時点でやめることによって発生する誤差を {{打ち切り誤差}} と呼ぶ。",
  "情報の最小単位は {{ビット (bit)}} 。",
  "{{ビット (bit)}} を８つ集めたものを {{バイト (byte)}} と呼ぶ。",
  "情報の分野では、1000ではなく、 {{1024}} を「１キロ」と呼ぶ習慣がある。",
  "{{1024}} × {{1024}} は {{メガ (M)}} 、 {{メガ (M)}} × {{1024}} は {{ギガ (G)}} である。",
  "英数文字を7ビットの範囲に対応づける文字コードは {{ASCIIコード}} である。",
  "日本には漢字や仮名文字を2バイトで表わす文字コード規格、 {{JIS（JISコード）}} がある。",
  "近年、世界中の文字をひとつの文字コードで表すための {{Unicode}} が広まっている。",
  "従来、パソコン上で広く用いられてきた日本語の文字コードは {{シフトJIS（Shift-JIS）}} であった。",
  "ファイルには、保存するべき情報が {{バイト}} の列として格納されている。",
  "次の文字の表示位置を、水平方向に移動させる特殊文字は {{タブ(TAB)}} である。",
  "行末を表す特殊文字は {{改行（または復帰改行）}} と呼ばれるが、OSによって文字コードが異なる。",
  "ギガバイトがさらに「１キロ」集まったものを {{テラ (T)}} バイトと呼ぶ。",
  "ギガバイトは２の {{30}} 乗バイトである。",
  "{{テラ (T)}} バイトがさらに「１キロ」集まったものを {{ペタ (P)}} バイトと呼ぶ。",
  "一般に、文字と空白、タブや改行などだけからなるファイルを {{テキストファイル}} と呼ぶ。",
  "{{テキストファイル}} に対し、文字ではないデータを含むファイルを {{バイナリファイル}} と呼ぶ。",
  "データを、ビットの列として（デジタルで）表わすことを {{符号化}} と言う。",
  "{{符号化}} がされたデジタルデータから元の表現を得ることを {{復号（復号化）}} と呼ぶ。",
  "JIS文字コードでは利用頻度の高い漢字を第一 {{水準}} 漢字と呼ぶ。",
  "Unicodeの符号化の中でも、パソコンなどで広く使われているのは {{UTF-8}} である。",
  "”#♭^|÷_” の中で、ASCII文字コードに含まれないものは、 {{”♭” と “÷”}} である。",
  "16種類の異なるものを区別するには {{4}} ビット必要である。",
  "生起確率1/8の事象の情報量は {{3}} ビットである。",
  "MB、GBの代わりに {{MiB（メビバイト）}} 、 {{GiB（ギビバイト）}} を使って2を基数とした量であることを示す。",
  "１バイトでカタカナを表す文字は文字幅が狭く、一般に {{半角カナ（半角カタカナ）}} と呼ばれる。",
  "ASCII文字や {{半角カナ（半角カタカナ）}} に対し、漢字などは文字幅が広いため、 {{全角（全角文字）}} と呼ばれる。",
  "音声などのアナログデータをデジタルデータに変換することを {{A/D}} 変換と呼ぶ。",
  "デジタルデータをアナログデータに変換することを {{D/A}} 変換と呼ぶ。",
  "画像やディスプレイを構成する点を {{ピクセル（画素、またはドット）}} と呼ぶ。",
  "カラー画像データは、 {{ピクセル（画素、またはドット）}} を {{RGB（赤、緑、青）}} の三原色の組み合せで表す。",
  "{{PDF}} は、文書を表現する画像ファイルのデファクトスタンダードである。",
  "最も広く用いられている画像データ形式の {{JPEG (JPG)}} は、損失のある圧縮を行う。",
  "画像データ形式の {{PNG}} は損失のない圧縮を行い、半透明なども表現できる。",
  "連続量を離散的なアナログ量で近似的に表すことを {{量子化}} と言う。",
  "１秒間の振動数（周波数）を表す単位は {{ヘルツ (Hz)}} である。",
  "動画像の国際規格である {{MPEG}} は、DVDやBlu-rayにも利用されている。",
  "データを圧縮し、復元した時に元と同じデータが得られる手法を {{損失のない圧縮（無歪圧縮／可逆圧縮）}} と呼ぶ。",
  "圧縮し、復元した時、元と必ずしも同じではない圧縮手法を {{損失のある圧縮（有歪圧縮／不可逆圧縮）}} と呼ぶ。",
  "画素の集合として表現された画像を {{ラスタ（またはビットマップ）}} 画像と呼ぶ。",
  "直線や曲線、文字などの描画命令の列として表現された画像を {{ベクタ}} 画像と呼ぶ。",
  "画像データ形式の {{GIF}} は、最大256色だが簡単なアニメーションが表示できる。",
  "{{SVG}} はXMLで記述されたベクタ画像で、Webでの利用が注目されている。",
  "音声などを細かい時間間隔で計測して、計測値の列を得ることを {{標本}} 化と言う。",
  "動画は {{フレーム}} と呼ばれる静止画像の連続で表される。また、そのような静止画像が１秒間に表示される数を {{fps}} という単位で示し、動画の滑らかさを表す。",
  "macOSなどで利用できる新しい静止画像形式の {{HEIC}} は動画圧縮手法を利用している。一方、Googleが開発を進めている静止画像形式は {{WebP}} と呼ばれる。",
  "入力信号の周波数 f を再現するには、サンプリング周波数は {{2f}} 以上あればよい。これを {{標本化（サンプリング）}} 定理と言う。",
  "符号化と復号化の方式、またはそれらを行うソフトウェアを {{コーデック}} と呼ぶ。",
  "データやパラメータの格納方法だけを定め、特定の符号化方式を前提としないファイル形式を {{コンテナ}} ファイルと呼ぶ。",
  "動画や音声データを、受信するとほぼ同時に次々と再生する方式を {{ストリーミング}} と呼ぶ。",
  "ファイルの拡張子が mp4, wmv, avi などであれば、それは {{動画（ムービー）ファイル}} である。",
  "ファイルの拡張子が mp3, wma, wav などであれば、それは {{音声（オーディオ）ファイル}} である。",
  "真と偽（または０と１）の２つの値に対する演算を {{論理演算（ブール演算）}} と言う。",
  "英単語を使うと論理積、論理和、論理否定はそれぞれ {{AND、OR、NOT}} と呼ばれる。",
  "論理積では、２つの入力がどちらも {{真(1) Tでも可}} の時に出力が真(1)になる。",
  "論理和では、２つの入力がどちらも {{偽(0) Fでも可}} の時に出力が偽(0)になる。",
  "論理式のすべての入力と出力の組み合わせを表にしたものを {{真理値表}} と言う。",
  "基本的な論理演算を実現する回路を {{論理素子（基本論理演算素子、論理ゲート）}} と呼ぶ。",
  "トランジスタを使って、電流を流したり切ったりする {{スイッチング}} 回路が実現できる。",
  "{{排他的論理和（XOR, EOR）}} は、入力がどちらも真(1)の時に出力が偽(0)になる点で論理和と異なる。",
  "Aが「今日は13日である」、Bが「金曜日である」ということを真偽値で表しているとすると、$A + B$ は {{「13日であるか、金曜日である」}} 、$¬( A + B )$ は {{「13日か、金曜日か、のいずれでもない」（「13日でも、金曜日でもない」）}} 、$¬( A・B )$ は {{「13日の金曜日ではない」（「13日でないか、金曜日ではない」）}} を表す。",
  "分配法則を使うと $A ( B + C )$ は ${{AB + AC$（中点「・」を使ってもよい）}} と書き直すことができる。",
  "ド・モルガンの定理では、$¬(A・B)$『「AかつB」の否定』と、 {{¬A + ¬B 『「Aの否定」または「Bの否定」』}} は等しい。",
  "伝送されるデータに誤りがあることを検出するための符号を {{誤り検出符号}} と呼ぶ。",
  "一定数のビットに含まれる '$1$' の個数が奇数（あるいは偶数）になるように追加するビットを {{パリティ}} ビットと呼び、そのような符号を {{パリティ}} 符号と呼ぶ。",
  "入力履歴に関係なく、その時の入力で出力が決まる論理回路を {{組み合わせ回路}} と呼ぶ。",
  "内部状態を持ち、入力と内部状態で出力が決まる論理回路を {{順序回路}} と呼ぶ。",
  "論理回路、特に集積回路を設計するための言語を {{ハードウェア記述言語（HDL）}} と呼ぶ。",
  "伝送されるデータに散発的に発生する誤りを {{ランダム誤り}} 、特定箇所に集中する誤りを {{バースト誤り}} と呼ぶ。",
  "{{通信路符号化定理（シャノンの定理）}} とは、どんな雑音レベルの通信路でも、ほぼエラーのないデジタル情報を送信する符号化法を構成できるとする定理である。",
  "薄く、折り畳んで持ち運び可能な形態のコンピュータを {{ノート（ラップトップ）}} パソコンと呼ぶ。",
  "卓上またはその周辺に据え置く形態のコンピュータを {{デスクトップ}} 型パソコンと呼ぶ。",
  "大規模な科学技術計算に用いられる専用のコンピュータを {{スーパーコンピュータ}} と呼ぶ。",
  "板状の形態で、タッチパネル式の入力部を持つ携帯型情報機器 を {{タブレット端末（タブレットコンピュータ）}} と呼ぶ。",
  "腕時計型、メガネ型など、身に付ける形態のコンピュータを {{ウェアラブルコンピュータ（またはウェアラブルデバイス）}} と呼ぶ。",
  "{{ウェアラブルコンピュータ（またはウェアラブルデバイス）}} のうち、腕時計型のものを {{スマートウォッチ}} と呼ぶ。",
  "コンピュータの制御装置や演算装置を含む中央処理装置を {{CPU（または MPU）}} と呼ぶ。",
  "コンピュータの５大装置とは {{制御装置、演算装置、記憶装置}} 、入力・出力装置である。",
  "大規模集積回路を、英語の頭文字をとって {{LSI}} と呼ぶ。",
  "現在のデジタル回路のスイッチング素子は {{トランジスタ}} である。",
  "任意のメモリアドレスに読み書きが可能な揮発性メモリを {{RAM}} と呼ぶ。",
  "任意のメモリアドレスから読み出し可能な不揮発性メモリを {{ROM}} と呼ぶ。",
  "小型の1枚の基板の上に構成された安価なコンピュータを {{シングルボードコンピュータ、またはワンボードマイコン}} と呼ぶ。",
  "CPU内で処理を進めるために使われる、高速な少数個の記憶装置を {{レジスタ}} と呼ぶ。",
  "通信しあう複数の回路のタイミングを合わせるための信号を {{クロック信号（クロックパルス）}} と呼ぶ。",
  "データもプログラムも主記憶に格納しておく方式を {{プログラム内蔵方式（フォン・ノイマン方式）}} と呼ぶ。",
  "{{アドレス（番地）}} とは、情報の格納位置を示すためにメモリに付けられた通し番号といえる。",
  "RAMの中で、定期的にリフレッシュ動作が必要なメモリを {{DRAM（Dynamic RAM）}} と呼び、リフレッシュ動作が不要で高速なメモリを {{SRAM（Static RAM）}} と呼ぶ。",
  "集積回路として作成する工程で内容が書き込まれるメモリを {{マスクROM}} と呼ぶ。",
  "不揮発性メモリの一種だが書き換え可能なメモリを {{PROM（または EPROMなど）}} と呼ぶ。",
  "{{フラッシュメモリ}} は {{PROM（または EPROMなど）}} の一種で、現在、半導体メモリとして広く使われている。",
  "1946年、米ペンシルバニア大学で開発された最初期の電子計算機は {{ENIAC}} である。",
  "{{ENIAC}} は演算のための素子として {{真空管}} を使っていた。",
  "トランジスタの集積度は18～24ヶ月で倍増する、という経験則を {{ムーアの法則}} と呼ぶ。",
  "一度使ったデータを高速な {{キャッシュメモリ}} に格納しておくと、全体の処理を高速化できる。",
  "電源を供給し続けないと内容が失われるメモリを {{揮発性メモリ}} と呼ぶ。",
  "マザーボードのスロットに増設される基盤のことを {{拡張ボード（拡張カード、ドーターボード）}} と呼ぶ。",
  "パソコンの描画を高速化するための専用のプロセッサを {{GPU（グラフィック・アクセラレータ、グラフィックボードも可）}} と呼ぶ。",
  "{{GPU（グラフィック・アクセラレータ、グラフィックボードも可）}} の行列演算などの能力を描画以外の目的に利用することを {{GPGPU（GPUによる汎用計算）}} と呼ぶ。",
  "コンピュータグラフィックスで物体を表現するための多角形要素を {{ポリゴン}} と呼ぶ。",
  "１つのパッケージ内に複数のCPUコアを持つものを一般に {{マルチコア（マルチコアCPU）}} と呼び、コアが２つの場合を {{デュアルコア}} 、４つの場合を {{クアッドコア}} と呼ぶ。",
  "１秒間に実行できる浮動小数点数（実数）命令の数を {{FLOPS}} という単位で表す。",
  "{{ベンチマーク（ベンチマークテスト）}} とは、コンピュータの性能を定量的に比較するために、特定のソフトウェアやデータを使って処理速度の計測などを行うことである。",
  "基本的に１本の通信線を使い、１ビットずつ通信する方式を {{シリアル通信}} と呼ぶ。",
  "複数の通信線を使い、一度に複数ビットで通信する方式を {{パラレル通信}} と呼ぶ。",
  "１秒間に送信できるビット数を表す単位は {{bps}} である。",
  "B/s、Bps などと表記された場合は、１秒間に送信できる {{バイト}} 数を表す。",
  "広く普及している {{USB}} インタフェースにはマウスやキーボードも接続できる。",
  "多くの {{USB}} 機器を接続するには、 {{ハブ（USBハブ）}} を中心として枝分かれをさせる。",
  "{{ブルートゥース（Bluetooth）}} は無線で、携帯電話とヘッドセット、パソコンとマウスなどを接続できる。",
  "周辺装置を接続した時、自動的に組込みや設定が行われる仕組みを {{プラグアンドプレイ (PnP)}} と呼ぶ。",
  "周辺装置を制御するために必要なソフトウェアをデバイス {{ドライバ}} と呼ぶ。",
  "USB 2.0などのコネクタはコンピュータ側を {{Aプラグ}} 、装置側を {{Bプラグ}} と呼ぶ。",
  "USBのコネクタ形状で {{Type-C（USB-C）}} と呼ばれるものは表／裏の区別がない。",
  "{{Thunderbolt}} はディスプレイだけではなく、ディスク装置やネットワークにも接続できる高速汎用バスで、コネクタの形状は {{Type-C（USB-C）}} 、通信速度は最高40Gbpsである。",
  "パソコンの拡張スロットで広く使われている拡張バスの方式は {{PCI Express (PCIeでも可)}} である。",
  "ID情報を埋め込んだタグとの間で、近距離無線通信によって非接触で情報をやりとりする技術を {{RFID}} と呼ぶ。",
  "ICカードで広く使われる近距離無線通信は、英語の頭文字から {{NFC}} と呼ばれる。",
  "USBの給電方式を英語の頭文字２つからUSB- {{PD}} と呼ぶ。",
  "USB 3.0は、別名 USB 3.1 {{Gen1}} と呼ばれる。",
  "ハードディスクなどを接続する規格の {{SATA（シリアルATA、または eSATAも可）}} はホットスワップに対応している。",
  "SSDを接続するための規格 {{NVMe（または NVM Express。NVMHCIも可）}} は転送速度 10Gbpsで、 {{SATA（シリアルATA、または eSATAも可）}} より高速である。",
  "現在は主流ではない、旧式の接続規格のことを {{レガシー}} インタフェースと呼ぶ。",
  "{{レガシー}} インタフェースの代表的な例として {{シリアル}} ポートを使った {{シリアル}} 通信は現在でも需要がある。通信速度は 9600bps程度である。",
  "集積回路またはボード上の入出力ピンは、汎用I/Oポート、または {{GPIO}} と呼ばれる。",
  "Bluetoothに接続する機器の使い道による通信方法のカテゴリ分けを {{プロファイル}} と呼ぶ。",
  "情報処理でよく使われる長さの単位「インチ」は {{2.54}} cmである。",
  "磁性体を塗布した円盤に大容量のデータを記録できる装置が {{ハードディスク（磁気ディスク、HDD）}} である。",
  "{{フロッピーディスク}} は、磁性体を塗布したポリエステルの円盤に数MB程度のデータを記録する。",
  "{{SSD}} は半導体メモリを用いた記憶装置で {{ハードディスク（磁気ディスク、HDD）}} に代わって普及が始まっている。",
  "CDにデジタルデータを保存したものを {{CD-ROM（CD-R、CD-RW でも可）}} と呼ぶ。",
  "{{DVD}} は１層の書き込みで片面に約4GBが記録できる光ディスクである。",
  "青紫色レーザー光を使い、片面で50GBが記録できる光ディスクを {{Blu-ray（ブルーレイ、BD）}} と呼ぶ。",
  "紛失や破損などに備え、データを別の装置や場所に保存することを {{バックアップ}} と呼ぶ。",
  "液晶ディスプレイは英語の頭文字から {{LCD}} と略されることがある。",
  "画像やディスプレイの点の密度を、１インチあたりで表す単位は {{dpi}} である。",
  "3840×2160 のピクセルを持つ解像度のディスプレイを {{4K}} と称する。",
  "{{HDMI}} はテレビ、ビデオなどのデジタル家電やパソコンのディスプレイを接続する映像・音声の接続規格である。",
  "補助記憶装置のうち、駆動装置に容易に着脱可能な記憶媒体を {{リムーバブル・メディア}} と呼ぶ。",
  "現在最も広く利用されているメモリカードは {{SDカード（または SDHCなど）}} である。",
  "磁気テープは先頭から {{シーケンシャル（順）}} アクセスすることしかできない。一方、HDDなどは任意の場所の読み書きが可能で、これを {{ランダム（直接）}} アクセスと呼ぶ。",
  "スマートフォンなどでは、液晶にかわって {{有機EL（有機エレクトロルミネッセンス、または OLED）}} の採用が進んでいる。",
  "{{ポイント(pt)}} は文字の大きさなどを表す長さの単位で、 1/72inch とされる。",
  "ディスプレイを接続するアナログ15ピンの端子を {{VGA端子（アナログRGB端子、または D-Sub 15）}} と呼ぶ。",
  "新規格の {{Thunderbolt（または USB4 も可）}} は USB Type-C で接続され、4Kディスプレイなら２台を同時に接続可能な高速データ伝送が可能である。",
  "{{DVI}} は、ディスプレイをアナログ、またはデジタルで接続するための規格であり、{{DisplayPort}} はその後継のデジタルディスプレイ用規格である。",
  "VRゴーグルのように頭部に装着する映像表示装置を {{ヘッドマウントディスプレイ}} と総称する。",
  "カラープリンタでは、RGBの補色である {{シアン、マゼンタ、イエロー（黄）}} に黒を加えた {{CMYK}} と呼ばれる方式で色を表現する。",
  "インクの微粒子を噴出させて印字する {{インクジェットプリンタ}} は家庭用を中心に普及している。",
  "{{レーザープリンタ（レーザービームプリンタ、LBP）}} は、レーザー光を使ってドラムにトナーを付着させて印刷する。",
  "書類の表面を走査して画像をデータとして取り込む機械を {{イメージスキャナ}} と呼ぶ。",
  "振動などで利用者にフィードバックを伝える技術を {{触覚フィードバック（ハプティック・フィードバック）}} と呼ぶ。",
  "マウスやペンタブレットなど、位置を指定するための入力装置を {{ポインティングデバイス}} と呼ぶ。",
  "板状のセンサを指でなぞるタイプの {{ポインティングデバイス}} を {{タッチパッド（またはトラックパッド）}} と呼ぶ。",
  "{{3Dデジタイザ（３次元スキャナ、なども可）}} は３次元の物体の大きさを接触または非接触で計測する装置である。",
  "３次元形状のデータから樹脂製の立体物を作成できる {{3Dプリンタ}} が注目されている。",
  "日本語や英語キーボードのキー配列は、左側からキートップの字を読んで {{QWERTY}} と呼ばれる。",
  "光で色を混ぜるとより明るい色が生成されるが、この色の混ぜ方を {{加法混色}} と呼ぶ。",
  "絵の具を混ぜるとより暗い色が生成されるが、この色の混ぜ方を {{減法混色}} と呼ぶ。",
  "細いピンでリボンを叩いて印字するプリンタを {{ドットインパクトプリンタ}} と呼ぶ。",
  "画像から文字を読み取る {{OCR}} は「光学文字認識」の英語の頭文字である。",
  "Windows や macOSのような基本ソフトウェアは {{オペレーティングシステム（OS）}} と呼ばれる。",
  "ワープロやゲームのような、具体的な目的のためのソフトウェアを {{アプリケーション（応用）ソフトウェア}} と呼ぶ。",
  "マウスでウィンドウやボタンを操作するようなインタフェースを {{グラフィカルユーザインタフェース（GUI）}} と呼ぶ。",
  "現在、最も広く使われているパソコン用OSは {{Windows}} である。",
  "{{Windows}} に次いで広く使われているパソコン用OSは {{macOS}} である。",
  "Apple社のiPhoneなどに用いられるOSは {{iOS}} である。",
  "Google社の発表した {{Android}} を利用した情報機器が各社から次々に発表されている。",
  "電気製品や機械の制御のために、それらの機器自体が備えるコンピュータシステムを {{組込み}} システムと呼ぶ。",
  "コンピュータが直接理解し、実行できる命令を {{機械語（マシン語）}} と呼ぶ。",
  "{{機械語（マシン語）}} と一対一に対応し、人間が読み書きできる言語が {{アセンブリ言語}} である。",
  "よく使う計算やデータ処理の手続きや関数を、別のソフトウェアを作る時にも利用できるようにしたものを {{ライブラリ}} と呼ぶ。",
  "アプリケーションが OSや各種 {{ライブラリ}} の機能を利用する場合の使い方を定めたものを {{API (Application Programming Interface)}} と呼ぶ。",
  "パソコン用のWindowsのバージョンの中で、現在最新のものは {{Windows 11}} である。",
  "macOSは、名称を変更する前は {{Mac OS X}} と呼ばれていた。読み方は {{マックオーエス・テン}} である。",
  "{{Linux}} は組込み機器やサーバに幅広く使われているフリーのOSで、そのカーネルはAndroidでも利用されている。",
  "{{UNIX}} は macOSや {{Linux}} の元となったOSで、現在でも大きな影響力を持つ。",
  "{{ChromeOS}} はGoogleが提供する安価なパソコンのOSであり、今後は利用が増える可能性がある。",
  "{{iPadOS}} はApple社のタブレット端末のOSであり、iOSから派生したものである。",
  "機械語命令を解釈したり演算を行うためのCPUの高速な記憶装置を {{レジスタ}} と呼ぶ。",
  "{{ミドルウェア}} はOSが持っていない補助的な機能をアプリケーションに提供する。",
  "機器のROMに書き込まれたソフトウェアを {{ファームウェア}} と呼ぶ。",
  "システムを構築する基盤となるハードウェアや基本ソフトウェアを一般に {{プラットフォーム（開発基盤などでも可）}} と呼ぶ。",
  "典型的なアプリケーションの構造を提供するソフトウェア部品で、機能を追加したり、一部を書き換えたりすることで目的のソフトウェアを作ることができるものを {{フレームワーク}} と呼ぶが、ライブラリとの区別が明確ではないことも多い。",
  "{{仮想化}} とは、実際には存在していない機構が存在して機能しているように、ソフトウェアを使って見せかけることである。",
  "命令の文字列を入力してコンピュータを使うユーザインタフェースを {{CLI (Command Line Interface) または CUI (Character User Interface)}} と呼ぶ。",
  "コンピュータで実行されるプログラムを、OSでは {{プロセス（あるいはタスク）}} という単位で管理する。",
  "日本では組込みシステムに {{TRON}} 系のOSが使われる場合がある。",
  "CPUが機械語の命令を読み、解析・実行し、また次の命令を読み込むという繰り返しのことを {{マシンサイクル}} と呼ぶ。",
  "あるCPUが備えている、機械語命令の集合のことを {{命令セット}} と呼ぶ。",
  "コンピュータの種類に依存せずに、人間が読み書きするのに適した形式で記述できるプログラム言語を {{高水準言語（高級言語）}} と総称する。",
  "人間が読み書きできるテキスト形式のプログラムを {{ソースコード（ソースプログラム）}} と呼ぶ。",
  "{{高水準言語（高級言語）}} の {{ソースコード（ソースプログラム）}} を機械語に翻訳することを {{コンパイル}} と呼び、そのための翻訳プログラムを {{コンパイラ}} と呼ぶ。",
  "実行時に {{ソースコード（ソースプログラム）}} を解釈・実行するタイプの言語を {{インタプリタ言語}} と呼ぶ。",
  "最初期の高級言語には科学技術計算用の {{Fortran}} 、事務処理用の {{Cobol}} がある。",
  "{{Basic}} は、Windows以前のパソコンの標準言語として広く普及したインタプリタ言語である。",
  "{{C}} はUNIXの記述言語であり、ほとんどのCPUの機械語にコンパイルできる。",
  "C言語のように、実行すべき「手順」を記述するタイプの言語を {{手続き型言語}} と呼ぶ。",
  "逐次実行、選択実行、繰り返し制御で記述した手続きや関数を組み合わせたものとしてプログラムを構築する考え方を {{構造化プログラミング}} と呼ぶ。",
  "コンパイル時にオプションなどを指定して、無駄な動作を削減した実行効率の良い機械語コードを生成することができる。これを {{最適化}} と呼ぶ。",
  "ヨーロッパで開発された最初期のプログラミング言語 {{Algol}} は、CやJavaをはじめとする多くのプログラミング言語に強い影響を与えている。",
  "人工知能の研究などに利用された {{Lisp}} は、インタプリタ言語である。",
  "教育用として開発された {{Pascal}} はC言語にも影響を与えたコンパイル言語で、パソコンでも広く利用された。",
  "機械語を直接実行するアプリケーションを {{ネイティブ}} アプリと呼ぶことがある。",
  "Webサイトからプログラムを読み込み、機械語に変換することなく、ブラウザの機能で実行するアプリケーションを {{Web}} アプリと呼ぶ。",
  "Javaをコンパイルした結果の中間言語を実行するソフトウェアを {{Java仮想マシン（Java VM、JVM）}} と呼ぶ。",
  "代表的な関数型言語として {{Lisp（あるいは Scheme、Haskell、F#など）}} 、論理型言語では {{Prolog}} があげられる。",
  "{{オブジェクト指向}} 言語とは、データと手続きを組み合わせた {{オブジェクト}} という概念に基づいて設計や記述を行う言語である。",
  "{{Java、Python、C++ （C#, JavaScript も可）}} はいずれも最も広く様々な用途に使われている {{オブジェクト指向}} 言語である。",
  "簡単な記述で実用的な処理が実現できるインタプリタ言語を {{スクリプト言語}} と呼ぶことが多い。",
  "プログラムに含まれる間違い、異常な動作は一般に {{バグ}} と呼ばれる。",
  "プログラムの間違った箇所を見つけたり、直すために使うツールを {{デバッガ}} と呼ぶ。",
  "文字の形を表す書体データを {{フォント}} と呼ぶ。",
  "パソコンでの業務において、典型的によく利用されるソフトウェアをまとめたセットのことを {{オフィススイート (Office Suite)}} と呼ぶ。マイクロソフト社の {{オフィススイート (Office Suite)}} では、ワープロは {{Word}} 、計算ソフトは {{Excel}} 、プレゼンテーションソフトは {{PowerPoint}} である。",
  "現在、最も利用されているパソコン用のWebブラウザは {{Chrome}} であり、次によく使われているブラウザには {{Safari、Firefox、Microsoft Edge （Opera でも可）}} などがある。",
  "{{PHP}} はHTML埋め込み型の構文を持ち、Webサーバ上で動作するスクリプト言語である。",
  "現在広く用いられている汎用のスクリプト言語には {{Ruby, Python （あるいは JavaScript, Perlでも可）}} などがある。",
  "C言語を発展させたオブジェクト指向言語のうち、 {{C++}} は言語仕様が複雑だが、多様なソフトウェアの開発に利用される。一方、 {{Objective-C}} はApple社の機器向けの開発に用いられる。",
  "UNIXに入力されたコマンドを解釈するプログラムである {{シェル（Unixシェル）}} は、スクリプトの実行もできる。",
  "{{JavaScript （TypeScriptでも可）}} はWebページに書き込まれ、ブラウザ上で動作する代表的な言語である。",
  "エディタ、コンパイラ、デバッガなどのツールを一体化した環境を日本語で {{統合開発環境}} と呼び、英語の頭文字から {{IDE}} という略語で表される。",
  "ワープロなどで、画面上で見たままを印刷できるという概念を {{WYSIWYG（ウィジウィグ）}} と呼ぶ。",
  "{{上付き}} 文字は、「$A^2$」の2のように、通常の文字よりも上に小さめに記述する。",
  "Microsoft社は、パソコンやスマートフォンのアプリケーションを記述するためのオブジェクト指向言語として {{C#（あるいは F#、Visual Basicでも可）}} を設計している。",
  "Apple社は、MacやiOSのアプリケーションを記述するために、新しいオブジェクト指向言語 {{Swift}} を設計した。",
  "Androidアプリの開発用言語として、Javaに加えて新たに {{Kotlin}} が注目されている。",
  "文字の輪郭線の滑らかな形状をデータとするフォントを {{アウトライン・フォント}} と呼ぶ。",
  "読みやすさのために文字ごとに幅が調整されたフォントを {{プロポーショナル・フォント}} と呼ぶ。",
  "従来は印刷所で行っていた製版作業をパソコンで行うことを {{デスクトップ・パブリッシング（DTP）}} と呼ぶ。",
  "ソースコードを公開し、誰でもが無償で自由に利用したり、再配布、改変できるようにされているソフトウェアを {{オープンソース}} と呼ぶ。",
  "問題を解く手順や計算方法のことを {{アルゴリズム}} と言う。",
  "ひとまとまりのデータを、ある順序で整列させる処理を {{ソーティング（ソート、並べ替え）}} と呼ぶ。",
  "人工知能を指す ”AI” は英語の {{Artificial Intelligence}} の頭文字からきている。",
  "入力される学習データから自動で動作や効率を改善できるコンピュータアルゴリズムを {{機械学習}} と呼ぶ。",
  "神経細胞の結びつきと情報伝達を模した {{機械学習}} のためのモデルを {{ニューラルネット（人工ニューラルネットワーク）}} と呼ぶ。",
  "ファイルシステムには {{ディレクトリ（あるいはフォルダ）}} の階層があり、通常のファイルはその中に保存される。",
  "Unixで、システムのすべてのファイルを含む {{ディレクトリ（あるいはフォルダ）}} を {{ルートディレクトリ}} と呼ぶ。",
  "ターミナルなどでその時の作業で使用している {{ディレクトリ（あるいはフォルダ）}} を {{カレントディレクトリ}} と呼ぶ。",
  "通常、ファイル名の末尾には {{拡張子}} が付けられ、ファイルの種類を表す。",
  "ファイルを長期間保存しておく記憶装置を、主記憶と区別して {{二次記憶装置（補助記憶装置）}} と呼ぶ。",
  "Unixのパスの記述では区切りに {{/ （スラッシュ）}} を用いるが、Windowsでは {{\\ または ￥ （バックスラッシュまたは円記号）}} が用いられる。",
  "１つのプログラム内に複数存在できる実行の流れのことを {{スレッド}} と呼ぶ。",
  "機械学習のタスクのうち、入力データと共に期待される出力が与えられるものを {{教師あり学習}} と呼ぶ",
  "ファイルの格納場所をルートディレクトリから書き示したものが {{絶対パス}} である。",
  "ファイルの格納場所をカレントディレクトリから書き示したものが {{相対パス}} である。",
  "Windowsでは外部記憶装置ごとに {{ドライブレター（ドライブ名）}} を割り当てて区別する。",
  "カレントディレクトリ、およびその親ディレクトリを表現するため、それぞれ {{. （←ピリオド）}} 、 {{.. （←連続した２つのピリオド）}} という記法が用いられる。",
  "講義で説明した、２つの正整数の最大公約数を求めるアルゴリズムは {{ユークリッドの互除法}} である。",
  "手続きの複雑さを表す {{計算量（時間計算量）}} という概念があり、オーダー記法で表現される。",
  "問題のサイズnに対して、計算の手間が $5n^2 + 3n$  で表されるアルゴリズムの {{計算量（時間計算量）}} は、オーダー記法で ${{O(n^2)}}$ と表される。",
  "マージソートやクイックソートのように、あるものの定義にそれ自身が含まれていることを {{再帰}} 的定義と言う。",
  "機械学習のタスクで、システム自体が周囲に働きかけ、そのフィードバックから適切な方策を学ぶタイプのものを {{強化学習}} と呼ぶ。",
  "近年注目されている {{ディープラーニング（深層学習）}} と呼ばれる機械学習アルゴリズムは、人間の認識能力を超えるほどの性能を実現することがある。",
  "Unixでは外部記憶装置が接続されると、内容がファイルシステムに {{マウント}} される。",
];
