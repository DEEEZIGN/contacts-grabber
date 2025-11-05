import { i as __require, s as __toESM, t as __commonJS } from "./chunk-DxYZOojV.mjs";
import { createRequire } from "node:module";

//#region ../../node_modules/.pnpm/jiti@2.6.1/node_modules/jiti/dist/jiti.cjs
var require_jiti = /* @__PURE__ */ __commonJS({ "../../node_modules/.pnpm/jiti@2.6.1/node_modules/jiti/dist/jiti.cjs": ((exports, module) => {
	(() => {
		var e = { "./node_modules/.pnpm/mlly@1.8.0/node_modules/mlly/dist lazy recursive": function(e$1) {
			function webpackEmptyAsyncContext(e$2) {
				return Promise.resolve().then(function() {
					var t$1 = /* @__PURE__ */ new Error("Cannot find module '" + e$2 + "'");
					throw t$1.code = "MODULE_NOT_FOUND", t$1;
				});
			}
			webpackEmptyAsyncContext.keys = () => [], webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext, webpackEmptyAsyncContext.id = "./node_modules/.pnpm/mlly@1.8.0/node_modules/mlly/dist lazy recursive", e$1.exports = webpackEmptyAsyncContext;
		} }, t = {};
		function __webpack_require__(i$1) {
			var s = t[i$1];
			if (void 0 !== s) return s.exports;
			var r = t[i$1] = { exports: {} };
			return e[i$1](r, r.exports, __webpack_require__), r.exports;
		}
		__webpack_require__.n = (e$1) => {
			var t$1 = e$1 && e$1.__esModule ? () => e$1.default : () => e$1;
			return __webpack_require__.d(t$1, { a: t$1 }), t$1;
		}, __webpack_require__.d = (e$1, t$1) => {
			for (var i$1 in t$1) __webpack_require__.o(t$1, i$1) && !__webpack_require__.o(e$1, i$1) && Object.defineProperty(e$1, i$1, {
				enumerable: !0,
				get: t$1[i$1]
			});
		}, __webpack_require__.o = (e$1, t$1) => Object.prototype.hasOwnProperty.call(e$1, t$1);
		var i = {};
		(() => {
			__webpack_require__.d(i, { default: () => createJiti$1 });
			const e$1 = __require("node:os");
			var t$1 = [
				509,
				0,
				227,
				0,
				150,
				4,
				294,
				9,
				1368,
				2,
				2,
				1,
				6,
				3,
				41,
				2,
				5,
				0,
				166,
				1,
				574,
				3,
				9,
				9,
				7,
				9,
				32,
				4,
				318,
				1,
				80,
				3,
				71,
				10,
				50,
				3,
				123,
				2,
				54,
				14,
				32,
				10,
				3,
				1,
				11,
				3,
				46,
				10,
				8,
				0,
				46,
				9,
				7,
				2,
				37,
				13,
				2,
				9,
				6,
				1,
				45,
				0,
				13,
				2,
				49,
				13,
				9,
				3,
				2,
				11,
				83,
				11,
				7,
				0,
				3,
				0,
				158,
				11,
				6,
				9,
				7,
				3,
				56,
				1,
				2,
				6,
				3,
				1,
				3,
				2,
				10,
				0,
				11,
				1,
				3,
				6,
				4,
				4,
				68,
				8,
				2,
				0,
				3,
				0,
				2,
				3,
				2,
				4,
				2,
				0,
				15,
				1,
				83,
				17,
				10,
				9,
				5,
				0,
				82,
				19,
				13,
				9,
				214,
				6,
				3,
				8,
				28,
				1,
				83,
				16,
				16,
				9,
				82,
				12,
				9,
				9,
				7,
				19,
				58,
				14,
				5,
				9,
				243,
				14,
				166,
				9,
				71,
				5,
				2,
				1,
				3,
				3,
				2,
				0,
				2,
				1,
				13,
				9,
				120,
				6,
				3,
				6,
				4,
				0,
				29,
				9,
				41,
				6,
				2,
				3,
				9,
				0,
				10,
				10,
				47,
				15,
				343,
				9,
				54,
				7,
				2,
				7,
				17,
				9,
				57,
				21,
				2,
				13,
				123,
				5,
				4,
				0,
				2,
				1,
				2,
				6,
				2,
				0,
				9,
				9,
				49,
				4,
				2,
				1,
				2,
				4,
				9,
				9,
				330,
				3,
				10,
				1,
				2,
				0,
				49,
				6,
				4,
				4,
				14,
				10,
				5350,
				0,
				7,
				14,
				11465,
				27,
				2343,
				9,
				87,
				9,
				39,
				4,
				60,
				6,
				26,
				9,
				535,
				9,
				470,
				0,
				2,
				54,
				8,
				3,
				82,
				0,
				12,
				1,
				19628,
				1,
				4178,
				9,
				519,
				45,
				3,
				22,
				543,
				4,
				4,
				5,
				9,
				7,
				3,
				6,
				31,
				3,
				149,
				2,
				1418,
				49,
				513,
				54,
				5,
				49,
				9,
				0,
				15,
				0,
				23,
				4,
				2,
				14,
				1361,
				6,
				2,
				16,
				3,
				6,
				2,
				1,
				2,
				4,
				101,
				0,
				161,
				6,
				10,
				9,
				357,
				0,
				62,
				13,
				499,
				13,
				245,
				1,
				2,
				9,
				726,
				6,
				110,
				6,
				6,
				9,
				4759,
				9,
				787719,
				239
			], s = [
				0,
				11,
				2,
				25,
				2,
				18,
				2,
				1,
				2,
				14,
				3,
				13,
				35,
				122,
				70,
				52,
				268,
				28,
				4,
				48,
				48,
				31,
				14,
				29,
				6,
				37,
				11,
				29,
				3,
				35,
				5,
				7,
				2,
				4,
				43,
				157,
				19,
				35,
				5,
				35,
				5,
				39,
				9,
				51,
				13,
				10,
				2,
				14,
				2,
				6,
				2,
				1,
				2,
				10,
				2,
				14,
				2,
				6,
				2,
				1,
				4,
				51,
				13,
				310,
				10,
				21,
				11,
				7,
				25,
				5,
				2,
				41,
				2,
				8,
				70,
				5,
				3,
				0,
				2,
				43,
				2,
				1,
				4,
				0,
				3,
				22,
				11,
				22,
				10,
				30,
				66,
				18,
				2,
				1,
				11,
				21,
				11,
				25,
				71,
				55,
				7,
				1,
				65,
				0,
				16,
				3,
				2,
				2,
				2,
				28,
				43,
				28,
				4,
				28,
				36,
				7,
				2,
				27,
				28,
				53,
				11,
				21,
				11,
				18,
				14,
				17,
				111,
				72,
				56,
				50,
				14,
				50,
				14,
				35,
				39,
				27,
				10,
				22,
				251,
				41,
				7,
				1,
				17,
				2,
				60,
				28,
				11,
				0,
				9,
				21,
				43,
				17,
				47,
				20,
				28,
				22,
				13,
				52,
				58,
				1,
				3,
				0,
				14,
				44,
				33,
				24,
				27,
				35,
				30,
				0,
				3,
				0,
				9,
				34,
				4,
				0,
				13,
				47,
				15,
				3,
				22,
				0,
				2,
				0,
				36,
				17,
				2,
				24,
				20,
				1,
				64,
				6,
				2,
				0,
				2,
				3,
				2,
				14,
				2,
				9,
				8,
				46,
				39,
				7,
				3,
				1,
				3,
				21,
				2,
				6,
				2,
				1,
				2,
				4,
				4,
				0,
				19,
				0,
				13,
				4,
				31,
				9,
				2,
				0,
				3,
				0,
				2,
				37,
				2,
				0,
				26,
				0,
				2,
				0,
				45,
				52,
				19,
				3,
				21,
				2,
				31,
				47,
				21,
				1,
				2,
				0,
				185,
				46,
				42,
				3,
				37,
				47,
				21,
				0,
				60,
				42,
				14,
				0,
				72,
				26,
				38,
				6,
				186,
				43,
				117,
				63,
				32,
				7,
				3,
				0,
				3,
				7,
				2,
				1,
				2,
				23,
				16,
				0,
				2,
				0,
				95,
				7,
				3,
				38,
				17,
				0,
				2,
				0,
				29,
				0,
				11,
				39,
				8,
				0,
				22,
				0,
				12,
				45,
				20,
				0,
				19,
				72,
				200,
				32,
				32,
				8,
				2,
				36,
				18,
				0,
				50,
				29,
				113,
				6,
				2,
				1,
				2,
				37,
				22,
				0,
				26,
				5,
				2,
				1,
				2,
				31,
				15,
				0,
				328,
				18,
				16,
				0,
				2,
				12,
				2,
				33,
				125,
				0,
				80,
				921,
				103,
				110,
				18,
				195,
				2637,
				96,
				16,
				1071,
				18,
				5,
				26,
				3994,
				6,
				582,
				6842,
				29,
				1763,
				568,
				8,
				30,
				18,
				78,
				18,
				29,
				19,
				47,
				17,
				3,
				32,
				20,
				6,
				18,
				433,
				44,
				212,
				63,
				129,
				74,
				6,
				0,
				67,
				12,
				65,
				1,
				2,
				0,
				29,
				6135,
				9,
				1237,
				42,
				9,
				8936,
				3,
				2,
				6,
				2,
				1,
				2,
				290,
				16,
				0,
				30,
				2,
				3,
				0,
				15,
				3,
				9,
				395,
				2309,
				106,
				6,
				12,
				4,
				8,
				8,
				9,
				5991,
				84,
				2,
				70,
				2,
				1,
				3,
				0,
				3,
				1,
				3,
				3,
				2,
				11,
				2,
				0,
				2,
				6,
				2,
				64,
				2,
				3,
				3,
				7,
				2,
				6,
				2,
				27,
				2,
				3,
				2,
				4,
				2,
				0,
				4,
				6,
				2,
				339,
				3,
				24,
				2,
				24,
				2,
				30,
				2,
				24,
				2,
				30,
				2,
				24,
				2,
				30,
				2,
				24,
				2,
				30,
				2,
				24,
				2,
				7,
				1845,
				30,
				7,
				5,
				262,
				61,
				147,
				44,
				11,
				6,
				17,
				0,
				322,
				29,
				19,
				43,
				485,
				27,
				229,
				29,
				3,
				0,
				496,
				6,
				2,
				3,
				2,
				1,
				2,
				14,
				2,
				196,
				60,
				67,
				8,
				0,
				1205,
				3,
				2,
				26,
				2,
				1,
				2,
				0,
				3,
				0,
				2,
				9,
				2,
				3,
				2,
				0,
				2,
				0,
				7,
				0,
				5,
				0,
				2,
				0,
				2,
				0,
				2,
				2,
				2,
				1,
				2,
				0,
				3,
				0,
				2,
				0,
				2,
				0,
				2,
				0,
				2,
				0,
				2,
				1,
				2,
				0,
				3,
				3,
				2,
				6,
				2,
				3,
				2,
				3,
				2,
				0,
				2,
				9,
				2,
				16,
				6,
				2,
				2,
				4,
				2,
				16,
				4421,
				42719,
				33,
				4153,
				7,
				221,
				3,
				5761,
				15,
				7472,
				16,
				621,
				2467,
				541,
				1507,
				4938,
				6,
				4191
			], r = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲊᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟍꟐꟑꟓꟕ-Ƛꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", n = {
				3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
				5: "class enum extends super const export import",
				6: "enum",
				strict: "implements interface let package private protected public static yield",
				strictBind: "eval arguments"
			}, a = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this", o = {
				5: a,
				"5module": a + " export import",
				6: a + " const class extends export import super"
			}, h = /^in(stanceof)?$/, c = /* @__PURE__ */ new RegExp("[" + r + "]"), p = /* @__PURE__ */ new RegExp("[" + r + "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࢗ-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ೳഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ඁ-ඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-໎໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠏-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᪿ-ᫎᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿‌‍‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯・꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿･]");
			function isInAstralSet(e$2, t$2) {
				for (var i$1 = 65536, s$1 = 0; s$1 < t$2.length; s$1 += 2) {
					if ((i$1 += t$2[s$1]) > e$2) return !1;
					if ((i$1 += t$2[s$1 + 1]) >= e$2) return !0;
				}
				return !1;
			}
			function isIdentifierStart(e$2, t$2) {
				return e$2 < 65 ? 36 === e$2 : e$2 < 91 || (e$2 < 97 ? 95 === e$2 : e$2 < 123 || (e$2 <= 65535 ? e$2 >= 170 && c.test(String.fromCharCode(e$2)) : !1 !== t$2 && isInAstralSet(e$2, s)));
			}
			function isIdentifierChar(e$2, i$1) {
				return e$2 < 48 ? 36 === e$2 : e$2 < 58 || !(e$2 < 65) && (e$2 < 91 || (e$2 < 97 ? 95 === e$2 : e$2 < 123 || (e$2 <= 65535 ? e$2 >= 170 && p.test(String.fromCharCode(e$2)) : !1 !== i$1 && (isInAstralSet(e$2, s) || isInAstralSet(e$2, t$1)))));
			}
			var acorn_TokenType = function(e$2, t$2) {
				void 0 === t$2 && (t$2 = {}), this.label = e$2, this.keyword = t$2.keyword, this.beforeExpr = !!t$2.beforeExpr, this.startsExpr = !!t$2.startsExpr, this.isLoop = !!t$2.isLoop, this.isAssign = !!t$2.isAssign, this.prefix = !!t$2.prefix, this.postfix = !!t$2.postfix, this.binop = t$2.binop || null, this.updateContext = null;
			};
			function binop(e$2, t$2) {
				return new acorn_TokenType(e$2, {
					beforeExpr: !0,
					binop: t$2
				});
			}
			var l = { beforeExpr: !0 }, u = { startsExpr: !0 }, d = {};
			function kw(e$2, t$2) {
				return void 0 === t$2 && (t$2 = {}), t$2.keyword = e$2, d[e$2] = new acorn_TokenType(e$2, t$2);
			}
			var f = {
				num: new acorn_TokenType("num", u),
				regexp: new acorn_TokenType("regexp", u),
				string: new acorn_TokenType("string", u),
				name: new acorn_TokenType("name", u),
				privateId: new acorn_TokenType("privateId", u),
				eof: new acorn_TokenType("eof"),
				bracketL: new acorn_TokenType("[", {
					beforeExpr: !0,
					startsExpr: !0
				}),
				bracketR: new acorn_TokenType("]"),
				braceL: new acorn_TokenType("{", {
					beforeExpr: !0,
					startsExpr: !0
				}),
				braceR: new acorn_TokenType("}"),
				parenL: new acorn_TokenType("(", {
					beforeExpr: !0,
					startsExpr: !0
				}),
				parenR: new acorn_TokenType(")"),
				comma: new acorn_TokenType(",", l),
				semi: new acorn_TokenType(";", l),
				colon: new acorn_TokenType(":", l),
				dot: new acorn_TokenType("."),
				question: new acorn_TokenType("?", l),
				questionDot: new acorn_TokenType("?."),
				arrow: new acorn_TokenType("=>", l),
				template: new acorn_TokenType("template"),
				invalidTemplate: new acorn_TokenType("invalidTemplate"),
				ellipsis: new acorn_TokenType("...", l),
				backQuote: new acorn_TokenType("`", u),
				dollarBraceL: new acorn_TokenType("${", {
					beforeExpr: !0,
					startsExpr: !0
				}),
				eq: new acorn_TokenType("=", {
					beforeExpr: !0,
					isAssign: !0
				}),
				assign: new acorn_TokenType("_=", {
					beforeExpr: !0,
					isAssign: !0
				}),
				incDec: new acorn_TokenType("++/--", {
					prefix: !0,
					postfix: !0,
					startsExpr: !0
				}),
				prefix: new acorn_TokenType("!/~", {
					beforeExpr: !0,
					prefix: !0,
					startsExpr: !0
				}),
				logicalOR: binop("||", 1),
				logicalAND: binop("&&", 2),
				bitwiseOR: binop("|", 3),
				bitwiseXOR: binop("^", 4),
				bitwiseAND: binop("&", 5),
				equality: binop("==/!=/===/!==", 6),
				relational: binop("</>/<=/>=", 7),
				bitShift: binop("<</>>/>>>", 8),
				plusMin: new acorn_TokenType("+/-", {
					beforeExpr: !0,
					binop: 9,
					prefix: !0,
					startsExpr: !0
				}),
				modulo: binop("%", 10),
				star: binop("*", 10),
				slash: binop("/", 10),
				starstar: new acorn_TokenType("**", { beforeExpr: !0 }),
				coalesce: binop("??", 1),
				_break: kw("break"),
				_case: kw("case", l),
				_catch: kw("catch"),
				_continue: kw("continue"),
				_debugger: kw("debugger"),
				_default: kw("default", l),
				_do: kw("do", {
					isLoop: !0,
					beforeExpr: !0
				}),
				_else: kw("else", l),
				_finally: kw("finally"),
				_for: kw("for", { isLoop: !0 }),
				_function: kw("function", u),
				_if: kw("if"),
				_return: kw("return", l),
				_switch: kw("switch"),
				_throw: kw("throw", l),
				_try: kw("try"),
				_var: kw("var"),
				_const: kw("const"),
				_while: kw("while", { isLoop: !0 }),
				_with: kw("with"),
				_new: kw("new", {
					beforeExpr: !0,
					startsExpr: !0
				}),
				_this: kw("this", u),
				_super: kw("super", u),
				_class: kw("class", u),
				_extends: kw("extends", l),
				_export: kw("export"),
				_import: kw("import", u),
				_null: kw("null", u),
				_true: kw("true", u),
				_false: kw("false", u),
				_in: kw("in", {
					beforeExpr: !0,
					binop: 7
				}),
				_instanceof: kw("instanceof", {
					beforeExpr: !0,
					binop: 7
				}),
				_typeof: kw("typeof", {
					beforeExpr: !0,
					prefix: !0,
					startsExpr: !0
				}),
				_void: kw("void", {
					beforeExpr: !0,
					prefix: !0,
					startsExpr: !0
				}),
				_delete: kw("delete", {
					beforeExpr: !0,
					prefix: !0,
					startsExpr: !0
				})
			}, m = /\r\n?|\n|\u2028|\u2029/, g = new RegExp(m.source, "g");
			function isNewLine(e$2) {
				return 10 === e$2 || 13 === e$2 || 8232 === e$2 || 8233 === e$2;
			}
			function nextLineBreak(e$2, t$2, i$1) {
				void 0 === i$1 && (i$1 = e$2.length);
				for (var s$1 = t$2; s$1 < i$1; s$1++) {
					var r$1 = e$2.charCodeAt(s$1);
					if (isNewLine(r$1)) return s$1 < i$1 - 1 && 13 === r$1 && 10 === e$2.charCodeAt(s$1 + 1) ? s$1 + 2 : s$1 + 1;
				}
				return -1;
			}
			var x = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/, v = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, y = Object.prototype, _ = y.hasOwnProperty, E = y.toString, b = Object.hasOwn || function(e$2, t$2) {
				return _.call(e$2, t$2);
			}, S = Array.isArray || function(e$2) {
				return "[object Array]" === E.call(e$2);
			}, k = Object.create(null);
			function wordsRegexp(e$2) {
				return k[e$2] || (k[e$2] = /* @__PURE__ */ new RegExp("^(?:" + e$2.replace(/ /g, "|") + ")$"));
			}
			function codePointToString(e$2) {
				return e$2 <= 65535 ? String.fromCharCode(e$2) : (e$2 -= 65536, String.fromCharCode(55296 + (e$2 >> 10), 56320 + (1023 & e$2)));
			}
			var w = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/, acorn_Position = function(e$2, t$2) {
				this.line = e$2, this.column = t$2;
			};
			acorn_Position.prototype.offset = function(e$2) {
				return new acorn_Position(this.line, this.column + e$2);
			};
			var acorn_SourceLocation = function(e$2, t$2, i$1) {
				this.start = t$2, this.end = i$1, null !== e$2.sourceFile && (this.source = e$2.sourceFile);
			};
			function getLineInfo(e$2, t$2) {
				for (var i$1 = 1, s$1 = 0;;) {
					var r$1 = nextLineBreak(e$2, s$1, t$2);
					if (r$1 < 0) return new acorn_Position(i$1, t$2 - s$1);
					++i$1, s$1 = r$1;
				}
			}
			var I = {
				ecmaVersion: null,
				sourceType: "script",
				onInsertedSemicolon: null,
				onTrailingComma: null,
				allowReserved: null,
				allowReturnOutsideFunction: !1,
				allowImportExportEverywhere: !1,
				allowAwaitOutsideFunction: null,
				allowSuperOutsideMethod: null,
				allowHashBang: !1,
				checkPrivateFields: !0,
				locations: !1,
				onToken: null,
				onComment: null,
				ranges: !1,
				program: null,
				sourceFile: null,
				directSourceFile: null,
				preserveParens: !1
			}, C = !1;
			function getOptions(e$2) {
				var t$2 = {};
				for (var i$1 in I) t$2[i$1] = e$2 && b(e$2, i$1) ? e$2[i$1] : I[i$1];
				if ("latest" === t$2.ecmaVersion ? t$2.ecmaVersion = 1e8 : null == t$2.ecmaVersion ? (!C && "object" == typeof console && console.warn && (C = !0, console.warn("Since Acorn 8.0.0, options.ecmaVersion is required.\nDefaulting to 2020, but this will stop working in the future.")), t$2.ecmaVersion = 11) : t$2.ecmaVersion >= 2015 && (t$2.ecmaVersion -= 2009), t$2.allowReserved ??= t$2.ecmaVersion < 5, e$2 && null != e$2.allowHashBang || (t$2.allowHashBang = t$2.ecmaVersion >= 14), S(t$2.onToken)) {
					var s$1 = t$2.onToken;
					t$2.onToken = function(e$3) {
						return s$1.push(e$3);
					};
				}
				return S(t$2.onComment) && (t$2.onComment = function(e$3, t$3) {
					return function(i$2, s$2, r$1, n$1, a$1, o$1) {
						var h$1 = {
							type: i$2 ? "Block" : "Line",
							value: s$2,
							start: r$1,
							end: n$1
						};
						e$3.locations && (h$1.loc = new acorn_SourceLocation(this, a$1, o$1)), e$3.ranges && (h$1.range = [r$1, n$1]), t$3.push(h$1);
					};
				}(t$2, t$2.onComment)), t$2;
			}
			var R = 256, P = 259;
			function functionFlags(e$2, t$2) {
				return 2 | (e$2 ? 4 : 0) | (t$2 ? 8 : 0);
			}
			var acorn_Parser = function(e$2, t$2, i$1) {
				this.options = e$2 = getOptions(e$2), this.sourceFile = e$2.sourceFile, this.keywords = wordsRegexp(o[e$2.ecmaVersion >= 6 ? 6 : "module" === e$2.sourceType ? "5module" : 5]);
				var s$1 = "";
				!0 !== e$2.allowReserved && (s$1 = n[e$2.ecmaVersion >= 6 ? 6 : 5 === e$2.ecmaVersion ? 5 : 3], "module" === e$2.sourceType && (s$1 += " await")), this.reservedWords = wordsRegexp(s$1);
				var r$1 = (s$1 ? s$1 + " " : "") + n.strict;
				this.reservedWordsStrict = wordsRegexp(r$1), this.reservedWordsStrictBind = wordsRegexp(r$1 + " " + n.strictBind), this.input = String(t$2), this.containsEsc = !1, i$1 ? (this.pos = i$1, this.lineStart = this.input.lastIndexOf("\n", i$1 - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(m).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = f.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = "module" === e$2.sourceType, this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.potentialArrowInForAwait = !1, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = Object.create(null), 0 === this.pos && e$2.allowHashBang && "#!" === this.input.slice(0, 2) && this.skipLineComment(2), this.scopeStack = [], this.enterScope(1), this.regexpState = null, this.privateNameStack = [];
			}, T = {
				inFunction: { configurable: !0 },
				inGenerator: { configurable: !0 },
				inAsync: { configurable: !0 },
				canAwait: { configurable: !0 },
				allowSuper: { configurable: !0 },
				allowDirectSuper: { configurable: !0 },
				treatFunctionsAsVar: { configurable: !0 },
				allowNewDotTarget: { configurable: !0 },
				inClassStaticBlock: { configurable: !0 }
			};
			acorn_Parser.prototype.parse = function() {
				var e$2 = this.options.program || this.startNode();
				return this.nextToken(), this.parseTopLevel(e$2);
			}, T.inFunction.get = function() {
				return (2 & this.currentVarScope().flags) > 0;
			}, T.inGenerator.get = function() {
				return (8 & this.currentVarScope().flags) > 0;
			}, T.inAsync.get = function() {
				return (4 & this.currentVarScope().flags) > 0;
			}, T.canAwait.get = function() {
				for (var e$2 = this.scopeStack.length - 1; e$2 >= 0; e$2--) {
					var t$2 = this.scopeStack[e$2].flags;
					if (768 & t$2) return !1;
					if (2 & t$2) return (4 & t$2) > 0;
				}
				return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction;
			}, T.allowSuper.get = function() {
				return (64 & this.currentThisScope().flags) > 0 || this.options.allowSuperOutsideMethod;
			}, T.allowDirectSuper.get = function() {
				return (128 & this.currentThisScope().flags) > 0;
			}, T.treatFunctionsAsVar.get = function() {
				return this.treatFunctionsAsVarInScope(this.currentScope());
			}, T.allowNewDotTarget.get = function() {
				for (var e$2 = this.scopeStack.length - 1; e$2 >= 0; e$2--) {
					var t$2 = this.scopeStack[e$2].flags;
					if (768 & t$2 || 2 & t$2 && !(16 & t$2)) return !0;
				}
				return !1;
			}, T.inClassStaticBlock.get = function() {
				return (this.currentVarScope().flags & R) > 0;
			}, acorn_Parser.extend = function() {
				for (var e$2 = [], t$2 = arguments.length; t$2--;) e$2[t$2] = arguments[t$2];
				for (var i$1 = this, s$1 = 0; s$1 < e$2.length; s$1++) i$1 = e$2[s$1](i$1);
				return i$1;
			}, acorn_Parser.parse = function(e$2, t$2) {
				return new this(t$2, e$2).parse();
			}, acorn_Parser.parseExpressionAt = function(e$2, t$2, i$1) {
				var s$1 = new this(i$1, e$2, t$2);
				return s$1.nextToken(), s$1.parseExpression();
			}, acorn_Parser.tokenizer = function(e$2, t$2) {
				return new this(t$2, e$2);
			}, Object.defineProperties(acorn_Parser.prototype, T);
			var A = acorn_Parser.prototype, N = /^(?:'((?:\\[^]|[^'\\])*?)'|"((?:\\[^]|[^"\\])*?)")/;
			A.strictDirective = function(e$2) {
				if (this.options.ecmaVersion < 5) return !1;
				for (;;) {
					v.lastIndex = e$2, e$2 += v.exec(this.input)[0].length;
					var t$2 = N.exec(this.input.slice(e$2));
					if (!t$2) return !1;
					if ("use strict" === (t$2[1] || t$2[2])) {
						v.lastIndex = e$2 + t$2[0].length;
						var i$1 = v.exec(this.input), s$1 = i$1.index + i$1[0].length, r$1 = this.input.charAt(s$1);
						return ";" === r$1 || "}" === r$1 || m.test(i$1[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(r$1) || "!" === r$1 && "=" === this.input.charAt(s$1 + 1));
					}
					e$2 += t$2[0].length, v.lastIndex = e$2, e$2 += v.exec(this.input)[0].length, ";" === this.input[e$2] && e$2++;
				}
			}, A.eat = function(e$2) {
				return this.type === e$2 && (this.next(), !0);
			}, A.isContextual = function(e$2) {
				return this.type === f.name && this.value === e$2 && !this.containsEsc;
			}, A.eatContextual = function(e$2) {
				return !!this.isContextual(e$2) && (this.next(), !0);
			}, A.expectContextual = function(e$2) {
				this.eatContextual(e$2) || this.unexpected();
			}, A.canInsertSemicolon = function() {
				return this.type === f.eof || this.type === f.braceR || m.test(this.input.slice(this.lastTokEnd, this.start));
			}, A.insertSemicolon = function() {
				if (this.canInsertSemicolon()) return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), !0;
			}, A.semicolon = function() {
				this.eat(f.semi) || this.insertSemicolon() || this.unexpected();
			}, A.afterTrailingComma = function(e$2, t$2) {
				if (this.type === e$2) return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), t$2 || this.next(), !0;
			}, A.expect = function(e$2) {
				this.eat(e$2) || this.unexpected();
			}, A.unexpected = function(e$2) {
				this.raise(null != e$2 ? e$2 : this.start, "Unexpected token");
			};
			var acorn_DestructuringErrors = function() {
				this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
			};
			A.checkPatternErrors = function(e$2, t$2) {
				if (e$2) {
					e$2.trailingComma > -1 && this.raiseRecoverable(e$2.trailingComma, "Comma is not permitted after the rest element");
					var i$1 = t$2 ? e$2.parenthesizedAssign : e$2.parenthesizedBind;
					i$1 > -1 && this.raiseRecoverable(i$1, t$2 ? "Assigning to rvalue" : "Parenthesized pattern");
				}
			}, A.checkExpressionErrors = function(e$2, t$2) {
				if (!e$2) return !1;
				var i$1 = e$2.shorthandAssign, s$1 = e$2.doubleProto;
				if (!t$2) return i$1 >= 0 || s$1 >= 0;
				i$1 >= 0 && this.raise(i$1, "Shorthand property assignments are valid only in destructuring patterns"), s$1 >= 0 && this.raiseRecoverable(s$1, "Redefinition of __proto__ property");
			}, A.checkYieldAwaitInDefaultParams = function() {
				this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value");
			}, A.isSimpleAssignTarget = function(e$2) {
				return "ParenthesizedExpression" === e$2.type ? this.isSimpleAssignTarget(e$2.expression) : "Identifier" === e$2.type || "MemberExpression" === e$2.type;
			};
			var L = acorn_Parser.prototype;
			L.parseTopLevel = function(e$2) {
				var t$2 = Object.create(null);
				for (e$2.body || (e$2.body = []); this.type !== f.eof;) {
					var i$1 = this.parseStatement(null, !0, t$2);
					e$2.body.push(i$1);
				}
				if (this.inModule) for (var s$1 = 0, r$1 = Object.keys(this.undefinedExports); s$1 < r$1.length; s$1 += 1) {
					var n$1 = r$1[s$1];
					this.raiseRecoverable(this.undefinedExports[n$1].start, "Export '" + n$1 + "' is not defined");
				}
				return this.adaptDirectivePrologue(e$2.body), this.next(), e$2.sourceType = this.options.sourceType, this.finishNode(e$2, "Program");
			};
			var O = { kind: "loop" }, D = { kind: "switch" };
			L.isLet = function(e$2) {
				if (this.options.ecmaVersion < 6 || !this.isContextual("let")) return !1;
				v.lastIndex = this.pos;
				var t$2 = v.exec(this.input), i$1 = this.pos + t$2[0].length, s$1 = this.input.charCodeAt(i$1);
				if (91 === s$1 || 92 === s$1) return !0;
				if (e$2) return !1;
				if (123 === s$1 || s$1 > 55295 && s$1 < 56320) return !0;
				if (isIdentifierStart(s$1, !0)) {
					for (var r$1 = i$1 + 1; isIdentifierChar(s$1 = this.input.charCodeAt(r$1), !0);) ++r$1;
					if (92 === s$1 || s$1 > 55295 && s$1 < 56320) return !0;
					var n$1 = this.input.slice(i$1, r$1);
					if (!h.test(n$1)) return !0;
				}
				return !1;
			}, L.isAsyncFunction = function() {
				if (this.options.ecmaVersion < 8 || !this.isContextual("async")) return !1;
				v.lastIndex = this.pos;
				var e$2, t$2 = v.exec(this.input), i$1 = this.pos + t$2[0].length;
				return !(m.test(this.input.slice(this.pos, i$1)) || "function" !== this.input.slice(i$1, i$1 + 8) || i$1 + 8 !== this.input.length && (isIdentifierChar(e$2 = this.input.charCodeAt(i$1 + 8)) || e$2 > 55295 && e$2 < 56320));
			}, L.isUsingKeyword = function(e$2, t$2) {
				if (this.options.ecmaVersion < 17 || !this.isContextual(e$2 ? "await" : "using")) return !1;
				v.lastIndex = this.pos;
				var i$1 = v.exec(this.input), s$1 = this.pos + i$1[0].length;
				if (m.test(this.input.slice(this.pos, s$1))) return !1;
				if (e$2) {
					var r$1, n$1 = s$1 + 5;
					if ("using" !== this.input.slice(s$1, n$1) || n$1 === this.input.length || isIdentifierChar(r$1 = this.input.charCodeAt(n$1)) || r$1 > 55295 && r$1 < 56320) return !1;
					v.lastIndex = n$1;
					var a$1 = v.exec(this.input);
					if (a$1 && m.test(this.input.slice(n$1, n$1 + a$1[0].length))) return !1;
				}
				if (t$2) {
					var o$1, h$1 = s$1 + 2;
					if (!("of" !== this.input.slice(s$1, h$1) || h$1 !== this.input.length && (isIdentifierChar(o$1 = this.input.charCodeAt(h$1)) || o$1 > 55295 && o$1 < 56320))) return !1;
				}
				var c$1 = this.input.charCodeAt(s$1);
				return isIdentifierStart(c$1, !0) || 92 === c$1;
			}, L.isAwaitUsing = function(e$2) {
				return this.isUsingKeyword(!0, e$2);
			}, L.isUsing = function(e$2) {
				return this.isUsingKeyword(!1, e$2);
			}, L.parseStatement = function(e$2, t$2, i$1) {
				var s$1, r$1 = this.type, n$1 = this.startNode();
				switch (this.isLet(e$2) && (r$1 = f._var, s$1 = "let"), r$1) {
					case f._break:
					case f._continue: return this.parseBreakContinueStatement(n$1, r$1.keyword);
					case f._debugger: return this.parseDebuggerStatement(n$1);
					case f._do: return this.parseDoStatement(n$1);
					case f._for: return this.parseForStatement(n$1);
					case f._function: return e$2 && (this.strict || "if" !== e$2 && "label" !== e$2) && this.options.ecmaVersion >= 6 && this.unexpected(), this.parseFunctionStatement(n$1, !1, !e$2);
					case f._class: return e$2 && this.unexpected(), this.parseClass(n$1, !0);
					case f._if: return this.parseIfStatement(n$1);
					case f._return: return this.parseReturnStatement(n$1);
					case f._switch: return this.parseSwitchStatement(n$1);
					case f._throw: return this.parseThrowStatement(n$1);
					case f._try: return this.parseTryStatement(n$1);
					case f._const:
					case f._var: return s$1 = s$1 || this.value, e$2 && "var" !== s$1 && this.unexpected(), this.parseVarStatement(n$1, s$1);
					case f._while: return this.parseWhileStatement(n$1);
					case f._with: return this.parseWithStatement(n$1);
					case f.braceL: return this.parseBlock(!0, n$1);
					case f.semi: return this.parseEmptyStatement(n$1);
					case f._export:
					case f._import:
						if (this.options.ecmaVersion > 10 && r$1 === f._import) {
							v.lastIndex = this.pos;
							var a$1 = v.exec(this.input), o$1 = this.pos + a$1[0].length, h$1 = this.input.charCodeAt(o$1);
							if (40 === h$1 || 46 === h$1) return this.parseExpressionStatement(n$1, this.parseExpression());
						}
						return this.options.allowImportExportEverywhere || (t$2 || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")), r$1 === f._import ? this.parseImport(n$1) : this.parseExport(n$1, i$1);
					default:
						if (this.isAsyncFunction()) return e$2 && this.unexpected(), this.next(), this.parseFunctionStatement(n$1, !0, !e$2);
						var c$1 = this.isAwaitUsing(!1) ? "await using" : this.isUsing(!1) ? "using" : null;
						if (c$1) return t$2 && "script" === this.options.sourceType && this.raise(this.start, "Using declaration cannot appear in the top level when source type is `script`"), "await using" === c$1 && (this.canAwait || this.raise(this.start, "Await using cannot appear outside of async function"), this.next()), this.next(), this.parseVar(n$1, !1, c$1), this.semicolon(), this.finishNode(n$1, "VariableDeclaration");
						var p$1 = this.value, l$1 = this.parseExpression();
						return r$1 === f.name && "Identifier" === l$1.type && this.eat(f.colon) ? this.parseLabeledStatement(n$1, p$1, l$1, e$2) : this.parseExpressionStatement(n$1, l$1);
				}
			}, L.parseBreakContinueStatement = function(e$2, t$2) {
				var i$1 = "break" === t$2;
				this.next(), this.eat(f.semi) || this.insertSemicolon() ? e$2.label = null : this.type !== f.name ? this.unexpected() : (e$2.label = this.parseIdent(), this.semicolon());
				for (var s$1 = 0; s$1 < this.labels.length; ++s$1) {
					var r$1 = this.labels[s$1];
					if (null == e$2.label || r$1.name === e$2.label.name) {
						if (null != r$1.kind && (i$1 || "loop" === r$1.kind)) break;
						if (e$2.label && i$1) break;
					}
				}
				return s$1 === this.labels.length && this.raise(e$2.start, "Unsyntactic " + t$2), this.finishNode(e$2, i$1 ? "BreakStatement" : "ContinueStatement");
			}, L.parseDebuggerStatement = function(e$2) {
				return this.next(), this.semicolon(), this.finishNode(e$2, "DebuggerStatement");
			}, L.parseDoStatement = function(e$2) {
				return this.next(), this.labels.push(O), e$2.body = this.parseStatement("do"), this.labels.pop(), this.expect(f._while), e$2.test = this.parseParenExpression(), this.options.ecmaVersion >= 6 ? this.eat(f.semi) : this.semicolon(), this.finishNode(e$2, "DoWhileStatement");
			}, L.parseForStatement = function(e$2) {
				this.next();
				var t$2 = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
				if (this.labels.push(O), this.enterScope(0), this.expect(f.parenL), this.type === f.semi) return t$2 > -1 && this.unexpected(t$2), this.parseFor(e$2, null);
				var i$1 = this.isLet();
				if (this.type === f._var || this.type === f._const || i$1) {
					var s$1 = this.startNode(), r$1 = i$1 ? "let" : this.value;
					return this.next(), this.parseVar(s$1, !0, r$1), this.finishNode(s$1, "VariableDeclaration"), this.parseForAfterInit(e$2, s$1, t$2);
				}
				var n$1 = this.isContextual("let"), a$1 = !1, o$1 = this.isUsing(!0) ? "using" : this.isAwaitUsing(!0) ? "await using" : null;
				if (o$1) {
					var h$1 = this.startNode();
					return this.next(), "await using" === o$1 && this.next(), this.parseVar(h$1, !0, o$1), this.finishNode(h$1, "VariableDeclaration"), this.parseForAfterInit(e$2, h$1, t$2);
				}
				var c$1 = this.containsEsc, p$1 = new acorn_DestructuringErrors(), l$1 = this.start, u$1 = t$2 > -1 ? this.parseExprSubscripts(p$1, "await") : this.parseExpression(!0, p$1);
				return this.type === f._in || (a$1 = this.options.ecmaVersion >= 6 && this.isContextual("of")) ? (t$2 > -1 ? (this.type === f._in && this.unexpected(t$2), e$2.await = !0) : a$1 && this.options.ecmaVersion >= 8 && (u$1.start !== l$1 || c$1 || "Identifier" !== u$1.type || "async" !== u$1.name ? this.options.ecmaVersion >= 9 && (e$2.await = !1) : this.unexpected()), n$1 && a$1 && this.raise(u$1.start, "The left-hand side of a for-of loop may not start with 'let'."), this.toAssignable(u$1, !1, p$1), this.checkLValPattern(u$1), this.parseForIn(e$2, u$1)) : (this.checkExpressionErrors(p$1, !0), t$2 > -1 && this.unexpected(t$2), this.parseFor(e$2, u$1));
			}, L.parseForAfterInit = function(e$2, t$2, i$1) {
				return (this.type === f._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && 1 === t$2.declarations.length ? (this.options.ecmaVersion >= 9 && (this.type === f._in ? i$1 > -1 && this.unexpected(i$1) : e$2.await = i$1 > -1), this.parseForIn(e$2, t$2)) : (i$1 > -1 && this.unexpected(i$1), this.parseFor(e$2, t$2));
			}, L.parseFunctionStatement = function(e$2, t$2, i$1) {
				return this.next(), this.parseFunction(e$2, U | (i$1 ? 0 : M), !1, t$2);
			}, L.parseIfStatement = function(e$2) {
				return this.next(), e$2.test = this.parseParenExpression(), e$2.consequent = this.parseStatement("if"), e$2.alternate = this.eat(f._else) ? this.parseStatement("if") : null, this.finishNode(e$2, "IfStatement");
			}, L.parseReturnStatement = function(e$2) {
				return this.inFunction || this.options.allowReturnOutsideFunction || this.raise(this.start, "'return' outside of function"), this.next(), this.eat(f.semi) || this.insertSemicolon() ? e$2.argument = null : (e$2.argument = this.parseExpression(), this.semicolon()), this.finishNode(e$2, "ReturnStatement");
			}, L.parseSwitchStatement = function(e$2) {
				var t$2;
				this.next(), e$2.discriminant = this.parseParenExpression(), e$2.cases = [], this.expect(f.braceL), this.labels.push(D), this.enterScope(0);
				for (var i$1 = !1; this.type !== f.braceR;) if (this.type === f._case || this.type === f._default) {
					var s$1 = this.type === f._case;
					t$2 && this.finishNode(t$2, "SwitchCase"), e$2.cases.push(t$2 = this.startNode()), t$2.consequent = [], this.next(), s$1 ? t$2.test = this.parseExpression() : (i$1 && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), i$1 = !0, t$2.test = null), this.expect(f.colon);
				} else t$2 || this.unexpected(), t$2.consequent.push(this.parseStatement(null));
				return this.exitScope(), t$2 && this.finishNode(t$2, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(e$2, "SwitchStatement");
			}, L.parseThrowStatement = function(e$2) {
				return this.next(), m.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), e$2.argument = this.parseExpression(), this.semicolon(), this.finishNode(e$2, "ThrowStatement");
			};
			var V = [];
			L.parseCatchClauseParam = function() {
				var e$2 = this.parseBindingAtom(), t$2 = "Identifier" === e$2.type;
				return this.enterScope(t$2 ? 32 : 0), this.checkLValPattern(e$2, t$2 ? 4 : 2), this.expect(f.parenR), e$2;
			}, L.parseTryStatement = function(e$2) {
				if (this.next(), e$2.block = this.parseBlock(), e$2.handler = null, this.type === f._catch) {
					var t$2 = this.startNode();
					this.next(), this.eat(f.parenL) ? t$2.param = this.parseCatchClauseParam() : (this.options.ecmaVersion < 10 && this.unexpected(), t$2.param = null, this.enterScope(0)), t$2.body = this.parseBlock(!1), this.exitScope(), e$2.handler = this.finishNode(t$2, "CatchClause");
				}
				return e$2.finalizer = this.eat(f._finally) ? this.parseBlock() : null, e$2.handler || e$2.finalizer || this.raise(e$2.start, "Missing catch or finally clause"), this.finishNode(e$2, "TryStatement");
			}, L.parseVarStatement = function(e$2, t$2, i$1) {
				return this.next(), this.parseVar(e$2, !1, t$2, i$1), this.semicolon(), this.finishNode(e$2, "VariableDeclaration");
			}, L.parseWhileStatement = function(e$2) {
				return this.next(), e$2.test = this.parseParenExpression(), this.labels.push(O), e$2.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(e$2, "WhileStatement");
			}, L.parseWithStatement = function(e$2) {
				return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), e$2.object = this.parseParenExpression(), e$2.body = this.parseStatement("with"), this.finishNode(e$2, "WithStatement");
			}, L.parseEmptyStatement = function(e$2) {
				return this.next(), this.finishNode(e$2, "EmptyStatement");
			}, L.parseLabeledStatement = function(e$2, t$2, i$1, s$1) {
				for (var r$1 = 0, n$1 = this.labels; r$1 < n$1.length; r$1 += 1) n$1[r$1].name === t$2 && this.raise(i$1.start, "Label '" + t$2 + "' is already declared");
				for (var a$1 = this.type.isLoop ? "loop" : this.type === f._switch ? "switch" : null, o$1 = this.labels.length - 1; o$1 >= 0; o$1--) {
					var h$1 = this.labels[o$1];
					if (h$1.statementStart !== e$2.start) break;
					h$1.statementStart = this.start, h$1.kind = a$1;
				}
				return this.labels.push({
					name: t$2,
					kind: a$1,
					statementStart: this.start
				}), e$2.body = this.parseStatement(s$1 ? -1 === s$1.indexOf("label") ? s$1 + "label" : s$1 : "label"), this.labels.pop(), e$2.label = i$1, this.finishNode(e$2, "LabeledStatement");
			}, L.parseExpressionStatement = function(e$2, t$2) {
				return e$2.expression = t$2, this.semicolon(), this.finishNode(e$2, "ExpressionStatement");
			}, L.parseBlock = function(e$2, t$2, i$1) {
				for (void 0 === e$2 && (e$2 = !0), void 0 === t$2 && (t$2 = this.startNode()), t$2.body = [], this.expect(f.braceL), e$2 && this.enterScope(0); this.type !== f.braceR;) {
					var s$1 = this.parseStatement(null);
					t$2.body.push(s$1);
				}
				return i$1 && (this.strict = !1), this.next(), e$2 && this.exitScope(), this.finishNode(t$2, "BlockStatement");
			}, L.parseFor = function(e$2, t$2) {
				return e$2.init = t$2, this.expect(f.semi), e$2.test = this.type === f.semi ? null : this.parseExpression(), this.expect(f.semi), e$2.update = this.type === f.parenR ? null : this.parseExpression(), this.expect(f.parenR), e$2.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e$2, "ForStatement");
			}, L.parseForIn = function(e$2, t$2) {
				var i$1 = this.type === f._in;
				return this.next(), "VariableDeclaration" === t$2.type && null != t$2.declarations[0].init && (!i$1 || this.options.ecmaVersion < 8 || this.strict || "var" !== t$2.kind || "Identifier" !== t$2.declarations[0].id.type) && this.raise(t$2.start, (i$1 ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"), e$2.left = t$2, e$2.right = i$1 ? this.parseExpression() : this.parseMaybeAssign(), this.expect(f.parenR), e$2.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e$2, i$1 ? "ForInStatement" : "ForOfStatement");
			}, L.parseVar = function(e$2, t$2, i$1, s$1) {
				for (e$2.declarations = [], e$2.kind = i$1;;) {
					var r$1 = this.startNode();
					if (this.parseVarId(r$1, i$1), this.eat(f.eq) ? r$1.init = this.parseMaybeAssign(t$2) : s$1 || "const" !== i$1 || this.type === f._in || this.options.ecmaVersion >= 6 && this.isContextual("of") ? s$1 || "using" !== i$1 && "await using" !== i$1 || !(this.options.ecmaVersion >= 17) || this.type === f._in || this.isContextual("of") ? s$1 || "Identifier" === r$1.id.type || t$2 && (this.type === f._in || this.isContextual("of")) ? r$1.init = null : this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : this.raise(this.lastTokEnd, "Missing initializer in " + i$1 + " declaration") : this.unexpected(), e$2.declarations.push(this.finishNode(r$1, "VariableDeclarator")), !this.eat(f.comma)) break;
				}
				return e$2;
			}, L.parseVarId = function(e$2, t$2) {
				e$2.id = "using" === t$2 || "await using" === t$2 ? this.parseIdent() : this.parseBindingAtom(), this.checkLValPattern(e$2.id, "var" === t$2 ? 1 : 2, !1);
			};
			var U = 1, M = 2;
			function isPrivateNameConflicted(e$2, t$2) {
				var i$1 = t$2.key.name, s$1 = e$2[i$1], r$1 = "true";
				return "MethodDefinition" !== t$2.type || "get" !== t$2.kind && "set" !== t$2.kind || (r$1 = (t$2.static ? "s" : "i") + t$2.kind), "iget" === s$1 && "iset" === r$1 || "iset" === s$1 && "iget" === r$1 || "sget" === s$1 && "sset" === r$1 || "sset" === s$1 && "sget" === r$1 ? (e$2[i$1] = "true", !1) : !!s$1 || (e$2[i$1] = r$1, !1);
			}
			function checkKeyName(e$2, t$2) {
				var i$1 = e$2.computed, s$1 = e$2.key;
				return !i$1 && ("Identifier" === s$1.type && s$1.name === t$2 || "Literal" === s$1.type && s$1.value === t$2);
			}
			L.parseFunction = function(e$2, t$2, i$1, s$1, r$1) {
				this.initFunction(e$2), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !s$1) && (this.type === f.star && t$2 & M && this.unexpected(), e$2.generator = this.eat(f.star)), this.options.ecmaVersion >= 8 && (e$2.async = !!s$1), t$2 & U && (e$2.id = 4 & t$2 && this.type !== f.name ? null : this.parseIdent(), !e$2.id || t$2 & M || this.checkLValSimple(e$2.id, this.strict || e$2.generator || e$2.async ? this.treatFunctionsAsVar ? 1 : 2 : 3));
				var n$1 = this.yieldPos, a$1 = this.awaitPos, o$1 = this.awaitIdentPos;
				return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(functionFlags(e$2.async, e$2.generator)), t$2 & U || (e$2.id = this.type === f.name ? this.parseIdent() : null), this.parseFunctionParams(e$2), this.parseFunctionBody(e$2, i$1, !1, r$1), this.yieldPos = n$1, this.awaitPos = a$1, this.awaitIdentPos = o$1, this.finishNode(e$2, t$2 & U ? "FunctionDeclaration" : "FunctionExpression");
			}, L.parseFunctionParams = function(e$2) {
				this.expect(f.parenL), e$2.params = this.parseBindingList(f.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams();
			}, L.parseClass = function(e$2, t$2) {
				this.next();
				var i$1 = this.strict;
				this.strict = !0, this.parseClassId(e$2, t$2), this.parseClassSuper(e$2);
				var s$1 = this.enterClassBody(), r$1 = this.startNode(), n$1 = !1;
				for (r$1.body = [], this.expect(f.braceL); this.type !== f.braceR;) {
					var a$1 = this.parseClassElement(null !== e$2.superClass);
					a$1 && (r$1.body.push(a$1), "MethodDefinition" === a$1.type && "constructor" === a$1.kind ? (n$1 && this.raiseRecoverable(a$1.start, "Duplicate constructor in the same class"), n$1 = !0) : a$1.key && "PrivateIdentifier" === a$1.key.type && isPrivateNameConflicted(s$1, a$1) && this.raiseRecoverable(a$1.key.start, "Identifier '#" + a$1.key.name + "' has already been declared"));
				}
				return this.strict = i$1, this.next(), e$2.body = this.finishNode(r$1, "ClassBody"), this.exitClassBody(), this.finishNode(e$2, t$2 ? "ClassDeclaration" : "ClassExpression");
			}, L.parseClassElement = function(e$2) {
				if (this.eat(f.semi)) return null;
				var t$2 = this.options.ecmaVersion, i$1 = this.startNode(), s$1 = "", r$1 = !1, n$1 = !1, a$1 = "method", o$1 = !1;
				if (this.eatContextual("static")) {
					if (t$2 >= 13 && this.eat(f.braceL)) return this.parseClassStaticBlock(i$1), i$1;
					this.isClassElementNameStart() || this.type === f.star ? o$1 = !0 : s$1 = "static";
				}
				if (i$1.static = o$1, !s$1 && t$2 >= 8 && this.eatContextual("async") && (!this.isClassElementNameStart() && this.type !== f.star || this.canInsertSemicolon() ? s$1 = "async" : n$1 = !0), !s$1 && (t$2 >= 9 || !n$1) && this.eat(f.star) && (r$1 = !0), !s$1 && !n$1 && !r$1) {
					var h$1 = this.value;
					(this.eatContextual("get") || this.eatContextual("set")) && (this.isClassElementNameStart() ? a$1 = h$1 : s$1 = h$1);
				}
				if (s$1 ? (i$1.computed = !1, i$1.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc), i$1.key.name = s$1, this.finishNode(i$1.key, "Identifier")) : this.parseClassElementName(i$1), t$2 < 13 || this.type === f.parenL || "method" !== a$1 || r$1 || n$1) {
					var c$1 = !i$1.static && checkKeyName(i$1, "constructor"), p$1 = c$1 && e$2;
					c$1 && "method" !== a$1 && this.raise(i$1.key.start, "Constructor can't have get/set modifier"), i$1.kind = c$1 ? "constructor" : a$1, this.parseClassMethod(i$1, r$1, n$1, p$1);
				} else this.parseClassField(i$1);
				return i$1;
			}, L.isClassElementNameStart = function() {
				return this.type === f.name || this.type === f.privateId || this.type === f.num || this.type === f.string || this.type === f.bracketL || this.type.keyword;
			}, L.parseClassElementName = function(e$2) {
				this.type === f.privateId ? ("constructor" === this.value && this.raise(this.start, "Classes can't have an element named '#constructor'"), e$2.computed = !1, e$2.key = this.parsePrivateIdent()) : this.parsePropertyName(e$2);
			}, L.parseClassMethod = function(e$2, t$2, i$1, s$1) {
				var r$1 = e$2.key;
				"constructor" === e$2.kind ? (t$2 && this.raise(r$1.start, "Constructor can't be a generator"), i$1 && this.raise(r$1.start, "Constructor can't be an async method")) : e$2.static && checkKeyName(e$2, "prototype") && this.raise(r$1.start, "Classes may not have a static property named prototype");
				var n$1 = e$2.value = this.parseMethod(t$2, i$1, s$1);
				return "get" === e$2.kind && 0 !== n$1.params.length && this.raiseRecoverable(n$1.start, "getter should have no params"), "set" === e$2.kind && 1 !== n$1.params.length && this.raiseRecoverable(n$1.start, "setter should have exactly one param"), "set" === e$2.kind && "RestElement" === n$1.params[0].type && this.raiseRecoverable(n$1.params[0].start, "Setter cannot use rest params"), this.finishNode(e$2, "MethodDefinition");
			}, L.parseClassField = function(e$2) {
				return checkKeyName(e$2, "constructor") ? this.raise(e$2.key.start, "Classes can't have a field named 'constructor'") : e$2.static && checkKeyName(e$2, "prototype") && this.raise(e$2.key.start, "Classes can't have a static field named 'prototype'"), this.eat(f.eq) ? (this.enterScope(576), e$2.value = this.parseMaybeAssign(), this.exitScope()) : e$2.value = null, this.semicolon(), this.finishNode(e$2, "PropertyDefinition");
			}, L.parseClassStaticBlock = function(e$2) {
				e$2.body = [];
				var t$2 = this.labels;
				for (this.labels = [], this.enterScope(320); this.type !== f.braceR;) {
					var i$1 = this.parseStatement(null);
					e$2.body.push(i$1);
				}
				return this.next(), this.exitScope(), this.labels = t$2, this.finishNode(e$2, "StaticBlock");
			}, L.parseClassId = function(e$2, t$2) {
				this.type === f.name ? (e$2.id = this.parseIdent(), t$2 && this.checkLValSimple(e$2.id, 2, !1)) : (!0 === t$2 && this.unexpected(), e$2.id = null);
			}, L.parseClassSuper = function(e$2) {
				e$2.superClass = this.eat(f._extends) ? this.parseExprSubscripts(null, !1) : null;
			}, L.enterClassBody = function() {
				var e$2 = {
					declared: Object.create(null),
					used: []
				};
				return this.privateNameStack.push(e$2), e$2.declared;
			}, L.exitClassBody = function() {
				var e$2 = this.privateNameStack.pop(), t$2 = e$2.declared, i$1 = e$2.used;
				if (this.options.checkPrivateFields) for (var s$1 = this.privateNameStack.length, r$1 = 0 === s$1 ? null : this.privateNameStack[s$1 - 1], n$1 = 0; n$1 < i$1.length; ++n$1) {
					var a$1 = i$1[n$1];
					b(t$2, a$1.name) || (r$1 ? r$1.used.push(a$1) : this.raiseRecoverable(a$1.start, "Private field '#" + a$1.name + "' must be declared in an enclosing class"));
				}
			}, L.parseExportAllDeclaration = function(e$2, t$2) {
				return this.options.ecmaVersion >= 11 && (this.eatContextual("as") ? (e$2.exported = this.parseModuleExportName(), this.checkExport(t$2, e$2.exported, this.lastTokStart)) : e$2.exported = null), this.expectContextual("from"), this.type !== f.string && this.unexpected(), e$2.source = this.parseExprAtom(), this.options.ecmaVersion >= 16 && (e$2.attributes = this.parseWithClause()), this.semicolon(), this.finishNode(e$2, "ExportAllDeclaration");
			}, L.parseExport = function(e$2, t$2) {
				if (this.next(), this.eat(f.star)) return this.parseExportAllDeclaration(e$2, t$2);
				if (this.eat(f._default)) return this.checkExport(t$2, "default", this.lastTokStart), e$2.declaration = this.parseExportDefaultDeclaration(), this.finishNode(e$2, "ExportDefaultDeclaration");
				if (this.shouldParseExportStatement()) e$2.declaration = this.parseExportDeclaration(e$2), "VariableDeclaration" === e$2.declaration.type ? this.checkVariableExport(t$2, e$2.declaration.declarations) : this.checkExport(t$2, e$2.declaration.id, e$2.declaration.id.start), e$2.specifiers = [], e$2.source = null, this.options.ecmaVersion >= 16 && (e$2.attributes = []);
				else {
					if (e$2.declaration = null, e$2.specifiers = this.parseExportSpecifiers(t$2), this.eatContextual("from")) this.type !== f.string && this.unexpected(), e$2.source = this.parseExprAtom(), this.options.ecmaVersion >= 16 && (e$2.attributes = this.parseWithClause());
					else {
						for (var i$1 = 0, s$1 = e$2.specifiers; i$1 < s$1.length; i$1 += 1) {
							var r$1 = s$1[i$1];
							this.checkUnreserved(r$1.local), this.checkLocalExport(r$1.local), "Literal" === r$1.local.type && this.raise(r$1.local.start, "A string literal cannot be used as an exported binding without `from`.");
						}
						e$2.source = null, this.options.ecmaVersion >= 16 && (e$2.attributes = []);
					}
					this.semicolon();
				}
				return this.finishNode(e$2, "ExportNamedDeclaration");
			}, L.parseExportDeclaration = function(e$2) {
				return this.parseStatement(null);
			}, L.parseExportDefaultDeclaration = function() {
				var e$2;
				if (this.type === f._function || (e$2 = this.isAsyncFunction())) {
					var t$2 = this.startNode();
					return this.next(), e$2 && this.next(), this.parseFunction(t$2, 4 | U, !1, e$2);
				}
				if (this.type === f._class) {
					var i$1 = this.startNode();
					return this.parseClass(i$1, "nullableID");
				}
				var s$1 = this.parseMaybeAssign();
				return this.semicolon(), s$1;
			}, L.checkExport = function(e$2, t$2, i$1) {
				e$2 && ("string" != typeof t$2 && (t$2 = "Identifier" === t$2.type ? t$2.name : t$2.value), b(e$2, t$2) && this.raiseRecoverable(i$1, "Duplicate export '" + t$2 + "'"), e$2[t$2] = !0);
			}, L.checkPatternExport = function(e$2, t$2) {
				var i$1 = t$2.type;
				if ("Identifier" === i$1) this.checkExport(e$2, t$2, t$2.start);
				else if ("ObjectPattern" === i$1) for (var s$1 = 0, r$1 = t$2.properties; s$1 < r$1.length; s$1 += 1) {
					var n$1 = r$1[s$1];
					this.checkPatternExport(e$2, n$1);
				}
				else if ("ArrayPattern" === i$1) for (var a$1 = 0, o$1 = t$2.elements; a$1 < o$1.length; a$1 += 1) {
					var h$1 = o$1[a$1];
					h$1 && this.checkPatternExport(e$2, h$1);
				}
				else "Property" === i$1 ? this.checkPatternExport(e$2, t$2.value) : "AssignmentPattern" === i$1 ? this.checkPatternExport(e$2, t$2.left) : "RestElement" === i$1 && this.checkPatternExport(e$2, t$2.argument);
			}, L.checkVariableExport = function(e$2, t$2) {
				if (e$2) for (var i$1 = 0, s$1 = t$2; i$1 < s$1.length; i$1 += 1) {
					var r$1 = s$1[i$1];
					this.checkPatternExport(e$2, r$1.id);
				}
			}, L.shouldParseExportStatement = function() {
				return "var" === this.type.keyword || "const" === this.type.keyword || "class" === this.type.keyword || "function" === this.type.keyword || this.isLet() || this.isAsyncFunction();
			}, L.parseExportSpecifier = function(e$2) {
				var t$2 = this.startNode();
				return t$2.local = this.parseModuleExportName(), t$2.exported = this.eatContextual("as") ? this.parseModuleExportName() : t$2.local, this.checkExport(e$2, t$2.exported, t$2.exported.start), this.finishNode(t$2, "ExportSpecifier");
			}, L.parseExportSpecifiers = function(e$2) {
				var t$2 = [], i$1 = !0;
				for (this.expect(f.braceL); !this.eat(f.braceR);) {
					if (i$1) i$1 = !1;
					else if (this.expect(f.comma), this.afterTrailingComma(f.braceR)) break;
					t$2.push(this.parseExportSpecifier(e$2));
				}
				return t$2;
			}, L.parseImport = function(e$2) {
				return this.next(), this.type === f.string ? (e$2.specifiers = V, e$2.source = this.parseExprAtom()) : (e$2.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), e$2.source = this.type === f.string ? this.parseExprAtom() : this.unexpected()), this.options.ecmaVersion >= 16 && (e$2.attributes = this.parseWithClause()), this.semicolon(), this.finishNode(e$2, "ImportDeclaration");
			}, L.parseImportSpecifier = function() {
				var e$2 = this.startNode();
				return e$2.imported = this.parseModuleExportName(), this.eatContextual("as") ? e$2.local = this.parseIdent() : (this.checkUnreserved(e$2.imported), e$2.local = e$2.imported), this.checkLValSimple(e$2.local, 2), this.finishNode(e$2, "ImportSpecifier");
			}, L.parseImportDefaultSpecifier = function() {
				var e$2 = this.startNode();
				return e$2.local = this.parseIdent(), this.checkLValSimple(e$2.local, 2), this.finishNode(e$2, "ImportDefaultSpecifier");
			}, L.parseImportNamespaceSpecifier = function() {
				var e$2 = this.startNode();
				return this.next(), this.expectContextual("as"), e$2.local = this.parseIdent(), this.checkLValSimple(e$2.local, 2), this.finishNode(e$2, "ImportNamespaceSpecifier");
			}, L.parseImportSpecifiers = function() {
				var e$2 = [], t$2 = !0;
				if (this.type === f.name && (e$2.push(this.parseImportDefaultSpecifier()), !this.eat(f.comma))) return e$2;
				if (this.type === f.star) return e$2.push(this.parseImportNamespaceSpecifier()), e$2;
				for (this.expect(f.braceL); !this.eat(f.braceR);) {
					if (t$2) t$2 = !1;
					else if (this.expect(f.comma), this.afterTrailingComma(f.braceR)) break;
					e$2.push(this.parseImportSpecifier());
				}
				return e$2;
			}, L.parseWithClause = function() {
				var e$2 = [];
				if (!this.eat(f._with)) return e$2;
				this.expect(f.braceL);
				for (var t$2 = {}, i$1 = !0; !this.eat(f.braceR);) {
					if (i$1) i$1 = !1;
					else if (this.expect(f.comma), this.afterTrailingComma(f.braceR)) break;
					var s$1 = this.parseImportAttribute(), r$1 = "Identifier" === s$1.key.type ? s$1.key.name : s$1.key.value;
					b(t$2, r$1) && this.raiseRecoverable(s$1.key.start, "Duplicate attribute key '" + r$1 + "'"), t$2[r$1] = !0, e$2.push(s$1);
				}
				return e$2;
			}, L.parseImportAttribute = function() {
				var e$2 = this.startNode();
				return e$2.key = this.type === f.string ? this.parseExprAtom() : this.parseIdent("never" !== this.options.allowReserved), this.expect(f.colon), this.type !== f.string && this.unexpected(), e$2.value = this.parseExprAtom(), this.finishNode(e$2, "ImportAttribute");
			}, L.parseModuleExportName = function() {
				if (this.options.ecmaVersion >= 13 && this.type === f.string) {
					var e$2 = this.parseLiteral(this.value);
					return w.test(e$2.value) && this.raise(e$2.start, "An export name cannot include a lone surrogate."), e$2;
				}
				return this.parseIdent(!0);
			}, L.adaptDirectivePrologue = function(e$2) {
				for (var t$2 = 0; t$2 < e$2.length && this.isDirectiveCandidate(e$2[t$2]); ++t$2) e$2[t$2].directive = e$2[t$2].expression.raw.slice(1, -1);
			}, L.isDirectiveCandidate = function(e$2) {
				return this.options.ecmaVersion >= 5 && "ExpressionStatement" === e$2.type && "Literal" === e$2.expression.type && "string" == typeof e$2.expression.value && ("\"" === this.input[e$2.start] || "'" === this.input[e$2.start]);
			};
			var j = acorn_Parser.prototype;
			j.toAssignable = function(e$2, t$2, i$1) {
				if (this.options.ecmaVersion >= 6 && e$2) switch (e$2.type) {
					case "Identifier":
						this.inAsync && "await" === e$2.name && this.raise(e$2.start, "Cannot use 'await' as identifier inside an async function");
						break;
					case "ObjectPattern":
					case "ArrayPattern":
					case "AssignmentPattern":
					case "RestElement": break;
					case "ObjectExpression":
						e$2.type = "ObjectPattern", i$1 && this.checkPatternErrors(i$1, !0);
						for (var s$1 = 0, r$1 = e$2.properties; s$1 < r$1.length; s$1 += 1) {
							var n$1 = r$1[s$1];
							this.toAssignable(n$1, t$2), "RestElement" !== n$1.type || "ArrayPattern" !== n$1.argument.type && "ObjectPattern" !== n$1.argument.type || this.raise(n$1.argument.start, "Unexpected token");
						}
						break;
					case "Property":
						"init" !== e$2.kind && this.raise(e$2.key.start, "Object pattern can't contain getter or setter"), this.toAssignable(e$2.value, t$2);
						break;
					case "ArrayExpression":
						e$2.type = "ArrayPattern", i$1 && this.checkPatternErrors(i$1, !0), this.toAssignableList(e$2.elements, t$2);
						break;
					case "SpreadElement":
						e$2.type = "RestElement", this.toAssignable(e$2.argument, t$2), "AssignmentPattern" === e$2.argument.type && this.raise(e$2.argument.start, "Rest elements cannot have a default value");
						break;
					case "AssignmentExpression":
						"=" !== e$2.operator && this.raise(e$2.left.end, "Only '=' operator can be used for specifying default value."), e$2.type = "AssignmentPattern", delete e$2.operator, this.toAssignable(e$2.left, t$2);
						break;
					case "ParenthesizedExpression":
						this.toAssignable(e$2.expression, t$2, i$1);
						break;
					case "ChainExpression":
						this.raiseRecoverable(e$2.start, "Optional chaining cannot appear in left-hand side");
						break;
					case "MemberExpression": if (!t$2) break;
					default: this.raise(e$2.start, "Assigning to rvalue");
				}
				else i$1 && this.checkPatternErrors(i$1, !0);
				return e$2;
			}, j.toAssignableList = function(e$2, t$2) {
				for (var i$1 = e$2.length, s$1 = 0; s$1 < i$1; s$1++) {
					var r$1 = e$2[s$1];
					r$1 && this.toAssignable(r$1, t$2);
				}
				if (i$1) {
					var n$1 = e$2[i$1 - 1];
					6 === this.options.ecmaVersion && t$2 && n$1 && "RestElement" === n$1.type && "Identifier" !== n$1.argument.type && this.unexpected(n$1.argument.start);
				}
				return e$2;
			}, j.parseSpread = function(e$2) {
				var t$2 = this.startNode();
				return this.next(), t$2.argument = this.parseMaybeAssign(!1, e$2), this.finishNode(t$2, "SpreadElement");
			}, j.parseRestBinding = function() {
				var e$2 = this.startNode();
				return this.next(), 6 === this.options.ecmaVersion && this.type !== f.name && this.unexpected(), e$2.argument = this.parseBindingAtom(), this.finishNode(e$2, "RestElement");
			}, j.parseBindingAtom = function() {
				if (this.options.ecmaVersion >= 6) switch (this.type) {
					case f.bracketL:
						var e$2 = this.startNode();
						return this.next(), e$2.elements = this.parseBindingList(f.bracketR, !0, !0), this.finishNode(e$2, "ArrayPattern");
					case f.braceL: return this.parseObj(!0);
				}
				return this.parseIdent();
			}, j.parseBindingList = function(e$2, t$2, i$1, s$1) {
				for (var r$1 = [], n$1 = !0; !this.eat(e$2);) if (n$1 ? n$1 = !1 : this.expect(f.comma), t$2 && this.type === f.comma) r$1.push(null);
				else {
					if (i$1 && this.afterTrailingComma(e$2)) break;
					if (this.type === f.ellipsis) {
						var a$1 = this.parseRestBinding();
						this.parseBindingListItem(a$1), r$1.push(a$1), this.type === f.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.expect(e$2);
						break;
					}
					r$1.push(this.parseAssignableListItem(s$1));
				}
				return r$1;
			}, j.parseAssignableListItem = function(e$2) {
				var t$2 = this.parseMaybeDefault(this.start, this.startLoc);
				return this.parseBindingListItem(t$2), t$2;
			}, j.parseBindingListItem = function(e$2) {
				return e$2;
			}, j.parseMaybeDefault = function(e$2, t$2, i$1) {
				if (i$1 = i$1 || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(f.eq)) return i$1;
				var s$1 = this.startNodeAt(e$2, t$2);
				return s$1.left = i$1, s$1.right = this.parseMaybeAssign(), this.finishNode(s$1, "AssignmentPattern");
			}, j.checkLValSimple = function(e$2, t$2, i$1) {
				void 0 === t$2 && (t$2 = 0);
				var s$1 = 0 !== t$2;
				switch (e$2.type) {
					case "Identifier":
						this.strict && this.reservedWordsStrictBind.test(e$2.name) && this.raiseRecoverable(e$2.start, (s$1 ? "Binding " : "Assigning to ") + e$2.name + " in strict mode"), s$1 && (2 === t$2 && "let" === e$2.name && this.raiseRecoverable(e$2.start, "let is disallowed as a lexically bound name"), i$1 && (b(i$1, e$2.name) && this.raiseRecoverable(e$2.start, "Argument name clash"), i$1[e$2.name] = !0), 5 !== t$2 && this.declareName(e$2.name, t$2, e$2.start));
						break;
					case "ChainExpression":
						this.raiseRecoverable(e$2.start, "Optional chaining cannot appear in left-hand side");
						break;
					case "MemberExpression":
						s$1 && this.raiseRecoverable(e$2.start, "Binding member expression");
						break;
					case "ParenthesizedExpression": return s$1 && this.raiseRecoverable(e$2.start, "Binding parenthesized expression"), this.checkLValSimple(e$2.expression, t$2, i$1);
					default: this.raise(e$2.start, (s$1 ? "Binding" : "Assigning to") + " rvalue");
				}
			}, j.checkLValPattern = function(e$2, t$2, i$1) {
				switch (void 0 === t$2 && (t$2 = 0), e$2.type) {
					case "ObjectPattern":
						for (var s$1 = 0, r$1 = e$2.properties; s$1 < r$1.length; s$1 += 1) {
							var n$1 = r$1[s$1];
							this.checkLValInnerPattern(n$1, t$2, i$1);
						}
						break;
					case "ArrayPattern":
						for (var a$1 = 0, o$1 = e$2.elements; a$1 < o$1.length; a$1 += 1) {
							var h$1 = o$1[a$1];
							h$1 && this.checkLValInnerPattern(h$1, t$2, i$1);
						}
						break;
					default: this.checkLValSimple(e$2, t$2, i$1);
				}
			}, j.checkLValInnerPattern = function(e$2, t$2, i$1) {
				switch (void 0 === t$2 && (t$2 = 0), e$2.type) {
					case "Property":
						this.checkLValInnerPattern(e$2.value, t$2, i$1);
						break;
					case "AssignmentPattern":
						this.checkLValPattern(e$2.left, t$2, i$1);
						break;
					case "RestElement":
						this.checkLValPattern(e$2.argument, t$2, i$1);
						break;
					default: this.checkLValPattern(e$2, t$2, i$1);
				}
			};
			var acorn_TokContext = function(e$2, t$2, i$1, s$1, r$1) {
				this.token = e$2, this.isExpr = !!t$2, this.preserveSpace = !!i$1, this.override = s$1, this.generator = !!r$1;
			}, F = {
				b_stat: new acorn_TokContext("{", !1),
				b_expr: new acorn_TokContext("{", !0),
				b_tmpl: new acorn_TokContext("${", !1),
				p_stat: new acorn_TokContext("(", !1),
				p_expr: new acorn_TokContext("(", !0),
				q_tmpl: new acorn_TokContext("`", !0, !0, function(e$2) {
					return e$2.tryReadTemplateToken();
				}),
				f_stat: new acorn_TokContext("function", !1),
				f_expr: new acorn_TokContext("function", !0),
				f_expr_gen: new acorn_TokContext("function", !0, !1, null, !0),
				f_gen: new acorn_TokContext("function", !1, !1, null, !0)
			}, B = acorn_Parser.prototype;
			B.initialContext = function() {
				return [F.b_stat];
			}, B.curContext = function() {
				return this.context[this.context.length - 1];
			}, B.braceIsBlock = function(e$2) {
				var t$2 = this.curContext();
				return t$2 === F.f_expr || t$2 === F.f_stat || (e$2 !== f.colon || t$2 !== F.b_stat && t$2 !== F.b_expr ? e$2 === f._return || e$2 === f.name && this.exprAllowed ? m.test(this.input.slice(this.lastTokEnd, this.start)) : e$2 === f._else || e$2 === f.semi || e$2 === f.eof || e$2 === f.parenR || e$2 === f.arrow || (e$2 === f.braceL ? t$2 === F.b_stat : e$2 !== f._var && e$2 !== f._const && e$2 !== f.name && !this.exprAllowed) : !t$2.isExpr);
			}, B.inGeneratorContext = function() {
				for (var e$2 = this.context.length - 1; e$2 >= 1; e$2--) {
					var t$2 = this.context[e$2];
					if ("function" === t$2.token) return t$2.generator;
				}
				return !1;
			}, B.updateContext = function(e$2) {
				var t$2, i$1 = this.type;
				i$1.keyword && e$2 === f.dot ? this.exprAllowed = !1 : (t$2 = i$1.updateContext) ? t$2.call(this, e$2) : this.exprAllowed = i$1.beforeExpr;
			}, B.overrideContext = function(e$2) {
				this.curContext() !== e$2 && (this.context[this.context.length - 1] = e$2);
			}, f.parenR.updateContext = f.braceR.updateContext = function() {
				if (1 !== this.context.length) {
					var e$2 = this.context.pop();
					e$2 === F.b_stat && "function" === this.curContext().token && (e$2 = this.context.pop()), this.exprAllowed = !e$2.isExpr;
				} else this.exprAllowed = !0;
			}, f.braceL.updateContext = function(e$2) {
				this.context.push(this.braceIsBlock(e$2) ? F.b_stat : F.b_expr), this.exprAllowed = !0;
			}, f.dollarBraceL.updateContext = function() {
				this.context.push(F.b_tmpl), this.exprAllowed = !0;
			}, f.parenL.updateContext = function(e$2) {
				var t$2 = e$2 === f._if || e$2 === f._for || e$2 === f._with || e$2 === f._while;
				this.context.push(t$2 ? F.p_stat : F.p_expr), this.exprAllowed = !0;
			}, f.incDec.updateContext = function() {}, f._function.updateContext = f._class.updateContext = function(e$2) {
				!e$2.beforeExpr || e$2 === f._else || e$2 === f.semi && this.curContext() !== F.p_stat || e$2 === f._return && m.test(this.input.slice(this.lastTokEnd, this.start)) || (e$2 === f.colon || e$2 === f.braceL) && this.curContext() === F.b_stat ? this.context.push(F.f_stat) : this.context.push(F.f_expr), this.exprAllowed = !1;
			}, f.colon.updateContext = function() {
				"function" === this.curContext().token && this.context.pop(), this.exprAllowed = !0;
			}, f.backQuote.updateContext = function() {
				this.curContext() === F.q_tmpl ? this.context.pop() : this.context.push(F.q_tmpl), this.exprAllowed = !1;
			}, f.star.updateContext = function(e$2) {
				if (e$2 === f._function) {
					var t$2 = this.context.length - 1;
					this.context[t$2] === F.f_expr ? this.context[t$2] = F.f_expr_gen : this.context[t$2] = F.f_gen;
				}
				this.exprAllowed = !0;
			}, f.name.updateContext = function(e$2) {
				var t$2 = !1;
				this.options.ecmaVersion >= 6 && e$2 !== f.dot && ("of" === this.value && !this.exprAllowed || "yield" === this.value && this.inGeneratorContext()) && (t$2 = !0), this.exprAllowed = t$2;
			};
			var $ = acorn_Parser.prototype;
			function isLocalVariableAccess(e$2) {
				return "Identifier" === e$2.type || "ParenthesizedExpression" === e$2.type && isLocalVariableAccess(e$2.expression);
			}
			function isPrivateFieldAccess(e$2) {
				return "MemberExpression" === e$2.type && "PrivateIdentifier" === e$2.property.type || "ChainExpression" === e$2.type && isPrivateFieldAccess(e$2.expression) || "ParenthesizedExpression" === e$2.type && isPrivateFieldAccess(e$2.expression);
			}
			$.checkPropClash = function(e$2, t$2, i$1) {
				if (!(this.options.ecmaVersion >= 9 && "SpreadElement" === e$2.type || this.options.ecmaVersion >= 6 && (e$2.computed || e$2.method || e$2.shorthand))) {
					var s$1, r$1 = e$2.key;
					switch (r$1.type) {
						case "Identifier":
							s$1 = r$1.name;
							break;
						case "Literal":
							s$1 = String(r$1.value);
							break;
						default: return;
					}
					var n$1 = e$2.kind;
					if (this.options.ecmaVersion >= 6) "__proto__" === s$1 && "init" === n$1 && (t$2.proto && (i$1 ? i$1.doubleProto < 0 && (i$1.doubleProto = r$1.start) : this.raiseRecoverable(r$1.start, "Redefinition of __proto__ property")), t$2.proto = !0);
					else {
						var a$1 = t$2[s$1 = "$" + s$1];
						if (a$1) ("init" === n$1 ? this.strict && a$1.init || a$1.get || a$1.set : a$1.init || a$1[n$1]) && this.raiseRecoverable(r$1.start, "Redefinition of property");
						else a$1 = t$2[s$1] = {
							init: !1,
							get: !1,
							set: !1
						};
						a$1[n$1] = !0;
					}
				}
			}, $.parseExpression = function(e$2, t$2) {
				var i$1 = this.start, s$1 = this.startLoc, r$1 = this.parseMaybeAssign(e$2, t$2);
				if (this.type === f.comma) {
					var n$1 = this.startNodeAt(i$1, s$1);
					for (n$1.expressions = [r$1]; this.eat(f.comma);) n$1.expressions.push(this.parseMaybeAssign(e$2, t$2));
					return this.finishNode(n$1, "SequenceExpression");
				}
				return r$1;
			}, $.parseMaybeAssign = function(e$2, t$2, i$1) {
				if (this.isContextual("yield")) {
					if (this.inGenerator) return this.parseYield(e$2);
					this.exprAllowed = !1;
				}
				var s$1 = !1, r$1 = -1, n$1 = -1, a$1 = -1;
				t$2 ? (r$1 = t$2.parenthesizedAssign, n$1 = t$2.trailingComma, a$1 = t$2.doubleProto, t$2.parenthesizedAssign = t$2.trailingComma = -1) : (t$2 = new acorn_DestructuringErrors(), s$1 = !0);
				var o$1 = this.start, h$1 = this.startLoc;
				this.type !== f.parenL && this.type !== f.name || (this.potentialArrowAt = this.start, this.potentialArrowInForAwait = "await" === e$2);
				var c$1 = this.parseMaybeConditional(e$2, t$2);
				if (i$1 && (c$1 = i$1.call(this, c$1, o$1, h$1)), this.type.isAssign) {
					var p$1 = this.startNodeAt(o$1, h$1);
					return p$1.operator = this.value, this.type === f.eq && (c$1 = this.toAssignable(c$1, !1, t$2)), s$1 || (t$2.parenthesizedAssign = t$2.trailingComma = t$2.doubleProto = -1), t$2.shorthandAssign >= c$1.start && (t$2.shorthandAssign = -1), this.type === f.eq ? this.checkLValPattern(c$1) : this.checkLValSimple(c$1), p$1.left = c$1, this.next(), p$1.right = this.parseMaybeAssign(e$2), a$1 > -1 && (t$2.doubleProto = a$1), this.finishNode(p$1, "AssignmentExpression");
				}
				return s$1 && this.checkExpressionErrors(t$2, !0), r$1 > -1 && (t$2.parenthesizedAssign = r$1), n$1 > -1 && (t$2.trailingComma = n$1), c$1;
			}, $.parseMaybeConditional = function(e$2, t$2) {
				var i$1 = this.start, s$1 = this.startLoc, r$1 = this.parseExprOps(e$2, t$2);
				if (this.checkExpressionErrors(t$2)) return r$1;
				if (this.eat(f.question)) {
					var n$1 = this.startNodeAt(i$1, s$1);
					return n$1.test = r$1, n$1.consequent = this.parseMaybeAssign(), this.expect(f.colon), n$1.alternate = this.parseMaybeAssign(e$2), this.finishNode(n$1, "ConditionalExpression");
				}
				return r$1;
			}, $.parseExprOps = function(e$2, t$2) {
				var i$1 = this.start, s$1 = this.startLoc, r$1 = this.parseMaybeUnary(t$2, !1, !1, e$2);
				return this.checkExpressionErrors(t$2) || r$1.start === i$1 && "ArrowFunctionExpression" === r$1.type ? r$1 : this.parseExprOp(r$1, i$1, s$1, -1, e$2);
			}, $.parseExprOp = function(e$2, t$2, i$1, s$1, r$1) {
				var n$1 = this.type.binop;
				if (null != n$1 && (!r$1 || this.type !== f._in) && n$1 > s$1) {
					var a$1 = this.type === f.logicalOR || this.type === f.logicalAND, o$1 = this.type === f.coalesce;
					o$1 && (n$1 = f.logicalAND.binop);
					var h$1 = this.value;
					this.next();
					var c$1 = this.start, p$1 = this.startLoc, l$1 = this.parseExprOp(this.parseMaybeUnary(null, !1, !1, r$1), c$1, p$1, n$1, r$1), u$1 = this.buildBinary(t$2, i$1, e$2, l$1, h$1, a$1 || o$1);
					return (a$1 && this.type === f.coalesce || o$1 && (this.type === f.logicalOR || this.type === f.logicalAND)) && this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses"), this.parseExprOp(u$1, t$2, i$1, s$1, r$1);
				}
				return e$2;
			}, $.buildBinary = function(e$2, t$2, i$1, s$1, r$1, n$1) {
				"PrivateIdentifier" === s$1.type && this.raise(s$1.start, "Private identifier can only be left side of binary expression");
				var a$1 = this.startNodeAt(e$2, t$2);
				return a$1.left = i$1, a$1.operator = r$1, a$1.right = s$1, this.finishNode(a$1, n$1 ? "LogicalExpression" : "BinaryExpression");
			}, $.parseMaybeUnary = function(e$2, t$2, i$1, s$1) {
				var r$1, n$1 = this.start, a$1 = this.startLoc;
				if (this.isContextual("await") && this.canAwait) r$1 = this.parseAwait(s$1), t$2 = !0;
				else if (this.type.prefix) {
					var o$1 = this.startNode(), h$1 = this.type === f.incDec;
					o$1.operator = this.value, o$1.prefix = !0, this.next(), o$1.argument = this.parseMaybeUnary(null, !0, h$1, s$1), this.checkExpressionErrors(e$2, !0), h$1 ? this.checkLValSimple(o$1.argument) : this.strict && "delete" === o$1.operator && isLocalVariableAccess(o$1.argument) ? this.raiseRecoverable(o$1.start, "Deleting local variable in strict mode") : "delete" === o$1.operator && isPrivateFieldAccess(o$1.argument) ? this.raiseRecoverable(o$1.start, "Private fields can not be deleted") : t$2 = !0, r$1 = this.finishNode(o$1, h$1 ? "UpdateExpression" : "UnaryExpression");
				} else if (t$2 || this.type !== f.privateId) {
					if (r$1 = this.parseExprSubscripts(e$2, s$1), this.checkExpressionErrors(e$2)) return r$1;
					for (; this.type.postfix && !this.canInsertSemicolon();) {
						var c$1 = this.startNodeAt(n$1, a$1);
						c$1.operator = this.value, c$1.prefix = !1, c$1.argument = r$1, this.checkLValSimple(r$1), this.next(), r$1 = this.finishNode(c$1, "UpdateExpression");
					}
				} else (s$1 || 0 === this.privateNameStack.length) && this.options.checkPrivateFields && this.unexpected(), r$1 = this.parsePrivateIdent(), this.type !== f._in && this.unexpected();
				return i$1 || !this.eat(f.starstar) ? r$1 : t$2 ? void this.unexpected(this.lastTokStart) : this.buildBinary(n$1, a$1, r$1, this.parseMaybeUnary(null, !1, !1, s$1), "**", !1);
			}, $.parseExprSubscripts = function(e$2, t$2) {
				var i$1 = this.start, s$1 = this.startLoc, r$1 = this.parseExprAtom(e$2, t$2);
				if ("ArrowFunctionExpression" === r$1.type && ")" !== this.input.slice(this.lastTokStart, this.lastTokEnd)) return r$1;
				var n$1 = this.parseSubscripts(r$1, i$1, s$1, !1, t$2);
				return e$2 && "MemberExpression" === n$1.type && (e$2.parenthesizedAssign >= n$1.start && (e$2.parenthesizedAssign = -1), e$2.parenthesizedBind >= n$1.start && (e$2.parenthesizedBind = -1), e$2.trailingComma >= n$1.start && (e$2.trailingComma = -1)), n$1;
			}, $.parseSubscripts = function(e$2, t$2, i$1, s$1, r$1) {
				for (var n$1 = this.options.ecmaVersion >= 8 && "Identifier" === e$2.type && "async" === e$2.name && this.lastTokEnd === e$2.end && !this.canInsertSemicolon() && e$2.end - e$2.start === 5 && this.potentialArrowAt === e$2.start, a$1 = !1;;) {
					var o$1 = this.parseSubscript(e$2, t$2, i$1, s$1, n$1, a$1, r$1);
					if (o$1.optional && (a$1 = !0), o$1 === e$2 || "ArrowFunctionExpression" === o$1.type) {
						if (a$1) {
							var h$1 = this.startNodeAt(t$2, i$1);
							h$1.expression = o$1, o$1 = this.finishNode(h$1, "ChainExpression");
						}
						return o$1;
					}
					e$2 = o$1;
				}
			}, $.shouldParseAsyncArrow = function() {
				return !this.canInsertSemicolon() && this.eat(f.arrow);
			}, $.parseSubscriptAsyncArrow = function(e$2, t$2, i$1, s$1) {
				return this.parseArrowExpression(this.startNodeAt(e$2, t$2), i$1, !0, s$1);
			}, $.parseSubscript = function(e$2, t$2, i$1, s$1, r$1, n$1, a$1) {
				var o$1 = this.options.ecmaVersion >= 11, h$1 = o$1 && this.eat(f.questionDot);
				s$1 && h$1 && this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
				var c$1 = this.eat(f.bracketL);
				if (c$1 || h$1 && this.type !== f.parenL && this.type !== f.backQuote || this.eat(f.dot)) {
					var p$1 = this.startNodeAt(t$2, i$1);
					p$1.object = e$2, c$1 ? (p$1.property = this.parseExpression(), this.expect(f.bracketR)) : this.type === f.privateId && "Super" !== e$2.type ? p$1.property = this.parsePrivateIdent() : p$1.property = this.parseIdent("never" !== this.options.allowReserved), p$1.computed = !!c$1, o$1 && (p$1.optional = h$1), e$2 = this.finishNode(p$1, "MemberExpression");
				} else if (!s$1 && this.eat(f.parenL)) {
					var l$1 = new acorn_DestructuringErrors(), u$1 = this.yieldPos, d$1 = this.awaitPos, m$1 = this.awaitIdentPos;
					this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
					var g$1 = this.parseExprList(f.parenR, this.options.ecmaVersion >= 8, !1, l$1);
					if (r$1 && !h$1 && this.shouldParseAsyncArrow()) return this.checkPatternErrors(l$1, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0 && this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"), this.yieldPos = u$1, this.awaitPos = d$1, this.awaitIdentPos = m$1, this.parseSubscriptAsyncArrow(t$2, i$1, g$1, a$1);
					this.checkExpressionErrors(l$1, !0), this.yieldPos = u$1 || this.yieldPos, this.awaitPos = d$1 || this.awaitPos, this.awaitIdentPos = m$1 || this.awaitIdentPos;
					var x$1 = this.startNodeAt(t$2, i$1);
					x$1.callee = e$2, x$1.arguments = g$1, o$1 && (x$1.optional = h$1), e$2 = this.finishNode(x$1, "CallExpression");
				} else if (this.type === f.backQuote) {
					(h$1 || n$1) && this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
					var v$1 = this.startNodeAt(t$2, i$1);
					v$1.tag = e$2, v$1.quasi = this.parseTemplate({ isTagged: !0 }), e$2 = this.finishNode(v$1, "TaggedTemplateExpression");
				}
				return e$2;
			}, $.parseExprAtom = function(e$2, t$2, i$1) {
				this.type === f.slash && this.readRegexp();
				var s$1, r$1 = this.potentialArrowAt === this.start;
				switch (this.type) {
					case f._super: return this.allowSuper || this.raise(this.start, "'super' keyword outside a method"), s$1 = this.startNode(), this.next(), this.type !== f.parenL || this.allowDirectSuper || this.raise(s$1.start, "super() call outside constructor of a subclass"), this.type !== f.dot && this.type !== f.bracketL && this.type !== f.parenL && this.unexpected(), this.finishNode(s$1, "Super");
					case f._this: return s$1 = this.startNode(), this.next(), this.finishNode(s$1, "ThisExpression");
					case f.name:
						var n$1 = this.start, a$1 = this.startLoc, o$1 = this.containsEsc, h$1 = this.parseIdent(!1);
						if (this.options.ecmaVersion >= 8 && !o$1 && "async" === h$1.name && !this.canInsertSemicolon() && this.eat(f._function)) return this.overrideContext(F.f_expr), this.parseFunction(this.startNodeAt(n$1, a$1), 0, !1, !0, t$2);
						if (r$1 && !this.canInsertSemicolon()) {
							if (this.eat(f.arrow)) return this.parseArrowExpression(this.startNodeAt(n$1, a$1), [h$1], !1, t$2);
							if (this.options.ecmaVersion >= 8 && "async" === h$1.name && this.type === f.name && !o$1 && (!this.potentialArrowInForAwait || "of" !== this.value || this.containsEsc)) return h$1 = this.parseIdent(!1), !this.canInsertSemicolon() && this.eat(f.arrow) || this.unexpected(), this.parseArrowExpression(this.startNodeAt(n$1, a$1), [h$1], !0, t$2);
						}
						return h$1;
					case f.regexp:
						var c$1 = this.value;
						return (s$1 = this.parseLiteral(c$1.value)).regex = {
							pattern: c$1.pattern,
							flags: c$1.flags
						}, s$1;
					case f.num:
					case f.string: return this.parseLiteral(this.value);
					case f._null:
					case f._true:
					case f._false: return (s$1 = this.startNode()).value = this.type === f._null ? null : this.type === f._true, s$1.raw = this.type.keyword, this.next(), this.finishNode(s$1, "Literal");
					case f.parenL:
						var p$1 = this.start, l$1 = this.parseParenAndDistinguishExpression(r$1, t$2);
						return e$2 && (e$2.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(l$1) && (e$2.parenthesizedAssign = p$1), e$2.parenthesizedBind < 0 && (e$2.parenthesizedBind = p$1)), l$1;
					case f.bracketL: return s$1 = this.startNode(), this.next(), s$1.elements = this.parseExprList(f.bracketR, !0, !0, e$2), this.finishNode(s$1, "ArrayExpression");
					case f.braceL: return this.overrideContext(F.b_expr), this.parseObj(!1, e$2);
					case f._function: return s$1 = this.startNode(), this.next(), this.parseFunction(s$1, 0);
					case f._class: return this.parseClass(this.startNode(), !1);
					case f._new: return this.parseNew();
					case f.backQuote: return this.parseTemplate();
					case f._import: return this.options.ecmaVersion >= 11 ? this.parseExprImport(i$1) : this.unexpected();
					default: return this.parseExprAtomDefault();
				}
			}, $.parseExprAtomDefault = function() {
				this.unexpected();
			}, $.parseExprImport = function(e$2) {
				var t$2 = this.startNode();
				if (this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword import"), this.next(), this.type === f.parenL && !e$2) return this.parseDynamicImport(t$2);
				if (this.type === f.dot) {
					var i$1 = this.startNodeAt(t$2.start, t$2.loc && t$2.loc.start);
					return i$1.name = "import", t$2.meta = this.finishNode(i$1, "Identifier"), this.parseImportMeta(t$2);
				}
				this.unexpected();
			}, $.parseDynamicImport = function(e$2) {
				if (this.next(), e$2.source = this.parseMaybeAssign(), this.options.ecmaVersion >= 16) this.eat(f.parenR) ? e$2.options = null : (this.expect(f.comma), this.afterTrailingComma(f.parenR) ? e$2.options = null : (e$2.options = this.parseMaybeAssign(), this.eat(f.parenR) || (this.expect(f.comma), this.afterTrailingComma(f.parenR) || this.unexpected())));
				else if (!this.eat(f.parenR)) {
					var t$2 = this.start;
					this.eat(f.comma) && this.eat(f.parenR) ? this.raiseRecoverable(t$2, "Trailing comma is not allowed in import()") : this.unexpected(t$2);
				}
				return this.finishNode(e$2, "ImportExpression");
			}, $.parseImportMeta = function(e$2) {
				this.next();
				var t$2 = this.containsEsc;
				return e$2.property = this.parseIdent(!0), "meta" !== e$2.property.name && this.raiseRecoverable(e$2.property.start, "The only valid meta property for import is 'import.meta'"), t$2 && this.raiseRecoverable(e$2.start, "'import.meta' must not contain escaped characters"), "module" === this.options.sourceType || this.options.allowImportExportEverywhere || this.raiseRecoverable(e$2.start, "Cannot use 'import.meta' outside a module"), this.finishNode(e$2, "MetaProperty");
			}, $.parseLiteral = function(e$2) {
				var t$2 = this.startNode();
				return t$2.value = e$2, t$2.raw = this.input.slice(this.start, this.end), 110 === t$2.raw.charCodeAt(t$2.raw.length - 1) && (t$2.bigint = null != t$2.value ? t$2.value.toString() : t$2.raw.slice(0, -1).replace(/_/g, "")), this.next(), this.finishNode(t$2, "Literal");
			}, $.parseParenExpression = function() {
				this.expect(f.parenL);
				var e$2 = this.parseExpression();
				return this.expect(f.parenR), e$2;
			}, $.shouldParseArrow = function(e$2) {
				return !this.canInsertSemicolon();
			}, $.parseParenAndDistinguishExpression = function(e$2, t$2) {
				var i$1, s$1 = this.start, r$1 = this.startLoc, n$1 = this.options.ecmaVersion >= 8;
				if (this.options.ecmaVersion >= 6) {
					this.next();
					var a$1, o$1 = this.start, h$1 = this.startLoc, c$1 = [], p$1 = !0, l$1 = !1, u$1 = new acorn_DestructuringErrors(), d$1 = this.yieldPos, m$1 = this.awaitPos;
					for (this.yieldPos = 0, this.awaitPos = 0; this.type !== f.parenR;) {
						if (p$1 ? p$1 = !1 : this.expect(f.comma), n$1 && this.afterTrailingComma(f.parenR, !0)) {
							l$1 = !0;
							break;
						}
						if (this.type === f.ellipsis) {
							a$1 = this.start, c$1.push(this.parseParenItem(this.parseRestBinding())), this.type === f.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element");
							break;
						}
						c$1.push(this.parseMaybeAssign(!1, u$1, this.parseParenItem));
					}
					var g$1 = this.lastTokEnd, x$1 = this.lastTokEndLoc;
					if (this.expect(f.parenR), e$2 && this.shouldParseArrow(c$1) && this.eat(f.arrow)) return this.checkPatternErrors(u$1, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = d$1, this.awaitPos = m$1, this.parseParenArrowList(s$1, r$1, c$1, t$2);
					c$1.length && !l$1 || this.unexpected(this.lastTokStart), a$1 && this.unexpected(a$1), this.checkExpressionErrors(u$1, !0), this.yieldPos = d$1 || this.yieldPos, this.awaitPos = m$1 || this.awaitPos, c$1.length > 1 ? ((i$1 = this.startNodeAt(o$1, h$1)).expressions = c$1, this.finishNodeAt(i$1, "SequenceExpression", g$1, x$1)) : i$1 = c$1[0];
				} else i$1 = this.parseParenExpression();
				if (this.options.preserveParens) {
					var v$1 = this.startNodeAt(s$1, r$1);
					return v$1.expression = i$1, this.finishNode(v$1, "ParenthesizedExpression");
				}
				return i$1;
			}, $.parseParenItem = function(e$2) {
				return e$2;
			}, $.parseParenArrowList = function(e$2, t$2, i$1, s$1) {
				return this.parseArrowExpression(this.startNodeAt(e$2, t$2), i$1, !1, s$1);
			};
			var q = [];
			$.parseNew = function() {
				this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword new");
				var e$2 = this.startNode();
				if (this.next(), this.options.ecmaVersion >= 6 && this.type === f.dot) {
					var t$2 = this.startNodeAt(e$2.start, e$2.loc && e$2.loc.start);
					t$2.name = "new", e$2.meta = this.finishNode(t$2, "Identifier"), this.next();
					var i$1 = this.containsEsc;
					return e$2.property = this.parseIdent(!0), "target" !== e$2.property.name && this.raiseRecoverable(e$2.property.start, "The only valid meta property for new is 'new.target'"), i$1 && this.raiseRecoverable(e$2.start, "'new.target' must not contain escaped characters"), this.allowNewDotTarget || this.raiseRecoverable(e$2.start, "'new.target' can only be used in functions and class static block"), this.finishNode(e$2, "MetaProperty");
				}
				var s$1 = this.start, r$1 = this.startLoc;
				return e$2.callee = this.parseSubscripts(this.parseExprAtom(null, !1, !0), s$1, r$1, !0, !1), this.eat(f.parenL) ? e$2.arguments = this.parseExprList(f.parenR, this.options.ecmaVersion >= 8, !1) : e$2.arguments = q, this.finishNode(e$2, "NewExpression");
			}, $.parseTemplateElement = function(e$2) {
				var t$2 = e$2.isTagged, i$1 = this.startNode();
				return this.type === f.invalidTemplate ? (t$2 || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), i$1.value = {
					raw: this.value.replace(/\r\n?/g, "\n"),
					cooked: null
				}) : i$1.value = {
					raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
					cooked: this.value
				}, this.next(), i$1.tail = this.type === f.backQuote, this.finishNode(i$1, "TemplateElement");
			}, $.parseTemplate = function(e$2) {
				void 0 === e$2 && (e$2 = {});
				var t$2 = e$2.isTagged;
				void 0 === t$2 && (t$2 = !1);
				var i$1 = this.startNode();
				this.next(), i$1.expressions = [];
				var s$1 = this.parseTemplateElement({ isTagged: t$2 });
				for (i$1.quasis = [s$1]; !s$1.tail;) this.type === f.eof && this.raise(this.pos, "Unterminated template literal"), this.expect(f.dollarBraceL), i$1.expressions.push(this.parseExpression()), this.expect(f.braceR), i$1.quasis.push(s$1 = this.parseTemplateElement({ isTagged: t$2 }));
				return this.next(), this.finishNode(i$1, "TemplateLiteral");
			}, $.isAsyncProp = function(e$2) {
				return !e$2.computed && "Identifier" === e$2.key.type && "async" === e$2.key.name && (this.type === f.name || this.type === f.num || this.type === f.string || this.type === f.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === f.star) && !m.test(this.input.slice(this.lastTokEnd, this.start));
			}, $.parseObj = function(e$2, t$2) {
				var i$1 = this.startNode(), s$1 = !0, r$1 = {};
				for (i$1.properties = [], this.next(); !this.eat(f.braceR);) {
					if (s$1) s$1 = !1;
					else if (this.expect(f.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(f.braceR)) break;
					var n$1 = this.parseProperty(e$2, t$2);
					e$2 || this.checkPropClash(n$1, r$1, t$2), i$1.properties.push(n$1);
				}
				return this.finishNode(i$1, e$2 ? "ObjectPattern" : "ObjectExpression");
			}, $.parseProperty = function(e$2, t$2) {
				var i$1, s$1, r$1, n$1, a$1 = this.startNode();
				if (this.options.ecmaVersion >= 9 && this.eat(f.ellipsis)) return e$2 ? (a$1.argument = this.parseIdent(!1), this.type === f.comma && this.raiseRecoverable(this.start, "Comma is not permitted after the rest element"), this.finishNode(a$1, "RestElement")) : (a$1.argument = this.parseMaybeAssign(!1, t$2), this.type === f.comma && t$2 && t$2.trailingComma < 0 && (t$2.trailingComma = this.start), this.finishNode(a$1, "SpreadElement"));
				this.options.ecmaVersion >= 6 && (a$1.method = !1, a$1.shorthand = !1, (e$2 || t$2) && (r$1 = this.start, n$1 = this.startLoc), e$2 || (i$1 = this.eat(f.star)));
				var o$1 = this.containsEsc;
				return this.parsePropertyName(a$1), !e$2 && !o$1 && this.options.ecmaVersion >= 8 && !i$1 && this.isAsyncProp(a$1) ? (s$1 = !0, i$1 = this.options.ecmaVersion >= 9 && this.eat(f.star), this.parsePropertyName(a$1)) : s$1 = !1, this.parsePropertyValue(a$1, e$2, i$1, s$1, r$1, n$1, t$2, o$1), this.finishNode(a$1, "Property");
			}, $.parseGetterSetter = function(e$2) {
				var t$2 = e$2.key.name;
				this.parsePropertyName(e$2), e$2.value = this.parseMethod(!1), e$2.kind = t$2;
				var i$1 = "get" === e$2.kind ? 0 : 1;
				if (e$2.value.params.length !== i$1) {
					var s$1 = e$2.value.start;
					"get" === e$2.kind ? this.raiseRecoverable(s$1, "getter should have no params") : this.raiseRecoverable(s$1, "setter should have exactly one param");
				} else "set" === e$2.kind && "RestElement" === e$2.value.params[0].type && this.raiseRecoverable(e$2.value.params[0].start, "Setter cannot use rest params");
			}, $.parsePropertyValue = function(e$2, t$2, i$1, s$1, r$1, n$1, a$1, o$1) {
				(i$1 || s$1) && this.type === f.colon && this.unexpected(), this.eat(f.colon) ? (e$2.value = t$2 ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, a$1), e$2.kind = "init") : this.options.ecmaVersion >= 6 && this.type === f.parenL ? (t$2 && this.unexpected(), e$2.method = !0, e$2.value = this.parseMethod(i$1, s$1), e$2.kind = "init") : t$2 || o$1 || !(this.options.ecmaVersion >= 5) || e$2.computed || "Identifier" !== e$2.key.type || "get" !== e$2.key.name && "set" !== e$2.key.name || this.type === f.comma || this.type === f.braceR || this.type === f.eq ? this.options.ecmaVersion >= 6 && !e$2.computed && "Identifier" === e$2.key.type ? ((i$1 || s$1) && this.unexpected(), this.checkUnreserved(e$2.key), "await" !== e$2.key.name || this.awaitIdentPos || (this.awaitIdentPos = r$1), t$2 ? e$2.value = this.parseMaybeDefault(r$1, n$1, this.copyNode(e$2.key)) : this.type === f.eq && a$1 ? (a$1.shorthandAssign < 0 && (a$1.shorthandAssign = this.start), e$2.value = this.parseMaybeDefault(r$1, n$1, this.copyNode(e$2.key))) : e$2.value = this.copyNode(e$2.key), e$2.kind = "init", e$2.shorthand = !0) : this.unexpected() : ((i$1 || s$1) && this.unexpected(), this.parseGetterSetter(e$2));
			}, $.parsePropertyName = function(e$2) {
				if (this.options.ecmaVersion >= 6) {
					if (this.eat(f.bracketL)) return e$2.computed = !0, e$2.key = this.parseMaybeAssign(), this.expect(f.bracketR), e$2.key;
					e$2.computed = !1;
				}
				return e$2.key = this.type === f.num || this.type === f.string ? this.parseExprAtom() : this.parseIdent("never" !== this.options.allowReserved);
			}, $.initFunction = function(e$2) {
				e$2.id = null, this.options.ecmaVersion >= 6 && (e$2.generator = e$2.expression = !1), this.options.ecmaVersion >= 8 && (e$2.async = !1);
			}, $.parseMethod = function(e$2, t$2, i$1) {
				var s$1 = this.startNode(), r$1 = this.yieldPos, n$1 = this.awaitPos, a$1 = this.awaitIdentPos;
				return this.initFunction(s$1), this.options.ecmaVersion >= 6 && (s$1.generator = e$2), this.options.ecmaVersion >= 8 && (s$1.async = !!t$2), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(64 | functionFlags(t$2, s$1.generator) | (i$1 ? 128 : 0)), this.expect(f.parenL), s$1.params = this.parseBindingList(f.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(s$1, !1, !0, !1), this.yieldPos = r$1, this.awaitPos = n$1, this.awaitIdentPos = a$1, this.finishNode(s$1, "FunctionExpression");
			}, $.parseArrowExpression = function(e$2, t$2, i$1, s$1) {
				var r$1 = this.yieldPos, n$1 = this.awaitPos, a$1 = this.awaitIdentPos;
				return this.enterScope(16 | functionFlags(i$1, !1)), this.initFunction(e$2), this.options.ecmaVersion >= 8 && (e$2.async = !!i$1), this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, e$2.params = this.toAssignableList(t$2, !0), this.parseFunctionBody(e$2, !0, !1, s$1), this.yieldPos = r$1, this.awaitPos = n$1, this.awaitIdentPos = a$1, this.finishNode(e$2, "ArrowFunctionExpression");
			}, $.parseFunctionBody = function(e$2, t$2, i$1, s$1) {
				var r$1 = t$2 && this.type !== f.braceL, n$1 = this.strict, a$1 = !1;
				if (r$1) e$2.body = this.parseMaybeAssign(s$1), e$2.expression = !0, this.checkParams(e$2, !1);
				else {
					var o$1 = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(e$2.params);
					n$1 && !o$1 || (a$1 = this.strictDirective(this.end)) && o$1 && this.raiseRecoverable(e$2.start, "Illegal 'use strict' directive in function with non-simple parameter list");
					var h$1 = this.labels;
					this.labels = [], a$1 && (this.strict = !0), this.checkParams(e$2, !n$1 && !a$1 && !t$2 && !i$1 && this.isSimpleParamList(e$2.params)), this.strict && e$2.id && this.checkLValSimple(e$2.id, 5), e$2.body = this.parseBlock(!1, void 0, a$1 && !n$1), e$2.expression = !1, this.adaptDirectivePrologue(e$2.body.body), this.labels = h$1;
				}
				this.exitScope();
			}, $.isSimpleParamList = function(e$2) {
				for (var t$2 = 0, i$1 = e$2; t$2 < i$1.length; t$2 += 1) if ("Identifier" !== i$1[t$2].type) return !1;
				return !0;
			}, $.checkParams = function(e$2, t$2) {
				for (var i$1 = Object.create(null), s$1 = 0, r$1 = e$2.params; s$1 < r$1.length; s$1 += 1) {
					var n$1 = r$1[s$1];
					this.checkLValInnerPattern(n$1, 1, t$2 ? null : i$1);
				}
			}, $.parseExprList = function(e$2, t$2, i$1, s$1) {
				for (var r$1 = [], n$1 = !0; !this.eat(e$2);) {
					if (n$1) n$1 = !1;
					else if (this.expect(f.comma), t$2 && this.afterTrailingComma(e$2)) break;
					var a$1 = void 0;
					i$1 && this.type === f.comma ? a$1 = null : this.type === f.ellipsis ? (a$1 = this.parseSpread(s$1), s$1 && this.type === f.comma && s$1.trailingComma < 0 && (s$1.trailingComma = this.start)) : a$1 = this.parseMaybeAssign(!1, s$1), r$1.push(a$1);
				}
				return r$1;
			}, $.checkUnreserved = function(e$2) {
				var t$2 = e$2.start, i$1 = e$2.end, s$1 = e$2.name;
				(this.inGenerator && "yield" === s$1 && this.raiseRecoverable(t$2, "Cannot use 'yield' as identifier inside a generator"), this.inAsync && "await" === s$1 && this.raiseRecoverable(t$2, "Cannot use 'await' as identifier inside an async function"), this.currentThisScope().flags & P || "arguments" !== s$1 || this.raiseRecoverable(t$2, "Cannot use 'arguments' in class field initializer"), !this.inClassStaticBlock || "arguments" !== s$1 && "await" !== s$1 || this.raise(t$2, "Cannot use " + s$1 + " in class static initialization block"), this.keywords.test(s$1) && this.raise(t$2, "Unexpected keyword '" + s$1 + "'"), this.options.ecmaVersion < 6 && -1 !== this.input.slice(t$2, i$1).indexOf("\\")) || (this.strict ? this.reservedWordsStrict : this.reservedWords).test(s$1) && (this.inAsync || "await" !== s$1 || this.raiseRecoverable(t$2, "Cannot use keyword 'await' outside an async function"), this.raiseRecoverable(t$2, "The keyword '" + s$1 + "' is reserved"));
			}, $.parseIdent = function(e$2) {
				var t$2 = this.parseIdentNode();
				return this.next(!!e$2), this.finishNode(t$2, "Identifier"), e$2 || (this.checkUnreserved(t$2), "await" !== t$2.name || this.awaitIdentPos || (this.awaitIdentPos = t$2.start)), t$2;
			}, $.parseIdentNode = function() {
				var e$2 = this.startNode();
				return this.type === f.name ? e$2.name = this.value : this.type.keyword ? (e$2.name = this.type.keyword, "class" !== e$2.name && "function" !== e$2.name || this.lastTokEnd === this.lastTokStart + 1 && 46 === this.input.charCodeAt(this.lastTokStart) || this.context.pop(), this.type = f.name) : this.unexpected(), e$2;
			}, $.parsePrivateIdent = function() {
				var e$2 = this.startNode();
				return this.type === f.privateId ? e$2.name = this.value : this.unexpected(), this.next(), this.finishNode(e$2, "PrivateIdentifier"), this.options.checkPrivateFields && (0 === this.privateNameStack.length ? this.raise(e$2.start, "Private field '#" + e$2.name + "' must be declared in an enclosing class") : this.privateNameStack[this.privateNameStack.length - 1].used.push(e$2)), e$2;
			}, $.parseYield = function(e$2) {
				this.yieldPos || (this.yieldPos = this.start);
				var t$2 = this.startNode();
				return this.next(), this.type === f.semi || this.canInsertSemicolon() || this.type !== f.star && !this.type.startsExpr ? (t$2.delegate = !1, t$2.argument = null) : (t$2.delegate = this.eat(f.star), t$2.argument = this.parseMaybeAssign(e$2)), this.finishNode(t$2, "YieldExpression");
			}, $.parseAwait = function(e$2) {
				this.awaitPos || (this.awaitPos = this.start);
				var t$2 = this.startNode();
				return this.next(), t$2.argument = this.parseMaybeUnary(null, !0, !1, e$2), this.finishNode(t$2, "AwaitExpression");
			};
			var W = acorn_Parser.prototype;
			W.raise = function(e$2, t$2) {
				var i$1 = getLineInfo(this.input, e$2);
				t$2 += " (" + i$1.line + ":" + i$1.column + ")", this.sourceFile && (t$2 += " in " + this.sourceFile);
				var s$1 = new SyntaxError(t$2);
				throw s$1.pos = e$2, s$1.loc = i$1, s$1.raisedAt = this.pos, s$1;
			}, W.raiseRecoverable = W.raise, W.curPosition = function() {
				if (this.options.locations) return new acorn_Position(this.curLine, this.pos - this.lineStart);
			};
			var G = acorn_Parser.prototype, acorn_Scope = function(e$2) {
				this.flags = e$2, this.var = [], this.lexical = [], this.functions = [];
			};
			G.enterScope = function(e$2) {
				this.scopeStack.push(new acorn_Scope(e$2));
			}, G.exitScope = function() {
				this.scopeStack.pop();
			}, G.treatFunctionsAsVarInScope = function(e$2) {
				return 2 & e$2.flags || !this.inModule && 1 & e$2.flags;
			}, G.declareName = function(e$2, t$2, i$1) {
				var s$1 = !1;
				if (2 === t$2) {
					var r$1 = this.currentScope();
					s$1 = r$1.lexical.indexOf(e$2) > -1 || r$1.functions.indexOf(e$2) > -1 || r$1.var.indexOf(e$2) > -1, r$1.lexical.push(e$2), this.inModule && 1 & r$1.flags && delete this.undefinedExports[e$2];
				} else if (4 === t$2) this.currentScope().lexical.push(e$2);
				else if (3 === t$2) {
					var n$1 = this.currentScope();
					s$1 = this.treatFunctionsAsVar ? n$1.lexical.indexOf(e$2) > -1 : n$1.lexical.indexOf(e$2) > -1 || n$1.var.indexOf(e$2) > -1, n$1.functions.push(e$2);
				} else for (var a$1 = this.scopeStack.length - 1; a$1 >= 0; --a$1) {
					var o$1 = this.scopeStack[a$1];
					if (o$1.lexical.indexOf(e$2) > -1 && !(32 & o$1.flags && o$1.lexical[0] === e$2) || !this.treatFunctionsAsVarInScope(o$1) && o$1.functions.indexOf(e$2) > -1) {
						s$1 = !0;
						break;
					}
					if (o$1.var.push(e$2), this.inModule && 1 & o$1.flags && delete this.undefinedExports[e$2], o$1.flags & P) break;
				}
				s$1 && this.raiseRecoverable(i$1, "Identifier '" + e$2 + "' has already been declared");
			}, G.checkLocalExport = function(e$2) {
				-1 === this.scopeStack[0].lexical.indexOf(e$2.name) && -1 === this.scopeStack[0].var.indexOf(e$2.name) && (this.undefinedExports[e$2.name] = e$2);
			}, G.currentScope = function() {
				return this.scopeStack[this.scopeStack.length - 1];
			}, G.currentVarScope = function() {
				for (var e$2 = this.scopeStack.length - 1;; e$2--) {
					var t$2 = this.scopeStack[e$2];
					if (771 & t$2.flags) return t$2;
				}
			}, G.currentThisScope = function() {
				for (var e$2 = this.scopeStack.length - 1;; e$2--) {
					var t$2 = this.scopeStack[e$2];
					if (771 & t$2.flags && !(16 & t$2.flags)) return t$2;
				}
			};
			var acorn_Node = function(e$2, t$2, i$1) {
				this.type = "", this.start = t$2, this.end = 0, e$2.options.locations && (this.loc = new acorn_SourceLocation(e$2, i$1)), e$2.options.directSourceFile && (this.sourceFile = e$2.options.directSourceFile), e$2.options.ranges && (this.range = [t$2, 0]);
			}, H = acorn_Parser.prototype;
			function finishNodeAt(e$2, t$2, i$1, s$1) {
				return e$2.type = t$2, e$2.end = i$1, this.options.locations && (e$2.loc.end = s$1), this.options.ranges && (e$2.range[1] = i$1), e$2;
			}
			H.startNode = function() {
				return new acorn_Node(this, this.start, this.startLoc);
			}, H.startNodeAt = function(e$2, t$2) {
				return new acorn_Node(this, e$2, t$2);
			}, H.finishNode = function(e$2, t$2) {
				return finishNodeAt.call(this, e$2, t$2, this.lastTokEnd, this.lastTokEndLoc);
			}, H.finishNodeAt = function(e$2, t$2, i$1, s$1) {
				return finishNodeAt.call(this, e$2, t$2, i$1, s$1);
			}, H.copyNode = function(e$2) {
				var t$2 = new acorn_Node(this, e$2.start, this.startLoc);
				for (var i$1 in e$2) t$2[i$1] = e$2[i$1];
				return t$2;
			};
			var K = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS", z = K + " Extended_Pictographic", J = z + " EBase EComp EMod EPres ExtPict", Y = {
				9: K,
				10: z,
				11: z,
				12: J,
				13: J,
				14: J
			}, Q = {
				9: "",
				10: "",
				11: "",
				12: "",
				13: "",
				14: "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji"
			}, Z = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu", X = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb", ee = X + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd", te = ee + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho", ie = te + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi", se = ie + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith", re = {
				9: X,
				10: ee,
				11: te,
				12: ie,
				13: se,
				14: se + " Gara Garay Gukh Gurung_Khema Hrkt Katakana_Or_Hiragana Kawi Kirat_Rai Krai Nag_Mundari Nagm Ol_Onal Onao Sunu Sunuwar Todhri Todr Tulu_Tigalari Tutg Unknown Zzzz"
			}, ne = {};
			function buildUnicodeData(e$2) {
				var t$2 = ne[e$2] = {
					binary: wordsRegexp(Y[e$2] + " " + Z),
					binaryOfStrings: wordsRegexp(Q[e$2]),
					nonBinary: {
						General_Category: wordsRegexp(Z),
						Script: wordsRegexp(re[e$2])
					}
				};
				t$2.nonBinary.Script_Extensions = t$2.nonBinary.Script, t$2.nonBinary.gc = t$2.nonBinary.General_Category, t$2.nonBinary.sc = t$2.nonBinary.Script, t$2.nonBinary.scx = t$2.nonBinary.Script_Extensions;
			}
			for (var ae = 0, oe = [
				9,
				10,
				11,
				12,
				13,
				14
			]; ae < oe.length; ae += 1) buildUnicodeData(oe[ae]);
			var he = acorn_Parser.prototype, acorn_BranchID = function(e$2, t$2) {
				this.parent = e$2, this.base = t$2 || this;
			};
			acorn_BranchID.prototype.separatedFrom = function(e$2) {
				for (var t$2 = this; t$2; t$2 = t$2.parent) for (var i$1 = e$2; i$1; i$1 = i$1.parent) if (t$2.base === i$1.base && t$2 !== i$1) return !0;
				return !1;
			}, acorn_BranchID.prototype.sibling = function() {
				return new acorn_BranchID(this.parent, this.base);
			};
			var acorn_RegExpValidationState = function(e$2) {
				this.parser = e$2, this.validFlags = "gim" + (e$2.options.ecmaVersion >= 6 ? "uy" : "") + (e$2.options.ecmaVersion >= 9 ? "s" : "") + (e$2.options.ecmaVersion >= 13 ? "d" : "") + (e$2.options.ecmaVersion >= 15 ? "v" : ""), this.unicodeProperties = ne[e$2.options.ecmaVersion >= 14 ? 14 : e$2.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = !1, this.switchV = !1, this.switchN = !1, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = !1, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = Object.create(null), this.backReferenceNames = [], this.branchID = null;
			};
			function isRegularExpressionModifier(e$2) {
				return 105 === e$2 || 109 === e$2 || 115 === e$2;
			}
			function isSyntaxCharacter(e$2) {
				return 36 === e$2 || e$2 >= 40 && e$2 <= 43 || 46 === e$2 || 63 === e$2 || e$2 >= 91 && e$2 <= 94 || e$2 >= 123 && e$2 <= 125;
			}
			function isControlLetter(e$2) {
				return e$2 >= 65 && e$2 <= 90 || e$2 >= 97 && e$2 <= 122;
			}
			acorn_RegExpValidationState.prototype.reset = function(e$2, t$2, i$1) {
				var s$1 = -1 !== i$1.indexOf("v"), r$1 = -1 !== i$1.indexOf("u");
				this.start = 0 | e$2, this.source = t$2 + "", this.flags = i$1, s$1 && this.parser.options.ecmaVersion >= 15 ? (this.switchU = !0, this.switchV = !0, this.switchN = !0) : (this.switchU = r$1 && this.parser.options.ecmaVersion >= 6, this.switchV = !1, this.switchN = r$1 && this.parser.options.ecmaVersion >= 9);
			}, acorn_RegExpValidationState.prototype.raise = function(e$2) {
				this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + e$2);
			}, acorn_RegExpValidationState.prototype.at = function(e$2, t$2) {
				void 0 === t$2 && (t$2 = !1);
				var i$1 = this.source, s$1 = i$1.length;
				if (e$2 >= s$1) return -1;
				var r$1 = i$1.charCodeAt(e$2);
				if (!t$2 && !this.switchU || r$1 <= 55295 || r$1 >= 57344 || e$2 + 1 >= s$1) return r$1;
				var n$1 = i$1.charCodeAt(e$2 + 1);
				return n$1 >= 56320 && n$1 <= 57343 ? (r$1 << 10) + n$1 - 56613888 : r$1;
			}, acorn_RegExpValidationState.prototype.nextIndex = function(e$2, t$2) {
				void 0 === t$2 && (t$2 = !1);
				var i$1 = this.source, s$1 = i$1.length;
				if (e$2 >= s$1) return s$1;
				var r$1, n$1 = i$1.charCodeAt(e$2);
				return !t$2 && !this.switchU || n$1 <= 55295 || n$1 >= 57344 || e$2 + 1 >= s$1 || (r$1 = i$1.charCodeAt(e$2 + 1)) < 56320 || r$1 > 57343 ? e$2 + 1 : e$2 + 2;
			}, acorn_RegExpValidationState.prototype.current = function(e$2) {
				return void 0 === e$2 && (e$2 = !1), this.at(this.pos, e$2);
			}, acorn_RegExpValidationState.prototype.lookahead = function(e$2) {
				return void 0 === e$2 && (e$2 = !1), this.at(this.nextIndex(this.pos, e$2), e$2);
			}, acorn_RegExpValidationState.prototype.advance = function(e$2) {
				void 0 === e$2 && (e$2 = !1), this.pos = this.nextIndex(this.pos, e$2);
			}, acorn_RegExpValidationState.prototype.eat = function(e$2, t$2) {
				return void 0 === t$2 && (t$2 = !1), this.current(t$2) === e$2 && (this.advance(t$2), !0);
			}, acorn_RegExpValidationState.prototype.eatChars = function(e$2, t$2) {
				void 0 === t$2 && (t$2 = !1);
				for (var i$1 = this.pos, s$1 = 0, r$1 = e$2; s$1 < r$1.length; s$1 += 1) {
					var n$1 = r$1[s$1], a$1 = this.at(i$1, t$2);
					if (-1 === a$1 || a$1 !== n$1) return !1;
					i$1 = this.nextIndex(i$1, t$2);
				}
				return this.pos = i$1, !0;
			}, he.validateRegExpFlags = function(e$2) {
				for (var t$2 = e$2.validFlags, i$1 = e$2.flags, s$1 = !1, r$1 = !1, n$1 = 0; n$1 < i$1.length; n$1++) {
					var a$1 = i$1.charAt(n$1);
					-1 === t$2.indexOf(a$1) && this.raise(e$2.start, "Invalid regular expression flag"), i$1.indexOf(a$1, n$1 + 1) > -1 && this.raise(e$2.start, "Duplicate regular expression flag"), "u" === a$1 && (s$1 = !0), "v" === a$1 && (r$1 = !0);
				}
				this.options.ecmaVersion >= 15 && s$1 && r$1 && this.raise(e$2.start, "Invalid regular expression flag");
			}, he.validateRegExpPattern = function(e$2) {
				this.regexp_pattern(e$2), !e$2.switchN && this.options.ecmaVersion >= 9 && function(e$3) {
					for (var t$2 in e$3) return !0;
					return !1;
				}(e$2.groupNames) && (e$2.switchN = !0, this.regexp_pattern(e$2));
			}, he.regexp_pattern = function(e$2) {
				e$2.pos = 0, e$2.lastIntValue = 0, e$2.lastStringValue = "", e$2.lastAssertionIsQuantifiable = !1, e$2.numCapturingParens = 0, e$2.maxBackReference = 0, e$2.groupNames = Object.create(null), e$2.backReferenceNames.length = 0, e$2.branchID = null, this.regexp_disjunction(e$2), e$2.pos !== e$2.source.length && (e$2.eat(41) && e$2.raise("Unmatched ')'"), (e$2.eat(93) || e$2.eat(125)) && e$2.raise("Lone quantifier brackets")), e$2.maxBackReference > e$2.numCapturingParens && e$2.raise("Invalid escape");
				for (var t$2 = 0, i$1 = e$2.backReferenceNames; t$2 < i$1.length; t$2 += 1) {
					var s$1 = i$1[t$2];
					e$2.groupNames[s$1] || e$2.raise("Invalid named capture referenced");
				}
			}, he.regexp_disjunction = function(e$2) {
				var t$2 = this.options.ecmaVersion >= 16;
				for (t$2 && (e$2.branchID = new acorn_BranchID(e$2.branchID, null)), this.regexp_alternative(e$2); e$2.eat(124);) t$2 && (e$2.branchID = e$2.branchID.sibling()), this.regexp_alternative(e$2);
				t$2 && (e$2.branchID = e$2.branchID.parent), this.regexp_eatQuantifier(e$2, !0) && e$2.raise("Nothing to repeat"), e$2.eat(123) && e$2.raise("Lone quantifier brackets");
			}, he.regexp_alternative = function(e$2) {
				for (; e$2.pos < e$2.source.length && this.regexp_eatTerm(e$2););
			}, he.regexp_eatTerm = function(e$2) {
				return this.regexp_eatAssertion(e$2) ? (e$2.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(e$2) && e$2.switchU && e$2.raise("Invalid quantifier"), !0) : !!(e$2.switchU ? this.regexp_eatAtom(e$2) : this.regexp_eatExtendedAtom(e$2)) && (this.regexp_eatQuantifier(e$2), !0);
			}, he.regexp_eatAssertion = function(e$2) {
				var t$2 = e$2.pos;
				if (e$2.lastAssertionIsQuantifiable = !1, e$2.eat(94) || e$2.eat(36)) return !0;
				if (e$2.eat(92)) {
					if (e$2.eat(66) || e$2.eat(98)) return !0;
					e$2.pos = t$2;
				}
				if (e$2.eat(40) && e$2.eat(63)) {
					var i$1 = !1;
					if (this.options.ecmaVersion >= 9 && (i$1 = e$2.eat(60)), e$2.eat(61) || e$2.eat(33)) return this.regexp_disjunction(e$2), e$2.eat(41) || e$2.raise("Unterminated group"), e$2.lastAssertionIsQuantifiable = !i$1, !0;
				}
				return e$2.pos = t$2, !1;
			}, he.regexp_eatQuantifier = function(e$2, t$2) {
				return void 0 === t$2 && (t$2 = !1), !!this.regexp_eatQuantifierPrefix(e$2, t$2) && (e$2.eat(63), !0);
			}, he.regexp_eatQuantifierPrefix = function(e$2, t$2) {
				return e$2.eat(42) || e$2.eat(43) || e$2.eat(63) || this.regexp_eatBracedQuantifier(e$2, t$2);
			}, he.regexp_eatBracedQuantifier = function(e$2, t$2) {
				var i$1 = e$2.pos;
				if (e$2.eat(123)) {
					var s$1 = 0, r$1 = -1;
					if (this.regexp_eatDecimalDigits(e$2) && (s$1 = e$2.lastIntValue, e$2.eat(44) && this.regexp_eatDecimalDigits(e$2) && (r$1 = e$2.lastIntValue), e$2.eat(125))) return -1 !== r$1 && r$1 < s$1 && !t$2 && e$2.raise("numbers out of order in {} quantifier"), !0;
					e$2.switchU && !t$2 && e$2.raise("Incomplete quantifier"), e$2.pos = i$1;
				}
				return !1;
			}, he.regexp_eatAtom = function(e$2) {
				return this.regexp_eatPatternCharacters(e$2) || e$2.eat(46) || this.regexp_eatReverseSolidusAtomEscape(e$2) || this.regexp_eatCharacterClass(e$2) || this.regexp_eatUncapturingGroup(e$2) || this.regexp_eatCapturingGroup(e$2);
			}, he.regexp_eatReverseSolidusAtomEscape = function(e$2) {
				var t$2 = e$2.pos;
				if (e$2.eat(92)) {
					if (this.regexp_eatAtomEscape(e$2)) return !0;
					e$2.pos = t$2;
				}
				return !1;
			}, he.regexp_eatUncapturingGroup = function(e$2) {
				var t$2 = e$2.pos;
				if (e$2.eat(40)) {
					if (e$2.eat(63)) {
						if (this.options.ecmaVersion >= 16) {
							var i$1 = this.regexp_eatModifiers(e$2), s$1 = e$2.eat(45);
							if (i$1 || s$1) {
								for (var r$1 = 0; r$1 < i$1.length; r$1++) {
									var n$1 = i$1.charAt(r$1);
									i$1.indexOf(n$1, r$1 + 1) > -1 && e$2.raise("Duplicate regular expression modifiers");
								}
								if (s$1) {
									var a$1 = this.regexp_eatModifiers(e$2);
									i$1 || a$1 || 58 !== e$2.current() || e$2.raise("Invalid regular expression modifiers");
									for (var o$1 = 0; o$1 < a$1.length; o$1++) {
										var h$1 = a$1.charAt(o$1);
										(a$1.indexOf(h$1, o$1 + 1) > -1 || i$1.indexOf(h$1) > -1) && e$2.raise("Duplicate regular expression modifiers");
									}
								}
							}
						}
						if (e$2.eat(58)) {
							if (this.regexp_disjunction(e$2), e$2.eat(41)) return !0;
							e$2.raise("Unterminated group");
						}
					}
					e$2.pos = t$2;
				}
				return !1;
			}, he.regexp_eatCapturingGroup = function(e$2) {
				if (e$2.eat(40)) {
					if (this.options.ecmaVersion >= 9 ? this.regexp_groupSpecifier(e$2) : 63 === e$2.current() && e$2.raise("Invalid group"), this.regexp_disjunction(e$2), e$2.eat(41)) return e$2.numCapturingParens += 1, !0;
					e$2.raise("Unterminated group");
				}
				return !1;
			}, he.regexp_eatModifiers = function(e$2) {
				for (var t$2 = "", i$1 = 0; -1 !== (i$1 = e$2.current()) && isRegularExpressionModifier(i$1);) t$2 += codePointToString(i$1), e$2.advance();
				return t$2;
			}, he.regexp_eatExtendedAtom = function(e$2) {
				return e$2.eat(46) || this.regexp_eatReverseSolidusAtomEscape(e$2) || this.regexp_eatCharacterClass(e$2) || this.regexp_eatUncapturingGroup(e$2) || this.regexp_eatCapturingGroup(e$2) || this.regexp_eatInvalidBracedQuantifier(e$2) || this.regexp_eatExtendedPatternCharacter(e$2);
			}, he.regexp_eatInvalidBracedQuantifier = function(e$2) {
				return this.regexp_eatBracedQuantifier(e$2, !0) && e$2.raise("Nothing to repeat"), !1;
			}, he.regexp_eatSyntaxCharacter = function(e$2) {
				var t$2 = e$2.current();
				return !!isSyntaxCharacter(t$2) && (e$2.lastIntValue = t$2, e$2.advance(), !0);
			}, he.regexp_eatPatternCharacters = function(e$2) {
				for (var t$2 = e$2.pos, i$1 = 0; -1 !== (i$1 = e$2.current()) && !isSyntaxCharacter(i$1);) e$2.advance();
				return e$2.pos !== t$2;
			}, he.regexp_eatExtendedPatternCharacter = function(e$2) {
				var t$2 = e$2.current();
				return !(-1 === t$2 || 36 === t$2 || t$2 >= 40 && t$2 <= 43 || 46 === t$2 || 63 === t$2 || 91 === t$2 || 94 === t$2 || 124 === t$2) && (e$2.advance(), !0);
			}, he.regexp_groupSpecifier = function(e$2) {
				if (e$2.eat(63)) {
					this.regexp_eatGroupName(e$2) || e$2.raise("Invalid group");
					var t$2 = this.options.ecmaVersion >= 16, i$1 = e$2.groupNames[e$2.lastStringValue];
					if (i$1) if (t$2) for (var s$1 = 0, r$1 = i$1; s$1 < r$1.length; s$1 += 1) r$1[s$1].separatedFrom(e$2.branchID) || e$2.raise("Duplicate capture group name");
					else e$2.raise("Duplicate capture group name");
					t$2 ? (i$1 || (e$2.groupNames[e$2.lastStringValue] = [])).push(e$2.branchID) : e$2.groupNames[e$2.lastStringValue] = !0;
				}
			}, he.regexp_eatGroupName = function(e$2) {
				if (e$2.lastStringValue = "", e$2.eat(60)) {
					if (this.regexp_eatRegExpIdentifierName(e$2) && e$2.eat(62)) return !0;
					e$2.raise("Invalid capture group name");
				}
				return !1;
			}, he.regexp_eatRegExpIdentifierName = function(e$2) {
				if (e$2.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(e$2)) {
					for (e$2.lastStringValue += codePointToString(e$2.lastIntValue); this.regexp_eatRegExpIdentifierPart(e$2);) e$2.lastStringValue += codePointToString(e$2.lastIntValue);
					return !0;
				}
				return !1;
			}, he.regexp_eatRegExpIdentifierStart = function(e$2) {
				var t$2 = e$2.pos, i$1 = this.options.ecmaVersion >= 11, s$1 = e$2.current(i$1);
				return e$2.advance(i$1), 92 === s$1 && this.regexp_eatRegExpUnicodeEscapeSequence(e$2, i$1) && (s$1 = e$2.lastIntValue), function(e$3) {
					return isIdentifierStart(e$3, !0) || 36 === e$3 || 95 === e$3;
				}(s$1) ? (e$2.lastIntValue = s$1, !0) : (e$2.pos = t$2, !1);
			}, he.regexp_eatRegExpIdentifierPart = function(e$2) {
				var t$2 = e$2.pos, i$1 = this.options.ecmaVersion >= 11, s$1 = e$2.current(i$1);
				return e$2.advance(i$1), 92 === s$1 && this.regexp_eatRegExpUnicodeEscapeSequence(e$2, i$1) && (s$1 = e$2.lastIntValue), function(e$3) {
					return isIdentifierChar(e$3, !0) || 36 === e$3 || 95 === e$3 || 8204 === e$3 || 8205 === e$3;
				}(s$1) ? (e$2.lastIntValue = s$1, !0) : (e$2.pos = t$2, !1);
			}, he.regexp_eatAtomEscape = function(e$2) {
				return !!(this.regexp_eatBackReference(e$2) || this.regexp_eatCharacterClassEscape(e$2) || this.regexp_eatCharacterEscape(e$2) || e$2.switchN && this.regexp_eatKGroupName(e$2)) || (e$2.switchU && (99 === e$2.current() && e$2.raise("Invalid unicode escape"), e$2.raise("Invalid escape")), !1);
			}, he.regexp_eatBackReference = function(e$2) {
				var t$2 = e$2.pos;
				if (this.regexp_eatDecimalEscape(e$2)) {
					var i$1 = e$2.lastIntValue;
					if (e$2.switchU) return i$1 > e$2.maxBackReference && (e$2.maxBackReference = i$1), !0;
					if (i$1 <= e$2.numCapturingParens) return !0;
					e$2.pos = t$2;
				}
				return !1;
			}, he.regexp_eatKGroupName = function(e$2) {
				if (e$2.eat(107)) {
					if (this.regexp_eatGroupName(e$2)) return e$2.backReferenceNames.push(e$2.lastStringValue), !0;
					e$2.raise("Invalid named reference");
				}
				return !1;
			}, he.regexp_eatCharacterEscape = function(e$2) {
				return this.regexp_eatControlEscape(e$2) || this.regexp_eatCControlLetter(e$2) || this.regexp_eatZero(e$2) || this.regexp_eatHexEscapeSequence(e$2) || this.regexp_eatRegExpUnicodeEscapeSequence(e$2, !1) || !e$2.switchU && this.regexp_eatLegacyOctalEscapeSequence(e$2) || this.regexp_eatIdentityEscape(e$2);
			}, he.regexp_eatCControlLetter = function(e$2) {
				var t$2 = e$2.pos;
				if (e$2.eat(99)) {
					if (this.regexp_eatControlLetter(e$2)) return !0;
					e$2.pos = t$2;
				}
				return !1;
			}, he.regexp_eatZero = function(e$2) {
				return 48 === e$2.current() && !isDecimalDigit(e$2.lookahead()) && (e$2.lastIntValue = 0, e$2.advance(), !0);
			}, he.regexp_eatControlEscape = function(e$2) {
				var t$2 = e$2.current();
				return 116 === t$2 ? (e$2.lastIntValue = 9, e$2.advance(), !0) : 110 === t$2 ? (e$2.lastIntValue = 10, e$2.advance(), !0) : 118 === t$2 ? (e$2.lastIntValue = 11, e$2.advance(), !0) : 102 === t$2 ? (e$2.lastIntValue = 12, e$2.advance(), !0) : 114 === t$2 && (e$2.lastIntValue = 13, e$2.advance(), !0);
			}, he.regexp_eatControlLetter = function(e$2) {
				var t$2 = e$2.current();
				return !!isControlLetter(t$2) && (e$2.lastIntValue = t$2 % 32, e$2.advance(), !0);
			}, he.regexp_eatRegExpUnicodeEscapeSequence = function(e$2, t$2) {
				void 0 === t$2 && (t$2 = !1);
				var i$1, s$1 = e$2.pos, r$1 = t$2 || e$2.switchU;
				if (e$2.eat(117)) {
					if (this.regexp_eatFixedHexDigits(e$2, 4)) {
						var n$1 = e$2.lastIntValue;
						if (r$1 && n$1 >= 55296 && n$1 <= 56319) {
							var a$1 = e$2.pos;
							if (e$2.eat(92) && e$2.eat(117) && this.regexp_eatFixedHexDigits(e$2, 4)) {
								var o$1 = e$2.lastIntValue;
								if (o$1 >= 56320 && o$1 <= 57343) return e$2.lastIntValue = 1024 * (n$1 - 55296) + (o$1 - 56320) + 65536, !0;
							}
							e$2.pos = a$1, e$2.lastIntValue = n$1;
						}
						return !0;
					}
					if (r$1 && e$2.eat(123) && this.regexp_eatHexDigits(e$2) && e$2.eat(125) && (i$1 = e$2.lastIntValue) >= 0 && i$1 <= 1114111) return !0;
					r$1 && e$2.raise("Invalid unicode escape"), e$2.pos = s$1;
				}
				return !1;
			}, he.regexp_eatIdentityEscape = function(e$2) {
				if (e$2.switchU) return !!this.regexp_eatSyntaxCharacter(e$2) || !!e$2.eat(47) && (e$2.lastIntValue = 47, !0);
				var t$2 = e$2.current();
				return !(99 === t$2 || e$2.switchN && 107 === t$2) && (e$2.lastIntValue = t$2, e$2.advance(), !0);
			}, he.regexp_eatDecimalEscape = function(e$2) {
				e$2.lastIntValue = 0;
				var t$2 = e$2.current();
				if (t$2 >= 49 && t$2 <= 57) {
					do
						e$2.lastIntValue = 10 * e$2.lastIntValue + (t$2 - 48), e$2.advance();
					while ((t$2 = e$2.current()) >= 48 && t$2 <= 57);
					return !0;
				}
				return !1;
			};
			function isUnicodePropertyNameCharacter(e$2) {
				return isControlLetter(e$2) || 95 === e$2;
			}
			function isUnicodePropertyValueCharacter(e$2) {
				return isUnicodePropertyNameCharacter(e$2) || isDecimalDigit(e$2);
			}
			function isDecimalDigit(e$2) {
				return e$2 >= 48 && e$2 <= 57;
			}
			function isHexDigit(e$2) {
				return e$2 >= 48 && e$2 <= 57 || e$2 >= 65 && e$2 <= 70 || e$2 >= 97 && e$2 <= 102;
			}
			function hexToInt(e$2) {
				return e$2 >= 65 && e$2 <= 70 ? e$2 - 65 + 10 : e$2 >= 97 && e$2 <= 102 ? e$2 - 97 + 10 : e$2 - 48;
			}
			function isOctalDigit(e$2) {
				return e$2 >= 48 && e$2 <= 55;
			}
			he.regexp_eatCharacterClassEscape = function(e$2) {
				var t$2 = e$2.current();
				if (function(e$3) {
					return 100 === e$3 || 68 === e$3 || 115 === e$3 || 83 === e$3 || 119 === e$3 || 87 === e$3;
				}(t$2)) return e$2.lastIntValue = -1, e$2.advance(), 1;
				var i$1 = !1;
				if (e$2.switchU && this.options.ecmaVersion >= 9 && ((i$1 = 80 === t$2) || 112 === t$2)) {
					var s$1;
					if (e$2.lastIntValue = -1, e$2.advance(), e$2.eat(123) && (s$1 = this.regexp_eatUnicodePropertyValueExpression(e$2)) && e$2.eat(125)) return i$1 && 2 === s$1 && e$2.raise("Invalid property name"), s$1;
					e$2.raise("Invalid property name");
				}
				return 0;
			}, he.regexp_eatUnicodePropertyValueExpression = function(e$2) {
				var t$2 = e$2.pos;
				if (this.regexp_eatUnicodePropertyName(e$2) && e$2.eat(61)) {
					var i$1 = e$2.lastStringValue;
					if (this.regexp_eatUnicodePropertyValue(e$2)) {
						var s$1 = e$2.lastStringValue;
						return this.regexp_validateUnicodePropertyNameAndValue(e$2, i$1, s$1), 1;
					}
				}
				if (e$2.pos = t$2, this.regexp_eatLoneUnicodePropertyNameOrValue(e$2)) {
					var r$1 = e$2.lastStringValue;
					return this.regexp_validateUnicodePropertyNameOrValue(e$2, r$1);
				}
				return 0;
			}, he.regexp_validateUnicodePropertyNameAndValue = function(e$2, t$2, i$1) {
				b(e$2.unicodeProperties.nonBinary, t$2) || e$2.raise("Invalid property name"), e$2.unicodeProperties.nonBinary[t$2].test(i$1) || e$2.raise("Invalid property value");
			}, he.regexp_validateUnicodePropertyNameOrValue = function(e$2, t$2) {
				return e$2.unicodeProperties.binary.test(t$2) ? 1 : e$2.switchV && e$2.unicodeProperties.binaryOfStrings.test(t$2) ? 2 : void e$2.raise("Invalid property name");
			}, he.regexp_eatUnicodePropertyName = function(e$2) {
				var t$2 = 0;
				for (e$2.lastStringValue = ""; isUnicodePropertyNameCharacter(t$2 = e$2.current());) e$2.lastStringValue += codePointToString(t$2), e$2.advance();
				return "" !== e$2.lastStringValue;
			}, he.regexp_eatUnicodePropertyValue = function(e$2) {
				var t$2 = 0;
				for (e$2.lastStringValue = ""; isUnicodePropertyValueCharacter(t$2 = e$2.current());) e$2.lastStringValue += codePointToString(t$2), e$2.advance();
				return "" !== e$2.lastStringValue;
			}, he.regexp_eatLoneUnicodePropertyNameOrValue = function(e$2) {
				return this.regexp_eatUnicodePropertyValue(e$2);
			}, he.regexp_eatCharacterClass = function(e$2) {
				if (e$2.eat(91)) {
					var t$2 = e$2.eat(94), i$1 = this.regexp_classContents(e$2);
					return e$2.eat(93) || e$2.raise("Unterminated character class"), t$2 && 2 === i$1 && e$2.raise("Negated character class may contain strings"), !0;
				}
				return !1;
			}, he.regexp_classContents = function(e$2) {
				return 93 === e$2.current() ? 1 : e$2.switchV ? this.regexp_classSetExpression(e$2) : (this.regexp_nonEmptyClassRanges(e$2), 1);
			}, he.regexp_nonEmptyClassRanges = function(e$2) {
				for (; this.regexp_eatClassAtom(e$2);) {
					var t$2 = e$2.lastIntValue;
					if (e$2.eat(45) && this.regexp_eatClassAtom(e$2)) {
						var i$1 = e$2.lastIntValue;
						!e$2.switchU || -1 !== t$2 && -1 !== i$1 || e$2.raise("Invalid character class"), -1 !== t$2 && -1 !== i$1 && t$2 > i$1 && e$2.raise("Range out of order in character class");
					}
				}
			}, he.regexp_eatClassAtom = function(e$2) {
				var t$2 = e$2.pos;
				if (e$2.eat(92)) {
					if (this.regexp_eatClassEscape(e$2)) return !0;
					if (e$2.switchU) {
						var i$1 = e$2.current();
						(99 === i$1 || isOctalDigit(i$1)) && e$2.raise("Invalid class escape"), e$2.raise("Invalid escape");
					}
					e$2.pos = t$2;
				}
				var s$1 = e$2.current();
				return 93 !== s$1 && (e$2.lastIntValue = s$1, e$2.advance(), !0);
			}, he.regexp_eatClassEscape = function(e$2) {
				var t$2 = e$2.pos;
				if (e$2.eat(98)) return e$2.lastIntValue = 8, !0;
				if (e$2.switchU && e$2.eat(45)) return e$2.lastIntValue = 45, !0;
				if (!e$2.switchU && e$2.eat(99)) {
					if (this.regexp_eatClassControlLetter(e$2)) return !0;
					e$2.pos = t$2;
				}
				return this.regexp_eatCharacterClassEscape(e$2) || this.regexp_eatCharacterEscape(e$2);
			}, he.regexp_classSetExpression = function(e$2) {
				var t$2, i$1 = 1;
				if (this.regexp_eatClassSetRange(e$2));
				else if (t$2 = this.regexp_eatClassSetOperand(e$2)) {
					2 === t$2 && (i$1 = 2);
					for (var s$1 = e$2.pos; e$2.eatChars([38, 38]);) 38 !== e$2.current() && (t$2 = this.regexp_eatClassSetOperand(e$2)) ? 2 !== t$2 && (i$1 = 1) : e$2.raise("Invalid character in character class");
					if (s$1 !== e$2.pos) return i$1;
					for (; e$2.eatChars([45, 45]);) this.regexp_eatClassSetOperand(e$2) || e$2.raise("Invalid character in character class");
					if (s$1 !== e$2.pos) return i$1;
				} else e$2.raise("Invalid character in character class");
				for (;;) if (!this.regexp_eatClassSetRange(e$2)) {
					if (!(t$2 = this.regexp_eatClassSetOperand(e$2))) return i$1;
					2 === t$2 && (i$1 = 2);
				}
			}, he.regexp_eatClassSetRange = function(e$2) {
				var t$2 = e$2.pos;
				if (this.regexp_eatClassSetCharacter(e$2)) {
					var i$1 = e$2.lastIntValue;
					if (e$2.eat(45) && this.regexp_eatClassSetCharacter(e$2)) {
						var s$1 = e$2.lastIntValue;
						return -1 !== i$1 && -1 !== s$1 && i$1 > s$1 && e$2.raise("Range out of order in character class"), !0;
					}
					e$2.pos = t$2;
				}
				return !1;
			}, he.regexp_eatClassSetOperand = function(e$2) {
				return this.regexp_eatClassSetCharacter(e$2) ? 1 : this.regexp_eatClassStringDisjunction(e$2) || this.regexp_eatNestedClass(e$2);
			}, he.regexp_eatNestedClass = function(e$2) {
				var t$2 = e$2.pos;
				if (e$2.eat(91)) {
					var i$1 = e$2.eat(94), s$1 = this.regexp_classContents(e$2);
					if (e$2.eat(93)) return i$1 && 2 === s$1 && e$2.raise("Negated character class may contain strings"), s$1;
					e$2.pos = t$2;
				}
				if (e$2.eat(92)) {
					var r$1 = this.regexp_eatCharacterClassEscape(e$2);
					if (r$1) return r$1;
					e$2.pos = t$2;
				}
				return null;
			}, he.regexp_eatClassStringDisjunction = function(e$2) {
				var t$2 = e$2.pos;
				if (e$2.eatChars([92, 113])) {
					if (e$2.eat(123)) {
						var i$1 = this.regexp_classStringDisjunctionContents(e$2);
						if (e$2.eat(125)) return i$1;
					} else e$2.raise("Invalid escape");
					e$2.pos = t$2;
				}
				return null;
			}, he.regexp_classStringDisjunctionContents = function(e$2) {
				for (var t$2 = this.regexp_classString(e$2); e$2.eat(124);) 2 === this.regexp_classString(e$2) && (t$2 = 2);
				return t$2;
			}, he.regexp_classString = function(e$2) {
				for (var t$2 = 0; this.regexp_eatClassSetCharacter(e$2);) t$2++;
				return 1 === t$2 ? 1 : 2;
			}, he.regexp_eatClassSetCharacter = function(e$2) {
				var t$2 = e$2.pos;
				if (e$2.eat(92)) return !(!this.regexp_eatCharacterEscape(e$2) && !this.regexp_eatClassSetReservedPunctuator(e$2)) || (e$2.eat(98) ? (e$2.lastIntValue = 8, !0) : (e$2.pos = t$2, !1));
				var i$1 = e$2.current();
				return !(i$1 < 0 || i$1 === e$2.lookahead() && function(e$3) {
					return 33 === e$3 || e$3 >= 35 && e$3 <= 38 || e$3 >= 42 && e$3 <= 44 || 46 === e$3 || e$3 >= 58 && e$3 <= 64 || 94 === e$3 || 96 === e$3 || 126 === e$3;
				}(i$1)) && !function(e$3) {
					return 40 === e$3 || 41 === e$3 || 45 === e$3 || 47 === e$3 || e$3 >= 91 && e$3 <= 93 || e$3 >= 123 && e$3 <= 125;
				}(i$1) && (e$2.advance(), e$2.lastIntValue = i$1, !0);
			}, he.regexp_eatClassSetReservedPunctuator = function(e$2) {
				var t$2 = e$2.current();
				return !!function(e$3) {
					return 33 === e$3 || 35 === e$3 || 37 === e$3 || 38 === e$3 || 44 === e$3 || 45 === e$3 || e$3 >= 58 && e$3 <= 62 || 64 === e$3 || 96 === e$3 || 126 === e$3;
				}(t$2) && (e$2.lastIntValue = t$2, e$2.advance(), !0);
			}, he.regexp_eatClassControlLetter = function(e$2) {
				var t$2 = e$2.current();
				return !(!isDecimalDigit(t$2) && 95 !== t$2) && (e$2.lastIntValue = t$2 % 32, e$2.advance(), !0);
			}, he.regexp_eatHexEscapeSequence = function(e$2) {
				var t$2 = e$2.pos;
				if (e$2.eat(120)) {
					if (this.regexp_eatFixedHexDigits(e$2, 2)) return !0;
					e$2.switchU && e$2.raise("Invalid escape"), e$2.pos = t$2;
				}
				return !1;
			}, he.regexp_eatDecimalDigits = function(e$2) {
				var t$2 = e$2.pos, i$1 = 0;
				for (e$2.lastIntValue = 0; isDecimalDigit(i$1 = e$2.current());) e$2.lastIntValue = 10 * e$2.lastIntValue + (i$1 - 48), e$2.advance();
				return e$2.pos !== t$2;
			}, he.regexp_eatHexDigits = function(e$2) {
				var t$2 = e$2.pos, i$1 = 0;
				for (e$2.lastIntValue = 0; isHexDigit(i$1 = e$2.current());) e$2.lastIntValue = 16 * e$2.lastIntValue + hexToInt(i$1), e$2.advance();
				return e$2.pos !== t$2;
			}, he.regexp_eatLegacyOctalEscapeSequence = function(e$2) {
				if (this.regexp_eatOctalDigit(e$2)) {
					var t$2 = e$2.lastIntValue;
					if (this.regexp_eatOctalDigit(e$2)) {
						var i$1 = e$2.lastIntValue;
						t$2 <= 3 && this.regexp_eatOctalDigit(e$2) ? e$2.lastIntValue = 64 * t$2 + 8 * i$1 + e$2.lastIntValue : e$2.lastIntValue = 8 * t$2 + i$1;
					} else e$2.lastIntValue = t$2;
					return !0;
				}
				return !1;
			}, he.regexp_eatOctalDigit = function(e$2) {
				var t$2 = e$2.current();
				return isOctalDigit(t$2) ? (e$2.lastIntValue = t$2 - 48, e$2.advance(), !0) : (e$2.lastIntValue = 0, !1);
			}, he.regexp_eatFixedHexDigits = function(e$2, t$2) {
				var i$1 = e$2.pos;
				e$2.lastIntValue = 0;
				for (var s$1 = 0; s$1 < t$2; ++s$1) {
					var r$1 = e$2.current();
					if (!isHexDigit(r$1)) return e$2.pos = i$1, !1;
					e$2.lastIntValue = 16 * e$2.lastIntValue + hexToInt(r$1), e$2.advance();
				}
				return !0;
			};
			var acorn_Token = function(e$2) {
				this.type = e$2.type, this.value = e$2.value, this.start = e$2.start, this.end = e$2.end, e$2.options.locations && (this.loc = new acorn_SourceLocation(e$2, e$2.startLoc, e$2.endLoc)), e$2.options.ranges && (this.range = [e$2.start, e$2.end]);
			}, ce = acorn_Parser.prototype;
			function stringToBigInt(e$2) {
				return "function" != typeof BigInt ? null : BigInt(e$2.replace(/_/g, ""));
			}
			ce.next = function(e$2) {
				!e$2 && this.type.keyword && this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword), this.options.onToken && this.options.onToken(new acorn_Token(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken();
			}, ce.getToken = function() {
				return this.next(), new acorn_Token(this);
			}, "undefined" != typeof Symbol && (ce[Symbol.iterator] = function() {
				var e$2 = this;
				return { next: function() {
					var t$2 = e$2.getToken();
					return {
						done: t$2.type === f.eof,
						value: t$2
					};
				} };
			}), ce.nextToken = function() {
				var e$2 = this.curContext();
				return e$2 && e$2.preserveSpace || this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length ? this.finishToken(f.eof) : e$2.override ? e$2.override(this) : void this.readToken(this.fullCharCodeAtPos());
			}, ce.readToken = function(e$2) {
				return isIdentifierStart(e$2, this.options.ecmaVersion >= 6) || 92 === e$2 ? this.readWord() : this.getTokenFromCode(e$2);
			}, ce.fullCharCodeAtPos = function() {
				var e$2 = this.input.charCodeAt(this.pos);
				if (e$2 <= 55295 || e$2 >= 56320) return e$2;
				var t$2 = this.input.charCodeAt(this.pos + 1);
				return t$2 <= 56319 || t$2 >= 57344 ? e$2 : (e$2 << 10) + t$2 - 56613888;
			}, ce.skipBlockComment = function() {
				var e$2 = this.options.onComment && this.curPosition(), t$2 = this.pos, i$1 = this.input.indexOf("*/", this.pos += 2);
				if (-1 === i$1 && this.raise(this.pos - 2, "Unterminated comment"), this.pos = i$1 + 2, this.options.locations) for (var s$1 = void 0, r$1 = t$2; (s$1 = nextLineBreak(this.input, r$1, this.pos)) > -1;) ++this.curLine, r$1 = this.lineStart = s$1;
				this.options.onComment && this.options.onComment(!0, this.input.slice(t$2 + 2, i$1), t$2, this.pos, e$2, this.curPosition());
			}, ce.skipLineComment = function(e$2) {
				for (var t$2 = this.pos, i$1 = this.options.onComment && this.curPosition(), s$1 = this.input.charCodeAt(this.pos += e$2); this.pos < this.input.length && !isNewLine(s$1);) s$1 = this.input.charCodeAt(++this.pos);
				this.options.onComment && this.options.onComment(!1, this.input.slice(t$2 + e$2, this.pos), t$2, this.pos, i$1, this.curPosition());
			}, ce.skipSpace = function() {
				e: for (; this.pos < this.input.length;) {
					var e$2 = this.input.charCodeAt(this.pos);
					switch (e$2) {
						case 32:
						case 160:
							++this.pos;
							break;
						case 13: 10 === this.input.charCodeAt(this.pos + 1) && ++this.pos;
						case 10:
						case 8232:
						case 8233:
							++this.pos, this.options.locations && (++this.curLine, this.lineStart = this.pos);
							break;
						case 47:
							switch (this.input.charCodeAt(this.pos + 1)) {
								case 42:
									this.skipBlockComment();
									break;
								case 47:
									this.skipLineComment(2);
									break;
								default: break e;
							}
							break;
						default:
							if (!(e$2 > 8 && e$2 < 14 || e$2 >= 5760 && x.test(String.fromCharCode(e$2)))) break e;
							++this.pos;
					}
				}
			}, ce.finishToken = function(e$2, t$2) {
				this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());
				var i$1 = this.type;
				this.type = e$2, this.value = t$2, this.updateContext(i$1);
			}, ce.readToken_dot = function() {
				var e$2 = this.input.charCodeAt(this.pos + 1);
				if (e$2 >= 48 && e$2 <= 57) return this.readNumber(!0);
				var t$2 = this.input.charCodeAt(this.pos + 2);
				return this.options.ecmaVersion >= 6 && 46 === e$2 && 46 === t$2 ? (this.pos += 3, this.finishToken(f.ellipsis)) : (++this.pos, this.finishToken(f.dot));
			}, ce.readToken_slash = function() {
				var e$2 = this.input.charCodeAt(this.pos + 1);
				return this.exprAllowed ? (++this.pos, this.readRegexp()) : 61 === e$2 ? this.finishOp(f.assign, 2) : this.finishOp(f.slash, 1);
			}, ce.readToken_mult_modulo_exp = function(e$2) {
				var t$2 = this.input.charCodeAt(this.pos + 1), i$1 = 1, s$1 = 42 === e$2 ? f.star : f.modulo;
				return this.options.ecmaVersion >= 7 && 42 === e$2 && 42 === t$2 && (++i$1, s$1 = f.starstar, t$2 = this.input.charCodeAt(this.pos + 2)), 61 === t$2 ? this.finishOp(f.assign, i$1 + 1) : this.finishOp(s$1, i$1);
			}, ce.readToken_pipe_amp = function(e$2) {
				var t$2 = this.input.charCodeAt(this.pos + 1);
				if (t$2 === e$2) {
					if (this.options.ecmaVersion >= 12) {
						if (61 === this.input.charCodeAt(this.pos + 2)) return this.finishOp(f.assign, 3);
					}
					return this.finishOp(124 === e$2 ? f.logicalOR : f.logicalAND, 2);
				}
				return 61 === t$2 ? this.finishOp(f.assign, 2) : this.finishOp(124 === e$2 ? f.bitwiseOR : f.bitwiseAND, 1);
			}, ce.readToken_caret = function() {
				return 61 === this.input.charCodeAt(this.pos + 1) ? this.finishOp(f.assign, 2) : this.finishOp(f.bitwiseXOR, 1);
			}, ce.readToken_plus_min = function(e$2) {
				var t$2 = this.input.charCodeAt(this.pos + 1);
				return t$2 === e$2 ? 45 !== t$2 || this.inModule || 62 !== this.input.charCodeAt(this.pos + 2) || 0 !== this.lastTokEnd && !m.test(this.input.slice(this.lastTokEnd, this.pos)) ? this.finishOp(f.incDec, 2) : (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : 61 === t$2 ? this.finishOp(f.assign, 2) : this.finishOp(f.plusMin, 1);
			}, ce.readToken_lt_gt = function(e$2) {
				var t$2 = this.input.charCodeAt(this.pos + 1), i$1 = 1;
				return t$2 === e$2 ? (i$1 = 62 === e$2 && 62 === this.input.charCodeAt(this.pos + 2) ? 3 : 2, 61 === this.input.charCodeAt(this.pos + i$1) ? this.finishOp(f.assign, i$1 + 1) : this.finishOp(f.bitShift, i$1)) : 33 !== t$2 || 60 !== e$2 || this.inModule || 45 !== this.input.charCodeAt(this.pos + 2) || 45 !== this.input.charCodeAt(this.pos + 3) ? (61 === t$2 && (i$1 = 2), this.finishOp(f.relational, i$1)) : (this.skipLineComment(4), this.skipSpace(), this.nextToken());
			}, ce.readToken_eq_excl = function(e$2) {
				var t$2 = this.input.charCodeAt(this.pos + 1);
				return 61 === t$2 ? this.finishOp(f.equality, 61 === this.input.charCodeAt(this.pos + 2) ? 3 : 2) : 61 === e$2 && 62 === t$2 && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(f.arrow)) : this.finishOp(61 === e$2 ? f.eq : f.prefix, 1);
			}, ce.readToken_question = function() {
				var e$2 = this.options.ecmaVersion;
				if (e$2 >= 11) {
					var t$2 = this.input.charCodeAt(this.pos + 1);
					if (46 === t$2) {
						var i$1 = this.input.charCodeAt(this.pos + 2);
						if (i$1 < 48 || i$1 > 57) return this.finishOp(f.questionDot, 2);
					}
					if (63 === t$2) {
						if (e$2 >= 12) {
							if (61 === this.input.charCodeAt(this.pos + 2)) return this.finishOp(f.assign, 3);
						}
						return this.finishOp(f.coalesce, 2);
					}
				}
				return this.finishOp(f.question, 1);
			}, ce.readToken_numberSign = function() {
				var e$2 = 35;
				if (this.options.ecmaVersion >= 13 && (++this.pos, isIdentifierStart(e$2 = this.fullCharCodeAtPos(), !0) || 92 === e$2)) return this.finishToken(f.privateId, this.readWord1());
				this.raise(this.pos, "Unexpected character '" + codePointToString(e$2) + "'");
			}, ce.getTokenFromCode = function(e$2) {
				switch (e$2) {
					case 46: return this.readToken_dot();
					case 40: return ++this.pos, this.finishToken(f.parenL);
					case 41: return ++this.pos, this.finishToken(f.parenR);
					case 59: return ++this.pos, this.finishToken(f.semi);
					case 44: return ++this.pos, this.finishToken(f.comma);
					case 91: return ++this.pos, this.finishToken(f.bracketL);
					case 93: return ++this.pos, this.finishToken(f.bracketR);
					case 123: return ++this.pos, this.finishToken(f.braceL);
					case 125: return ++this.pos, this.finishToken(f.braceR);
					case 58: return ++this.pos, this.finishToken(f.colon);
					case 96:
						if (this.options.ecmaVersion < 6) break;
						return ++this.pos, this.finishToken(f.backQuote);
					case 48:
						var t$2 = this.input.charCodeAt(this.pos + 1);
						if (120 === t$2 || 88 === t$2) return this.readRadixNumber(16);
						if (this.options.ecmaVersion >= 6) {
							if (111 === t$2 || 79 === t$2) return this.readRadixNumber(8);
							if (98 === t$2 || 66 === t$2) return this.readRadixNumber(2);
						}
					case 49:
					case 50:
					case 51:
					case 52:
					case 53:
					case 54:
					case 55:
					case 56:
					case 57: return this.readNumber(!1);
					case 34:
					case 39: return this.readString(e$2);
					case 47: return this.readToken_slash();
					case 37:
					case 42: return this.readToken_mult_modulo_exp(e$2);
					case 124:
					case 38: return this.readToken_pipe_amp(e$2);
					case 94: return this.readToken_caret();
					case 43:
					case 45: return this.readToken_plus_min(e$2);
					case 60:
					case 62: return this.readToken_lt_gt(e$2);
					case 61:
					case 33: return this.readToken_eq_excl(e$2);
					case 63: return this.readToken_question();
					case 126: return this.finishOp(f.prefix, 1);
					case 35: return this.readToken_numberSign();
				}
				this.raise(this.pos, "Unexpected character '" + codePointToString(e$2) + "'");
			}, ce.finishOp = function(e$2, t$2) {
				var i$1 = this.input.slice(this.pos, this.pos + t$2);
				return this.pos += t$2, this.finishToken(e$2, i$1);
			}, ce.readRegexp = function() {
				for (var e$2, t$2, i$1 = this.pos;;) {
					this.pos >= this.input.length && this.raise(i$1, "Unterminated regular expression");
					var s$1 = this.input.charAt(this.pos);
					if (m.test(s$1) && this.raise(i$1, "Unterminated regular expression"), e$2) e$2 = !1;
					else {
						if ("[" === s$1) t$2 = !0;
						else if ("]" === s$1 && t$2) t$2 = !1;
						else if ("/" === s$1 && !t$2) break;
						e$2 = "\\" === s$1;
					}
					++this.pos;
				}
				var r$1 = this.input.slice(i$1, this.pos);
				++this.pos;
				var n$1 = this.pos, a$1 = this.readWord1();
				this.containsEsc && this.unexpected(n$1);
				var o$1 = this.regexpState || (this.regexpState = new acorn_RegExpValidationState(this));
				o$1.reset(i$1, r$1, a$1), this.validateRegExpFlags(o$1), this.validateRegExpPattern(o$1);
				var h$1 = null;
				try {
					h$1 = new RegExp(r$1, a$1);
				} catch (e$3) {}
				return this.finishToken(f.regexp, {
					pattern: r$1,
					flags: a$1,
					value: h$1
				});
			}, ce.readInt = function(e$2, t$2, i$1) {
				for (var s$1 = this.options.ecmaVersion >= 12 && void 0 === t$2, r$1 = i$1 && 48 === this.input.charCodeAt(this.pos), n$1 = this.pos, a$1 = 0, o$1 = 0, h$1 = 0, c$1 = null == t$2 ? Infinity : t$2; h$1 < c$1; ++h$1, ++this.pos) {
					var p$1 = this.input.charCodeAt(this.pos), l$1 = void 0;
					if (s$1 && 95 === p$1) r$1 && this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals"), 95 === o$1 && this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore"), 0 === h$1 && this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits"), o$1 = p$1;
					else {
						if ((l$1 = p$1 >= 97 ? p$1 - 97 + 10 : p$1 >= 65 ? p$1 - 65 + 10 : p$1 >= 48 && p$1 <= 57 ? p$1 - 48 : Infinity) >= e$2) break;
						o$1 = p$1, a$1 = a$1 * e$2 + l$1;
					}
				}
				return s$1 && 95 === o$1 && this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits"), this.pos === n$1 || null != t$2 && this.pos - n$1 !== t$2 ? null : a$1;
			}, ce.readRadixNumber = function(e$2) {
				var t$2 = this.pos;
				this.pos += 2;
				var i$1 = this.readInt(e$2);
				return i$1 ?? this.raise(this.start + 2, "Expected number in radix " + e$2), this.options.ecmaVersion >= 11 && 110 === this.input.charCodeAt(this.pos) ? (i$1 = stringToBigInt(this.input.slice(t$2, this.pos)), ++this.pos) : isIdentifierStart(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(f.num, i$1);
			}, ce.readNumber = function(e$2) {
				var t$2 = this.pos;
				e$2 || null !== this.readInt(10, void 0, !0) || this.raise(t$2, "Invalid number");
				var i$1 = this.pos - t$2 >= 2 && 48 === this.input.charCodeAt(t$2);
				i$1 && this.strict && this.raise(t$2, "Invalid number");
				var s$1 = this.input.charCodeAt(this.pos);
				if (!i$1 && !e$2 && this.options.ecmaVersion >= 11 && 110 === s$1) {
					var r$1 = stringToBigInt(this.input.slice(t$2, this.pos));
					return ++this.pos, isIdentifierStart(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(f.num, r$1);
				}
				i$1 && /[89]/.test(this.input.slice(t$2, this.pos)) && (i$1 = !1), 46 !== s$1 || i$1 || (++this.pos, this.readInt(10), s$1 = this.input.charCodeAt(this.pos)), 69 !== s$1 && 101 !== s$1 || i$1 || (43 !== (s$1 = this.input.charCodeAt(++this.pos)) && 45 !== s$1 || ++this.pos, null === this.readInt(10) && this.raise(t$2, "Invalid number")), isIdentifierStart(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
				var n$1, a$1 = (n$1 = this.input.slice(t$2, this.pos), i$1 ? parseInt(n$1, 8) : parseFloat(n$1.replace(/_/g, "")));
				return this.finishToken(f.num, a$1);
			}, ce.readCodePoint = function() {
				var e$2;
				if (123 === this.input.charCodeAt(this.pos)) {
					this.options.ecmaVersion < 6 && this.unexpected();
					var t$2 = ++this.pos;
					e$2 = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, e$2 > 1114111 && this.invalidStringToken(t$2, "Code point out of bounds");
				} else e$2 = this.readHexChar(4);
				return e$2;
			}, ce.readString = function(e$2) {
				for (var t$2 = "", i$1 = ++this.pos;;) {
					this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
					var s$1 = this.input.charCodeAt(this.pos);
					if (s$1 === e$2) break;
					92 === s$1 ? (t$2 += this.input.slice(i$1, this.pos), t$2 += this.readEscapedChar(!1), i$1 = this.pos) : 8232 === s$1 || 8233 === s$1 ? (this.options.ecmaVersion < 10 && this.raise(this.start, "Unterminated string constant"), ++this.pos, this.options.locations && (this.curLine++, this.lineStart = this.pos)) : (isNewLine(s$1) && this.raise(this.start, "Unterminated string constant"), ++this.pos);
				}
				return t$2 += this.input.slice(i$1, this.pos++), this.finishToken(f.string, t$2);
			};
			var pe = {};
			ce.tryReadTemplateToken = function() {
				this.inTemplateElement = !0;
				try {
					this.readTmplToken();
				} catch (e$2) {
					if (e$2 !== pe) throw e$2;
					this.readInvalidTemplateToken();
				}
				this.inTemplateElement = !1;
			}, ce.invalidStringToken = function(e$2, t$2) {
				if (this.inTemplateElement && this.options.ecmaVersion >= 9) throw pe;
				this.raise(e$2, t$2);
			}, ce.readTmplToken = function() {
				for (var e$2 = "", t$2 = this.pos;;) {
					this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
					var i$1 = this.input.charCodeAt(this.pos);
					if (96 === i$1 || 36 === i$1 && 123 === this.input.charCodeAt(this.pos + 1)) return this.pos !== this.start || this.type !== f.template && this.type !== f.invalidTemplate ? (e$2 += this.input.slice(t$2, this.pos), this.finishToken(f.template, e$2)) : 36 === i$1 ? (this.pos += 2, this.finishToken(f.dollarBraceL)) : (++this.pos, this.finishToken(f.backQuote));
					if (92 === i$1) e$2 += this.input.slice(t$2, this.pos), e$2 += this.readEscapedChar(!0), t$2 = this.pos;
					else if (isNewLine(i$1)) {
						switch (e$2 += this.input.slice(t$2, this.pos), ++this.pos, i$1) {
							case 13: 10 === this.input.charCodeAt(this.pos) && ++this.pos;
							case 10:
								e$2 += "\n";
								break;
							default: e$2 += String.fromCharCode(i$1);
						}
						this.options.locations && (++this.curLine, this.lineStart = this.pos), t$2 = this.pos;
					} else ++this.pos;
				}
			}, ce.readInvalidTemplateToken = function() {
				for (; this.pos < this.input.length; this.pos++) switch (this.input[this.pos]) {
					case "\\":
						++this.pos;
						break;
					case "$": if ("{" !== this.input[this.pos + 1]) break;
					case "`": return this.finishToken(f.invalidTemplate, this.input.slice(this.start, this.pos));
					case "\r": "\n" === this.input[this.pos + 1] && ++this.pos;
					case "\n":
					case "\u2028":
					case "\u2029": ++this.curLine, this.lineStart = this.pos + 1;
				}
				this.raise(this.start, "Unterminated template");
			}, ce.readEscapedChar = function(e$2) {
				var t$2 = this.input.charCodeAt(++this.pos);
				switch (++this.pos, t$2) {
					case 110: return "\n";
					case 114: return "\r";
					case 120: return String.fromCharCode(this.readHexChar(2));
					case 117: return codePointToString(this.readCodePoint());
					case 116: return "	";
					case 98: return "\b";
					case 118: return "\v";
					case 102: return "\f";
					case 13: 10 === this.input.charCodeAt(this.pos) && ++this.pos;
					case 10: return this.options.locations && (this.lineStart = this.pos, ++this.curLine), "";
					case 56:
					case 57: if (this.strict && this.invalidStringToken(this.pos - 1, "Invalid escape sequence"), e$2) {
						var i$1 = this.pos - 1;
						this.invalidStringToken(i$1, "Invalid escape sequence in template string");
					}
					default:
						if (t$2 >= 48 && t$2 <= 55) {
							var s$1 = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0], r$1 = parseInt(s$1, 8);
							return r$1 > 255 && (s$1 = s$1.slice(0, -1), r$1 = parseInt(s$1, 8)), this.pos += s$1.length - 1, t$2 = this.input.charCodeAt(this.pos), "0" === s$1 && 56 !== t$2 && 57 !== t$2 || !this.strict && !e$2 || this.invalidStringToken(this.pos - 1 - s$1.length, e$2 ? "Octal literal in template string" : "Octal literal in strict mode"), String.fromCharCode(r$1);
						}
						return isNewLine(t$2) ? (this.options.locations && (this.lineStart = this.pos, ++this.curLine), "") : String.fromCharCode(t$2);
				}
			}, ce.readHexChar = function(e$2) {
				var t$2 = this.pos, i$1 = this.readInt(16, e$2);
				return null === i$1 && this.invalidStringToken(t$2, "Bad character escape sequence"), i$1;
			}, ce.readWord1 = function() {
				this.containsEsc = !1;
				for (var e$2 = "", t$2 = !0, i$1 = this.pos, s$1 = this.options.ecmaVersion >= 6; this.pos < this.input.length;) {
					var r$1 = this.fullCharCodeAtPos();
					if (isIdentifierChar(r$1, s$1)) this.pos += r$1 <= 65535 ? 1 : 2;
					else {
						if (92 !== r$1) break;
						this.containsEsc = !0, e$2 += this.input.slice(i$1, this.pos);
						var n$1 = this.pos;
						117 !== this.input.charCodeAt(++this.pos) && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos;
						var a$1 = this.readCodePoint();
						(t$2 ? isIdentifierStart : isIdentifierChar)(a$1, s$1) || this.invalidStringToken(n$1, "Invalid Unicode escape"), e$2 += codePointToString(a$1), i$1 = this.pos;
					}
					t$2 = !1;
				}
				return e$2 + this.input.slice(i$1, this.pos);
			}, ce.readWord = function() {
				var e$2 = this.readWord1(), t$2 = f.name;
				return this.keywords.test(e$2) && (t$2 = d[e$2]), this.finishToken(t$2, e$2);
			};
			acorn_Parser.acorn = {
				Parser: acorn_Parser,
				version: "8.15.0",
				defaultOptions: I,
				Position: acorn_Position,
				SourceLocation: acorn_SourceLocation,
				getLineInfo,
				Node: acorn_Node,
				TokenType: acorn_TokenType,
				tokTypes: f,
				keywordTypes: d,
				TokContext: acorn_TokContext,
				tokContexts: F,
				isIdentifierChar,
				isIdentifierStart,
				Token: acorn_Token,
				isNewLine,
				lineBreak: m,
				lineBreakG: g,
				nonASCIIwhitespace: x
			};
			const le = __require("node:module"), ue = __require("node:fs");
			String.fromCharCode;
			const de = /\/$|\/\?|\/#/, fe = /^\.?\//;
			function hasTrailingSlash(e$2 = "", t$2) {
				return t$2 ? de.test(e$2) : e$2.endsWith("/");
			}
			function withTrailingSlash(e$2 = "", t$2) {
				if (!t$2) return e$2.endsWith("/") ? e$2 : e$2 + "/";
				if (hasTrailingSlash(e$2, !0)) return e$2 || "/";
				let i$1 = e$2, s$1 = "";
				const r$1 = e$2.indexOf("#");
				if (-1 !== r$1 && (i$1 = e$2.slice(0, r$1), s$1 = e$2.slice(r$1), !i$1)) return s$1;
				const [n$1, ...a$1] = i$1.split("?");
				return n$1 + "/" + (a$1.length > 0 ? `?${a$1.join("?")}` : "") + s$1;
			}
			function isNonEmptyURL(e$2) {
				return e$2 && "/" !== e$2;
			}
			function dist_joinURL(e$2, ...t$2) {
				let i$1 = e$2 || "";
				for (const e$3 of t$2.filter((e$4) => isNonEmptyURL(e$4))) if (i$1) {
					const t$3 = e$3.replace(fe, "");
					i$1 = withTrailingSlash(i$1) + t$3;
				} else i$1 = e$3;
				return i$1;
			}
			const me = /^[A-Za-z]:\//;
			function pathe_M_eThtNZ_normalizeWindowsPath(e$2 = "") {
				return e$2 ? e$2.replace(/\\/g, "/").replace(me, (e$3) => e$3.toUpperCase()) : e$2;
			}
			const ge = /^[/\\]{2}/, xe = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/, ve = /^[A-Za-z]:$/, ye = /.(\.[^./]+|\.)$/, pathe_M_eThtNZ_normalize = function(e$2) {
				if (0 === e$2.length) return ".";
				const t$2 = (e$2 = pathe_M_eThtNZ_normalizeWindowsPath(e$2)).match(ge), i$1 = isAbsolute(e$2), s$1 = "/" === e$2[e$2.length - 1];
				return 0 === (e$2 = normalizeString(e$2, !i$1)).length ? i$1 ? "/" : s$1 ? "./" : "." : (s$1 && (e$2 += "/"), ve.test(e$2) && (e$2 += "/"), t$2 ? i$1 ? `//${e$2}` : `//./${e$2}` : i$1 && !isAbsolute(e$2) ? `/${e$2}` : e$2);
			}, pathe_M_eThtNZ_join = function(...e$2) {
				let t$2 = "";
				for (const i$1 of e$2) if (i$1) if (t$2.length > 0) {
					const e$3 = "/" === t$2[t$2.length - 1], s$1 = "/" === i$1[0];
					t$2 += e$3 && s$1 ? i$1.slice(1) : e$3 || s$1 ? i$1 : `/${i$1}`;
				} else t$2 += i$1;
				return pathe_M_eThtNZ_normalize(t$2);
			};
			function pathe_M_eThtNZ_cwd() {
				return "undefined" != typeof process && "function" == typeof process.cwd ? process.cwd().replace(/\\/g, "/") : "/";
			}
			const pathe_M_eThtNZ_resolve = function(...e$2) {
				let t$2 = "", i$1 = !1;
				for (let s$1 = (e$2 = e$2.map((e$3) => pathe_M_eThtNZ_normalizeWindowsPath(e$3))).length - 1; s$1 >= -1 && !i$1; s$1--) {
					const r$1 = s$1 >= 0 ? e$2[s$1] : pathe_M_eThtNZ_cwd();
					r$1 && 0 !== r$1.length && (t$2 = `${r$1}/${t$2}`, i$1 = isAbsolute(r$1));
				}
				return t$2 = normalizeString(t$2, !i$1), i$1 && !isAbsolute(t$2) ? `/${t$2}` : t$2.length > 0 ? t$2 : ".";
			};
			function normalizeString(e$2, t$2) {
				let i$1 = "", s$1 = 0, r$1 = -1, n$1 = 0, a$1 = null;
				for (let o$1 = 0; o$1 <= e$2.length; ++o$1) {
					if (o$1 < e$2.length) a$1 = e$2[o$1];
					else {
						if ("/" === a$1) break;
						a$1 = "/";
					}
					if ("/" === a$1) {
						if (r$1 === o$1 - 1 || 1 === n$1);
						else if (2 === n$1) {
							if (i$1.length < 2 || 2 !== s$1 || "." !== i$1[i$1.length - 1] || "." !== i$1[i$1.length - 2]) {
								if (i$1.length > 2) {
									const e$3 = i$1.lastIndexOf("/");
									-1 === e$3 ? (i$1 = "", s$1 = 0) : (i$1 = i$1.slice(0, e$3), s$1 = i$1.length - 1 - i$1.lastIndexOf("/")), r$1 = o$1, n$1 = 0;
									continue;
								}
								if (i$1.length > 0) {
									i$1 = "", s$1 = 0, r$1 = o$1, n$1 = 0;
									continue;
								}
							}
							t$2 && (i$1 += i$1.length > 0 ? "/.." : "..", s$1 = 2);
						} else i$1.length > 0 ? i$1 += `/${e$2.slice(r$1 + 1, o$1)}` : i$1 = e$2.slice(r$1 + 1, o$1), s$1 = o$1 - r$1 - 1;
						r$1 = o$1, n$1 = 0;
					} else "." === a$1 && -1 !== n$1 ? ++n$1 : n$1 = -1;
				}
				return i$1;
			}
			const isAbsolute = function(e$2) {
				return xe.test(e$2);
			}, extname = function(e$2) {
				if (".." === e$2) return "";
				const t$2 = ye.exec(pathe_M_eThtNZ_normalizeWindowsPath(e$2));
				return t$2 && t$2[1] || "";
			}, pathe_M_eThtNZ_dirname = function(e$2) {
				const t$2 = pathe_M_eThtNZ_normalizeWindowsPath(e$2).replace(/\/$/, "").split("/").slice(0, -1);
				return 1 === t$2.length && ve.test(t$2[0]) && (t$2[0] += "/"), t$2.join("/") || (isAbsolute(e$2) ? "/" : ".");
			}, basename = function(e$2, t$2) {
				const i$1 = pathe_M_eThtNZ_normalizeWindowsPath(e$2).split("/");
				let s$1 = "";
				for (let e$3 = i$1.length - 1; e$3 >= 0; e$3--) {
					const t$3 = i$1[e$3];
					if (t$3) {
						s$1 = t$3;
						break;
					}
				}
				return t$2 && s$1.endsWith(t$2) ? s$1.slice(0, -t$2.length) : s$1;
			}, _e = __require("node:url"), Ee = __require("node:assert"), be = __require("node:process"), Se = __require("node:path"), ke = __require("node:v8"), we = __require("node:util"), Ie = new Set(le.builtinModules);
			function normalizeSlash(e$2) {
				return e$2.replace(/\\/g, "/");
			}
			const Ce = {}.hasOwnProperty, Re = /^([A-Z][a-z\d]*)+$/, Pe = new Set([
				"string",
				"function",
				"number",
				"object",
				"Function",
				"Object",
				"boolean",
				"bigint",
				"symbol"
			]), Te = {};
			function formatList(e$2, t$2 = "and") {
				return e$2.length < 3 ? e$2.join(` ${t$2} `) : `${e$2.slice(0, -1).join(", ")}, ${t$2} ${e$2[e$2.length - 1]}`;
			}
			const Ae = /* @__PURE__ */ new Map();
			let Ne;
			function createError(e$2, t$2, i$1) {
				return Ae.set(e$2, t$2), function(e$3, t$3) {
					return NodeError;
					function NodeError(...i$2) {
						const s$1 = Error.stackTraceLimit;
						isErrorStackTraceLimitWritable() && (Error.stackTraceLimit = 0);
						const r$1 = new e$3();
						isErrorStackTraceLimitWritable() && (Error.stackTraceLimit = s$1);
						const n$1 = function(e$4, t$4, i$3) {
							const s$2 = Ae.get(e$4);
							if (Ee(void 0 !== s$2, "expected `message` to be found"), "function" == typeof s$2) return Ee(s$2.length <= t$4.length, `Code: ${e$4}; The provided arguments length (${t$4.length}) does not match the required ones (${s$2.length}).`), Reflect.apply(s$2, i$3, t$4);
							const r$2 = /%[dfijoOs]/g;
							let n$2 = 0;
							for (; null !== r$2.exec(s$2);) n$2++;
							return Ee(n$2 === t$4.length, `Code: ${e$4}; The provided arguments length (${t$4.length}) does not match the required ones (${n$2}).`), 0 === t$4.length ? s$2 : (t$4.unshift(s$2), Reflect.apply(we.format, null, t$4));
						}(t$3, i$2, r$1);
						return Object.defineProperties(r$1, {
							message: {
								value: n$1,
								enumerable: !1,
								writable: !0,
								configurable: !0
							},
							toString: {
								value() {
									return `${this.name} [${t$3}]: ${this.message}`;
								},
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), Le(r$1), r$1.code = t$3, r$1;
					}
				}(i$1, e$2);
			}
			function isErrorStackTraceLimitWritable() {
				try {
					if (ke.startupSnapshot.isBuildingSnapshot()) return !1;
				} catch {}
				const e$2 = Object.getOwnPropertyDescriptor(Error, "stackTraceLimit");
				return void 0 === e$2 ? Object.isExtensible(Error) : Ce.call(e$2, "writable") && void 0 !== e$2.writable ? e$2.writable : void 0 !== e$2.set;
			}
			Te.ERR_INVALID_ARG_TYPE = createError("ERR_INVALID_ARG_TYPE", (e$2, t$2, i$1) => {
				Ee("string" == typeof e$2, "'name' must be a string"), Array.isArray(t$2) || (t$2 = [t$2]);
				let s$1 = "The ";
				if (e$2.endsWith(" argument")) s$1 += `${e$2} `;
				else {
					const t$3 = e$2.includes(".") ? "property" : "argument";
					s$1 += `"${e$2}" ${t$3} `;
				}
				s$1 += "must be ";
				const r$1 = [], n$1 = [], a$1 = [];
				for (const e$3 of t$2) Ee("string" == typeof e$3, "All expected entries have to be of type string"), Pe.has(e$3) ? r$1.push(e$3.toLowerCase()) : null === Re.exec(e$3) ? (Ee("object" !== e$3, "The value \"object\" should be written as \"Object\""), a$1.push(e$3)) : n$1.push(e$3);
				if (n$1.length > 0) {
					const e$3 = r$1.indexOf("object");
					-1 !== e$3 && (r$1.slice(e$3, 1), n$1.push("Object"));
				}
				return r$1.length > 0 && (s$1 += `${r$1.length > 1 ? "one of type" : "of type"} ${formatList(r$1, "or")}`, (n$1.length > 0 || a$1.length > 0) && (s$1 += " or ")), n$1.length > 0 && (s$1 += `an instance of ${formatList(n$1, "or")}`, a$1.length > 0 && (s$1 += " or ")), a$1.length > 0 && (a$1.length > 1 ? s$1 += `one of ${formatList(a$1, "or")}` : (a$1[0].toLowerCase() !== a$1[0] && (s$1 += "an "), s$1 += `${a$1[0]}`)), s$1 += `. Received ${function(e$3) {
					if (null == e$3) return String(e$3);
					if ("function" == typeof e$3 && e$3.name) return `function ${e$3.name}`;
					if ("object" == typeof e$3) return e$3.constructor && e$3.constructor.name ? `an instance of ${e$3.constructor.name}` : `${(0, we.inspect)(e$3, { depth: -1 })}`;
					let t$3 = (0, we.inspect)(e$3, { colors: !1 });
					t$3.length > 28 && (t$3 = `${t$3.slice(0, 25)}...`);
					return `type ${typeof e$3} (${t$3})`;
				}(i$1)}`, s$1;
			}, TypeError), Te.ERR_INVALID_MODULE_SPECIFIER = createError("ERR_INVALID_MODULE_SPECIFIER", (e$2, t$2, i$1 = void 0) => `Invalid module "${e$2}" ${t$2}${i$1 ? ` imported from ${i$1}` : ""}`, TypeError), Te.ERR_INVALID_PACKAGE_CONFIG = createError("ERR_INVALID_PACKAGE_CONFIG", (e$2, t$2, i$1) => `Invalid package config ${e$2}${t$2 ? ` while importing ${t$2}` : ""}${i$1 ? `. ${i$1}` : ""}`, Error), Te.ERR_INVALID_PACKAGE_TARGET = createError("ERR_INVALID_PACKAGE_TARGET", (e$2, t$2, i$1, s$1 = !1, r$1 = void 0) => {
				const n$1 = "string" == typeof i$1 && !s$1 && i$1.length > 0 && !i$1.startsWith("./");
				return "." === t$2 ? (Ee(!1 === s$1), `Invalid "exports" main target ${JSON.stringify(i$1)} defined in the package config ${e$2}package.json${r$1 ? ` imported from ${r$1}` : ""}${n$1 ? "; targets must start with \"./\"" : ""}`) : `Invalid "${s$1 ? "imports" : "exports"}" target ${JSON.stringify(i$1)} defined for '${t$2}' in the package config ${e$2}package.json${r$1 ? ` imported from ${r$1}` : ""}${n$1 ? "; targets must start with \"./\"" : ""}`;
			}, Error), Te.ERR_MODULE_NOT_FOUND = createError("ERR_MODULE_NOT_FOUND", (e$2, t$2, i$1 = !1) => `Cannot find ${i$1 ? "module" : "package"} '${e$2}' imported from ${t$2}`, Error), Te.ERR_NETWORK_IMPORT_DISALLOWED = createError("ERR_NETWORK_IMPORT_DISALLOWED", "import of '%s' by %s is not supported: %s", Error), Te.ERR_PACKAGE_IMPORT_NOT_DEFINED = createError("ERR_PACKAGE_IMPORT_NOT_DEFINED", (e$2, t$2, i$1) => `Package import specifier "${e$2}" is not defined${t$2 ? ` in package ${t$2}package.json` : ""} imported from ${i$1}`, TypeError), Te.ERR_PACKAGE_PATH_NOT_EXPORTED = createError("ERR_PACKAGE_PATH_NOT_EXPORTED", (e$2, t$2, i$1 = void 0) => "." === t$2 ? `No "exports" main defined in ${e$2}package.json${i$1 ? ` imported from ${i$1}` : ""}` : `Package subpath '${t$2}' is not defined by "exports" in ${e$2}package.json${i$1 ? ` imported from ${i$1}` : ""}`, Error), Te.ERR_UNSUPPORTED_DIR_IMPORT = createError("ERR_UNSUPPORTED_DIR_IMPORT", "Directory import '%s' is not supported resolving ES modules imported from %s", Error), Te.ERR_UNSUPPORTED_RESOLVE_REQUEST = createError("ERR_UNSUPPORTED_RESOLVE_REQUEST", "Failed to resolve module specifier \"%s\" from \"%s\": Invalid relative URL or base scheme is not hierarchical.", TypeError), Te.ERR_UNKNOWN_FILE_EXTENSION = createError("ERR_UNKNOWN_FILE_EXTENSION", (e$2, t$2) => `Unknown file extension "${e$2}" for ${t$2}`, TypeError), Te.ERR_INVALID_ARG_VALUE = createError("ERR_INVALID_ARG_VALUE", (e$2, t$2, i$1 = "is invalid") => {
				let s$1 = (0, we.inspect)(t$2);
				s$1.length > 128 && (s$1 = `${s$1.slice(0, 128)}...`);
				return `The ${e$2.includes(".") ? "property" : "argument"} '${e$2}' ${i$1}. Received ${s$1}`;
			}, TypeError);
			const Le = function(e$2) {
				const t$2 = "__node_internal_" + e$2.name;
				return Object.defineProperty(e$2, "name", { value: t$2 }), e$2;
			}(function(e$2) {
				const t$2 = isErrorStackTraceLimitWritable();
				return t$2 && (Ne = Error.stackTraceLimit, Error.stackTraceLimit = Number.POSITIVE_INFINITY), Error.captureStackTrace(e$2), t$2 && (Error.stackTraceLimit = Ne), e$2;
			});
			const Oe = {}.hasOwnProperty, { ERR_INVALID_PACKAGE_CONFIG: De } = Te, Ve = /* @__PURE__ */ new Map();
			function read(e$2, { base: t$2, specifier: i$1 }) {
				const s$1 = Ve.get(e$2);
				if (s$1) return s$1;
				let r$1;
				try {
					r$1 = ue.readFileSync(Se.toNamespacedPath(e$2), "utf8");
				} catch (e$3) {
					const t$3 = e$3;
					if ("ENOENT" !== t$3.code) throw t$3;
				}
				const n$1 = {
					exists: !1,
					pjsonPath: e$2,
					main: void 0,
					name: void 0,
					type: "none",
					exports: void 0,
					imports: void 0
				};
				if (void 0 !== r$1) {
					let s$2;
					try {
						s$2 = JSON.parse(r$1);
					} catch (s$3) {
						const r$2 = s$3, n$2 = new De(e$2, (t$2 ? `"${i$1}" from ` : "") + (0, _e.fileURLToPath)(t$2 || i$1), r$2.message);
						throw n$2.cause = r$2, n$2;
					}
					n$1.exists = !0, Oe.call(s$2, "name") && "string" == typeof s$2.name && (n$1.name = s$2.name), Oe.call(s$2, "main") && "string" == typeof s$2.main && (n$1.main = s$2.main), Oe.call(s$2, "exports") && (n$1.exports = s$2.exports), Oe.call(s$2, "imports") && (n$1.imports = s$2.imports), !Oe.call(s$2, "type") || "commonjs" !== s$2.type && "module" !== s$2.type || (n$1.type = s$2.type);
				}
				return Ve.set(e$2, n$1), n$1;
			}
			function getPackageScopeConfig(e$2) {
				let t$2 = new URL("package.json", e$2);
				for (;;) {
					if (t$2.pathname.endsWith("node_modules/package.json")) break;
					const i$1 = read((0, _e.fileURLToPath)(t$2), { specifier: e$2 });
					if (i$1.exists) return i$1;
					const s$1 = t$2;
					if (t$2 = new URL("../package.json", t$2), t$2.pathname === s$1.pathname) break;
				}
				return {
					pjsonPath: (0, _e.fileURLToPath)(t$2),
					exists: !1,
					type: "none"
				};
			}
			function getPackageType(e$2) {
				return getPackageScopeConfig(e$2).type;
			}
			const { ERR_UNKNOWN_FILE_EXTENSION: Ue } = Te, Me = {}.hasOwnProperty, je = {
				__proto__: null,
				".cjs": "commonjs",
				".js": "module",
				".json": "json",
				".mjs": "module"
			};
			const Fe = {
				__proto__: null,
				"data:": function(e$2) {
					const { 1: t$2 } = /^([^/]+\/[^;,]+)[^,]*?(;base64)?,/.exec(e$2.pathname) || [
						null,
						null,
						null
					];
					return function(e$3) {
						return e$3 && /\s*(text|application)\/javascript\s*(;\s*charset=utf-?8\s*)?/i.test(e$3) ? "module" : "application/json" === e$3 ? "json" : null;
					}(t$2);
				},
				"file:": function(e$2, t$2, i$1) {
					const s$1 = function(e$3) {
						const t$3 = e$3.pathname;
						let i$2 = t$3.length;
						for (; i$2--;) {
							const e$4 = t$3.codePointAt(i$2);
							if (47 === e$4) return "";
							if (46 === e$4) return 47 === t$3.codePointAt(i$2 - 1) ? "" : t$3.slice(i$2);
						}
						return "";
					}(e$2);
					if (".js" === s$1) {
						const t$3 = getPackageType(e$2);
						return "none" !== t$3 ? t$3 : "commonjs";
					}
					if ("" === s$1) {
						const t$3 = getPackageType(e$2);
						return "none" === t$3 || "commonjs" === t$3 ? "commonjs" : "module";
					}
					const r$1 = je[s$1];
					if (r$1) return r$1;
					if (i$1) return;
					throw new Ue(s$1, (0, _e.fileURLToPath)(e$2));
				},
				"http:": getHttpProtocolModuleFormat,
				"https:": getHttpProtocolModuleFormat,
				"node:": () => "builtin"
			};
			function getHttpProtocolModuleFormat() {}
			const Be = RegExp.prototype[Symbol.replace], { ERR_INVALID_MODULE_SPECIFIER: $e, ERR_INVALID_PACKAGE_CONFIG: qe, ERR_INVALID_PACKAGE_TARGET: We, ERR_MODULE_NOT_FOUND: Ge, ERR_PACKAGE_IMPORT_NOT_DEFINED: He, ERR_PACKAGE_PATH_NOT_EXPORTED: Ke, ERR_UNSUPPORTED_DIR_IMPORT: ze, ERR_UNSUPPORTED_RESOLVE_REQUEST: Je } = Te, Ye = {}.hasOwnProperty, Qe = /(^|\\|\/)((\.|%2e)(\.|%2e)?|(n|%6e|%4e)(o|%6f|%4f)(d|%64|%44)(e|%65|%45)(_|%5f)(m|%6d|%4d)(o|%6f|%4f)(d|%64|%44)(u|%75|%55)(l|%6c|%4c)(e|%65|%45)(s|%73|%53))?(\\|\/|$)/i, Ze = /(^|\\|\/)((\.|%2e)(\.|%2e)?|(n|%6e|%4e)(o|%6f|%4f)(d|%64|%44)(e|%65|%45)(_|%5f)(m|%6d|%4d)(o|%6f|%4f)(d|%64|%44)(u|%75|%55)(l|%6c|%4c)(e|%65|%45)(s|%73|%53))(\\|\/|$)/i, Xe = /^\.|%|\\/, et = /\*/g, tt = /%2f|%5c/i, it = /* @__PURE__ */ new Set(), st = /[/\\]{2}/;
			function emitInvalidSegmentDeprecation(e$2, t$2, i$1, s$1, r$1, n$1, a$1) {
				if (be.noDeprecation) return;
				const o$1 = (0, _e.fileURLToPath)(s$1), h$1 = null !== st.exec(a$1 ? e$2 : t$2);
				be.emitWarning(`Use of deprecated ${h$1 ? "double slash" : "leading or trailing slash matching"} resolving "${e$2}" for module request "${t$2}" ${t$2 === i$1 ? "" : `matched to "${i$1}" `}in the "${r$1 ? "imports" : "exports"}" field module resolution of the package at ${o$1}${n$1 ? ` imported from ${(0, _e.fileURLToPath)(n$1)}` : ""}.`, "DeprecationWarning", "DEP0166");
			}
			function emitLegacyIndexDeprecation(e$2, t$2, i$1, s$1) {
				if (be.noDeprecation) return;
				if ("module" !== function(e$3, t$3) {
					const i$2 = e$3.protocol;
					return Me.call(Fe, i$2) && Fe[i$2](e$3, t$3, !0) || null;
				}(e$2, { parentURL: i$1.href })) return;
				const n$1 = (0, _e.fileURLToPath)(e$2.href), a$1 = (0, _e.fileURLToPath)(new _e.URL(".", t$2)), o$1 = (0, _e.fileURLToPath)(i$1);
				s$1 ? Se.resolve(a$1, s$1) !== n$1 && be.emitWarning(`Package ${a$1} has a "main" field set to "${s$1}", excluding the full filename and extension to the resolved file at "${n$1.slice(a$1.length)}", imported from ${o$1}.\n Automatic extension resolution of the "main" field is deprecated for ES modules.`, "DeprecationWarning", "DEP0151") : be.emitWarning(`No "main" or "exports" field defined in the package.json for ${a$1} resolving the main entry point "${n$1.slice(a$1.length)}", imported from ${o$1}.\nDefault "index" lookups for the main are deprecated for ES modules.`, "DeprecationWarning", "DEP0151");
			}
			function tryStatSync(e$2) {
				try {
					return (0, ue.statSync)(e$2);
				} catch {}
			}
			function fileExists(e$2) {
				const t$2 = (0, ue.statSync)(e$2, { throwIfNoEntry: !1 }), i$1 = t$2 ? t$2.isFile() : void 0;
				return null != i$1 && i$1;
			}
			function legacyMainResolve(e$2, t$2, i$1) {
				let s$1;
				if (void 0 !== t$2.main) {
					if (s$1 = new _e.URL(t$2.main, e$2), fileExists(s$1)) return s$1;
					const r$2 = [
						`./${t$2.main}.js`,
						`./${t$2.main}.json`,
						`./${t$2.main}.node`,
						`./${t$2.main}/index.js`,
						`./${t$2.main}/index.json`,
						`./${t$2.main}/index.node`
					];
					let n$2 = -1;
					for (; ++n$2 < r$2.length && (s$1 = new _e.URL(r$2[n$2], e$2), !fileExists(s$1));) s$1 = void 0;
					if (s$1) return emitLegacyIndexDeprecation(s$1, e$2, i$1, t$2.main), s$1;
				}
				const r$1 = [
					"./index.js",
					"./index.json",
					"./index.node"
				];
				let n$1 = -1;
				for (; ++n$1 < r$1.length && (s$1 = new _e.URL(r$1[n$1], e$2), !fileExists(s$1));) s$1 = void 0;
				if (s$1) return emitLegacyIndexDeprecation(s$1, e$2, i$1, t$2.main), s$1;
				throw new Ge((0, _e.fileURLToPath)(new _e.URL(".", e$2)), (0, _e.fileURLToPath)(i$1));
			}
			function exportsNotFound(e$2, t$2, i$1) {
				return new Ke((0, _e.fileURLToPath)(new _e.URL(".", t$2)), e$2, i$1 && (0, _e.fileURLToPath)(i$1));
			}
			function invalidPackageTarget(e$2, t$2, i$1, s$1, r$1) {
				return t$2 = "object" == typeof t$2 && null !== t$2 ? JSON.stringify(t$2, null, "") : `${t$2}`, new We((0, _e.fileURLToPath)(new _e.URL(".", i$1)), e$2, t$2, s$1, r$1 && (0, _e.fileURLToPath)(r$1));
			}
			function resolvePackageTargetString(e$2, t$2, i$1, s$1, r$1, n$1, a$1, o$1, h$1) {
				if ("" !== t$2 && !n$1 && "/" !== e$2[e$2.length - 1]) throw invalidPackageTarget(i$1, e$2, s$1, a$1, r$1);
				if (!e$2.startsWith("./")) {
					if (a$1 && !e$2.startsWith("../") && !e$2.startsWith("/")) {
						let i$2 = !1;
						try {
							new _e.URL(e$2), i$2 = !0;
						} catch {}
						if (!i$2) return packageResolve(n$1 ? Be.call(et, e$2, () => t$2) : e$2 + t$2, s$1, h$1);
					}
					throw invalidPackageTarget(i$1, e$2, s$1, a$1, r$1);
				}
				if (null !== Qe.exec(e$2.slice(2))) {
					if (null !== Ze.exec(e$2.slice(2))) throw invalidPackageTarget(i$1, e$2, s$1, a$1, r$1);
					if (!o$1) {
						const o$2 = n$1 ? i$1.replace("*", () => t$2) : i$1 + t$2;
						emitInvalidSegmentDeprecation(n$1 ? Be.call(et, e$2, () => t$2) : e$2, o$2, i$1, s$1, a$1, r$1, !0);
					}
				}
				const c$1 = new _e.URL(e$2, s$1), p$1 = c$1.pathname, l$1 = new _e.URL(".", s$1).pathname;
				if (!p$1.startsWith(l$1)) throw invalidPackageTarget(i$1, e$2, s$1, a$1, r$1);
				if ("" === t$2) return c$1;
				if (null !== Qe.exec(t$2)) {
					const h$2 = n$1 ? i$1.replace("*", () => t$2) : i$1 + t$2;
					if (null === Ze.exec(t$2)) {
						if (!o$1) emitInvalidSegmentDeprecation(n$1 ? Be.call(et, e$2, () => t$2) : e$2, h$2, i$1, s$1, a$1, r$1, !1);
					} else (function(e$3, t$3, i$2, s$2, r$2) {
						throw new $e(e$3, `request is not a valid match in pattern "${t$3}" for the "${s$2 ? "imports" : "exports"}" resolution of ${(0, _e.fileURLToPath)(i$2)}`, r$2 && (0, _e.fileURLToPath)(r$2));
					})(h$2, i$1, s$1, a$1, r$1);
				}
				return n$1 ? new _e.URL(Be.call(et, c$1.href, () => t$2)) : new _e.URL(t$2, c$1);
			}
			function isArrayIndex(e$2) {
				const t$2 = Number(e$2);
				return `${t$2}` === e$2 && t$2 >= 0 && t$2 < 4294967295;
			}
			function resolvePackageTarget(e$2, t$2, i$1, s$1, r$1, n$1, a$1, o$1, h$1) {
				if ("string" == typeof t$2) return resolvePackageTargetString(t$2, i$1, s$1, e$2, r$1, n$1, a$1, o$1, h$1);
				if (Array.isArray(t$2)) {
					const c$1 = t$2;
					if (0 === c$1.length) return null;
					let p$1, l$1 = -1;
					for (; ++l$1 < c$1.length;) {
						const t$3 = c$1[l$1];
						let u$1;
						try {
							u$1 = resolvePackageTarget(e$2, t$3, i$1, s$1, r$1, n$1, a$1, o$1, h$1);
						} catch (e$3) {
							if (p$1 = e$3, "ERR_INVALID_PACKAGE_TARGET" === e$3.code) continue;
							throw e$3;
						}
						if (void 0 !== u$1) {
							if (null !== u$1) return u$1;
							p$1 = null;
						}
					}
					if (null == p$1) return null;
					throw p$1;
				}
				if ("object" == typeof t$2 && null !== t$2) {
					const c$1 = Object.getOwnPropertyNames(t$2);
					let p$1 = -1;
					for (; ++p$1 < c$1.length;) if (isArrayIndex(c$1[p$1])) throw new qe((0, _e.fileURLToPath)(e$2), r$1, "\"exports\" cannot contain numeric property keys.");
					for (p$1 = -1; ++p$1 < c$1.length;) {
						const l$1 = c$1[p$1];
						if ("default" === l$1 || h$1 && h$1.has(l$1)) {
							const c$2 = resolvePackageTarget(e$2, t$2[l$1], i$1, s$1, r$1, n$1, a$1, o$1, h$1);
							if (void 0 === c$2) continue;
							return c$2;
						}
					}
					return null;
				}
				if (null === t$2) return null;
				throw invalidPackageTarget(s$1, t$2, e$2, a$1, r$1);
			}
			function emitTrailingSlashPatternDeprecation(e$2, t$2, i$1) {
				if (be.noDeprecation) return;
				const s$1 = (0, _e.fileURLToPath)(t$2);
				it.has(s$1 + "|" + e$2) || (it.add(s$1 + "|" + e$2), be.emitWarning(`Use of deprecated trailing slash pattern mapping "${e$2}" in the "exports" field module resolution of the package at ${s$1}${i$1 ? ` imported from ${(0, _e.fileURLToPath)(i$1)}` : ""}. Mapping specifiers ending in "/" is no longer supported.`, "DeprecationWarning", "DEP0155"));
			}
			function packageExportsResolve(e$2, t$2, i$1, s$1, r$1) {
				let n$1 = i$1.exports;
				if (function(e$3, t$3, i$2) {
					if ("string" == typeof e$3 || Array.isArray(e$3)) return !0;
					if ("object" != typeof e$3 || null === e$3) return !1;
					const s$2 = Object.getOwnPropertyNames(e$3);
					let r$2 = !1, n$2 = 0, a$2 = -1;
					for (; ++a$2 < s$2.length;) {
						const e$4 = s$2[a$2], o$2 = "" === e$4 || "." !== e$4[0];
						if (0 === n$2++) r$2 = o$2;
						else if (r$2 !== o$2) throw new qe((0, _e.fileURLToPath)(t$3), i$2, "\"exports\" cannot contain some keys starting with '.' and some not. The exports object must either be an object of package subpath keys or an object of main entry condition name keys only.");
					}
					return r$2;
				}(n$1, e$2, s$1) && (n$1 = { ".": n$1 }), Ye.call(n$1, t$2) && !t$2.includes("*") && !t$2.endsWith("/")) {
					const i$2 = resolvePackageTarget(e$2, n$1[t$2], "", t$2, s$1, !1, !1, !1, r$1);
					if (null == i$2) throw exportsNotFound(t$2, e$2, s$1);
					return i$2;
				}
				let a$1 = "", o$1 = "";
				const h$1 = Object.getOwnPropertyNames(n$1);
				let c$1 = -1;
				for (; ++c$1 < h$1.length;) {
					const i$2 = h$1[c$1], r$2 = i$2.indexOf("*");
					if (-1 !== r$2 && t$2.startsWith(i$2.slice(0, r$2))) {
						t$2.endsWith("/") && emitTrailingSlashPatternDeprecation(t$2, e$2, s$1);
						const n$2 = i$2.slice(r$2 + 1);
						t$2.length >= i$2.length && t$2.endsWith(n$2) && 1 === patternKeyCompare(a$1, i$2) && i$2.lastIndexOf("*") === r$2 && (a$1 = i$2, o$1 = t$2.slice(r$2, t$2.length - n$2.length));
					}
				}
				if (a$1) {
					const i$2 = resolvePackageTarget(e$2, n$1[a$1], o$1, a$1, s$1, !0, !1, t$2.endsWith("/"), r$1);
					if (null == i$2) throw exportsNotFound(t$2, e$2, s$1);
					return i$2;
				}
				throw exportsNotFound(t$2, e$2, s$1);
			}
			function patternKeyCompare(e$2, t$2) {
				const i$1 = e$2.indexOf("*"), s$1 = t$2.indexOf("*"), r$1 = -1 === i$1 ? e$2.length : i$1 + 1, n$1 = -1 === s$1 ? t$2.length : s$1 + 1;
				return r$1 > n$1 ? -1 : n$1 > r$1 || -1 === i$1 ? 1 : -1 === s$1 || e$2.length > t$2.length ? -1 : t$2.length > e$2.length ? 1 : 0;
			}
			function packageImportsResolve(e$2, t$2, i$1) {
				if ("#" === e$2 || e$2.startsWith("#/") || e$2.endsWith("/")) throw new $e(e$2, "is not a valid internal imports specifier name", (0, _e.fileURLToPath)(t$2));
				let s$1;
				const r$1 = getPackageScopeConfig(t$2);
				if (r$1.exists) {
					s$1 = (0, _e.pathToFileURL)(r$1.pjsonPath);
					const n$1 = r$1.imports;
					if (n$1) if (Ye.call(n$1, e$2) && !e$2.includes("*")) {
						const r$2 = resolvePackageTarget(s$1, n$1[e$2], "", e$2, t$2, !1, !0, !1, i$1);
						if (null != r$2) return r$2;
					} else {
						let r$2 = "", a$1 = "";
						const o$1 = Object.getOwnPropertyNames(n$1);
						let h$1 = -1;
						for (; ++h$1 < o$1.length;) {
							const t$3 = o$1[h$1], i$2 = t$3.indexOf("*");
							if (-1 !== i$2 && e$2.startsWith(t$3.slice(0, -1))) {
								const s$2 = t$3.slice(i$2 + 1);
								e$2.length >= t$3.length && e$2.endsWith(s$2) && 1 === patternKeyCompare(r$2, t$3) && t$3.lastIndexOf("*") === i$2 && (r$2 = t$3, a$1 = e$2.slice(i$2, e$2.length - s$2.length));
							}
						}
						if (r$2) {
							const e$3 = resolvePackageTarget(s$1, n$1[r$2], a$1, r$2, t$2, !0, !0, !1, i$1);
							if (null != e$3) return e$3;
						}
					}
				}
				throw function(e$3, t$3, i$2) {
					return new He(e$3, t$3 && (0, _e.fileURLToPath)(new _e.URL(".", t$3)), (0, _e.fileURLToPath)(i$2));
				}(e$2, s$1, t$2);
			}
			function packageResolve(e$2, t$2, i$1) {
				if (le.builtinModules.includes(e$2)) return new _e.URL("node:" + e$2);
				const { packageName: s$1, packageSubpath: r$1, isScoped: n$1 } = function(e$3, t$3) {
					let i$2 = e$3.indexOf("/"), s$2 = !0, r$2 = !1;
					"@" === e$3[0] && (r$2 = !0, -1 === i$2 || 0 === e$3.length ? s$2 = !1 : i$2 = e$3.indexOf("/", i$2 + 1));
					const n$2 = -1 === i$2 ? e$3 : e$3.slice(0, i$2);
					if (null !== Xe.exec(n$2) && (s$2 = !1), !s$2) throw new $e(e$3, "is not a valid package name", (0, _e.fileURLToPath)(t$3));
					return {
						packageName: n$2,
						packageSubpath: "." + (-1 === i$2 ? "" : e$3.slice(i$2)),
						isScoped: r$2
					};
				}(e$2, t$2), a$1 = getPackageScopeConfig(t$2);
				if (a$1.exists) {
					const e$3 = (0, _e.pathToFileURL)(a$1.pjsonPath);
					if (a$1.name === s$1 && void 0 !== a$1.exports && null !== a$1.exports) return packageExportsResolve(e$3, r$1, a$1, t$2, i$1);
				}
				let o$1, h$1 = new _e.URL("./node_modules/" + s$1 + "/package.json", t$2), c$1 = (0, _e.fileURLToPath)(h$1);
				do {
					const a$2 = tryStatSync(c$1.slice(0, -13));
					if (!a$2 || !a$2.isDirectory()) {
						o$1 = c$1, h$1 = new _e.URL((n$1 ? "../../../../node_modules/" : "../../../node_modules/") + s$1 + "/package.json", h$1), c$1 = (0, _e.fileURLToPath)(h$1);
						continue;
					}
					const p$1 = read(c$1, {
						base: t$2,
						specifier: e$2
					});
					return void 0 !== p$1.exports && null !== p$1.exports ? packageExportsResolve(h$1, r$1, p$1, t$2, i$1) : "." === r$1 ? legacyMainResolve(h$1, p$1, t$2) : new _e.URL(r$1, h$1);
				} while (c$1.length !== o$1.length);
				throw new Ge(s$1, (0, _e.fileURLToPath)(t$2), !1);
			}
			function moduleResolve(e$2, t$2, i$1, s$1) {
				const r$1 = t$2.protocol, n$1 = "data:" === r$1 || "http:" === r$1 || "https:" === r$1;
				let a$1;
				if (function(e$3) {
					return "" !== e$3 && ("/" === e$3[0] || function(e$4) {
						if ("." === e$4[0]) {
							if (1 === e$4.length || "/" === e$4[1]) return !0;
							if ("." === e$4[1] && (2 === e$4.length || "/" === e$4[2])) return !0;
						}
						return !1;
					}(e$3));
				}(e$2)) try {
					a$1 = new _e.URL(e$2, t$2);
				} catch (i$2) {
					const s$2 = new Je(e$2, t$2);
					throw s$2.cause = i$2, s$2;
				}
				else if ("file:" === r$1 && "#" === e$2[0]) a$1 = packageImportsResolve(e$2, t$2, i$1);
				else try {
					a$1 = new _e.URL(e$2);
				} catch (s$2) {
					if (n$1 && !le.builtinModules.includes(e$2)) {
						const i$2 = new Je(e$2, t$2);
						throw i$2.cause = s$2, i$2;
					}
					a$1 = packageResolve(e$2, t$2, i$1);
				}
				return Ee(void 0 !== a$1, "expected to be defined"), "file:" !== a$1.protocol ? a$1 : function(e$3, t$3) {
					if (null !== tt.exec(e$3.pathname)) throw new $e(e$3.pathname, "must not include encoded \"/\" or \"\\\" characters", (0, _e.fileURLToPath)(t$3));
					let i$2;
					try {
						i$2 = (0, _e.fileURLToPath)(e$3);
					} catch (i$3) {
						const s$3 = i$3;
						throw Object.defineProperty(s$3, "input", { value: String(e$3) }), Object.defineProperty(s$3, "module", { value: String(t$3) }), s$3;
					}
					const s$2 = tryStatSync(i$2.endsWith("/") ? i$2.slice(-1) : i$2);
					if (s$2 && s$2.isDirectory()) {
						const s$3 = new ze(i$2, (0, _e.fileURLToPath)(t$3));
						throw s$3.url = String(e$3), s$3;
					}
					if (!s$2 || !s$2.isFile()) {
						const s$3 = new Ge(i$2 || e$3.pathname, t$3 && (0, _e.fileURLToPath)(t$3), !0);
						throw s$3.url = String(e$3), s$3;
					}
					{
						const t$4 = (0, ue.realpathSync)(i$2), { search: s$3, hash: r$2 } = e$3;
						(e$3 = (0, _e.pathToFileURL)(t$4 + (i$2.endsWith(Se.sep) ? "/" : ""))).search = s$3, e$3.hash = r$2;
					}
					return e$3;
				}(a$1, t$2);
			}
			function fileURLToPath(e$2) {
				return "string" != typeof e$2 || e$2.startsWith("file://") ? normalizeSlash((0, _e.fileURLToPath)(e$2)) : normalizeSlash(e$2);
			}
			function pathToFileURL(e$2) {
				return (0, _e.pathToFileURL)(fileURLToPath(e$2)).toString();
			}
			const rt = new Set(["node", "import"]), nt = [
				".mjs",
				".cjs",
				".js",
				".json"
			], at = new Set([
				"ERR_MODULE_NOT_FOUND",
				"ERR_UNSUPPORTED_DIR_IMPORT",
				"MODULE_NOT_FOUND",
				"ERR_PACKAGE_PATH_NOT_EXPORTED"
			]);
			function _tryModuleResolve(e$2, t$2, i$1) {
				try {
					return moduleResolve(e$2, t$2, i$1);
				} catch (e$3) {
					if (!at.has(e$3?.code)) throw e$3;
				}
			}
			function _resolve(e$2, t$2 = {}) {
				if ("string" != typeof e$2) {
					if (!(e$2 instanceof URL)) throw new TypeError("input must be a `string` or `URL`");
					e$2 = fileURLToPath(e$2);
				}
				if (/(?:node|data|http|https):/.test(e$2)) return e$2;
				if (Ie.has(e$2)) return "node:" + e$2;
				if (e$2.startsWith("file://") && (e$2 = fileURLToPath(e$2)), isAbsolute(e$2)) try {
					if ((0, ue.statSync)(e$2).isFile()) return pathToFileURL(e$2);
				} catch (e$3) {
					if ("ENOENT" !== e$3?.code) throw e$3;
				}
				const i$1 = t$2.conditions ? new Set(t$2.conditions) : rt, s$1 = (Array.isArray(t$2.url) ? t$2.url : [t$2.url]).filter(Boolean).map((e$3) => new URL(function(e$4) {
					return "string" != typeof e$4 && (e$4 = e$4.toString()), /(?:node|data|http|https|file):/.test(e$4) ? e$4 : Ie.has(e$4) ? "node:" + e$4 : "file://" + encodeURI(normalizeSlash(e$4));
				}(e$3.toString())));
				0 === s$1.length && s$1.push(new URL(pathToFileURL(process.cwd())));
				const r$1 = [...s$1];
				for (const e$3 of s$1) "file:" === e$3.protocol && r$1.push(new URL("./", e$3), new URL(dist_joinURL(e$3.pathname, "_index.js"), e$3), new URL("node_modules", e$3));
				let n$1;
				for (const s$2 of r$1) {
					if (n$1 = _tryModuleResolve(e$2, s$2, i$1), n$1) break;
					for (const r$2 of ["", "/index"]) {
						for (const a$1 of t$2.extensions || nt) if (n$1 = _tryModuleResolve(dist_joinURL(e$2, r$2) + a$1, s$2, i$1), n$1) break;
						if (n$1) break;
					}
					if (n$1) break;
				}
				if (!n$1) {
					const t$3 = /* @__PURE__ */ new Error(`Cannot find module ${e$2} imported from ${r$1.join(", ")}`);
					throw t$3.code = "ERR_MODULE_NOT_FOUND", t$3;
				}
				return pathToFileURL(n$1);
			}
			function resolveSync(e$2, t$2) {
				return _resolve(e$2, t$2);
			}
			function resolvePathSync(e$2, t$2) {
				return fileURLToPath(resolveSync(e$2, t$2));
			}
			const ot = /(?:[\s;]|^)(?:import[\s\w*,{}]*from|import\s*["'*{]|export\b\s*(?:[*{]|default|class|type|function|const|var|let|async function)|import\.meta\b)/m, ht = /\/\*.+?\*\/|\/\/.*(?=[nr])/g;
			function hasESMSyntax(e$2, t$2 = {}) {
				return t$2.stripComments && (e$2 = e$2.replace(ht, "")), ot.test(e$2);
			}
			function escapeStringRegexp(e$2) {
				if ("string" != typeof e$2) throw new TypeError("Expected a string");
				return e$2.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
			}
			const ct = new Set([
				"/",
				"\\",
				void 0
			]), pt = Symbol.for("pathe:normalizedAlias"), lt = /[/\\]/;
			function normalizeAliases(e$2) {
				if (e$2[pt]) return e$2;
				const t$2 = Object.fromEntries(Object.entries(e$2).sort(([e$3], [t$3]) => function(e$4, t$4) {
					return t$4.split("/").length - e$4.split("/").length;
				}(e$3, t$3)));
				for (const e$3 in t$2) for (const i$1 in t$2) i$1 === e$3 || e$3.startsWith(i$1) || t$2[e$3]?.startsWith(i$1) && ct.has(t$2[e$3][i$1.length]) && (t$2[e$3] = t$2[i$1] + t$2[e$3].slice(i$1.length));
				return Object.defineProperty(t$2, pt, {
					value: !0,
					enumerable: !1
				}), t$2;
			}
			function utils_hasTrailingSlash(e$2 = "/") {
				const t$2 = e$2[e$2.length - 1];
				return "/" === t$2 || "\\" === t$2;
			}
			var ut = { rE: "2.6.1" };
			const dt = __require("node:crypto");
			var ft = __webpack_require__.n(dt);
			const mt = Object.create(null), dist_i = (e$2) => globalThis.process?.env || globalThis.Deno?.env.toObject() || globalThis.__env__ || (e$2 ? mt : globalThis), gt = new Proxy(mt, {
				get: (e$2, t$2) => dist_i()[t$2] ?? mt[t$2],
				has: (e$2, t$2) => t$2 in dist_i() || t$2 in mt,
				set: (e$2, t$2, i$1) => (dist_i(!0)[t$2] = i$1, !0),
				deleteProperty(e$2, t$2) {
					if (!t$2) return !1;
					return delete dist_i(!0)[t$2], !0;
				},
				ownKeys() {
					const e$2 = dist_i(!0);
					return Object.keys(e$2);
				}
			}), xt = typeof process < "u" && process.env && process.env.NODE_ENV || "", vt = [
				["APPVEYOR"],
				[
					"AWS_AMPLIFY",
					"AWS_APP_ID",
					{ ci: !0 }
				],
				["AZURE_PIPELINES", "SYSTEM_TEAMFOUNDATIONCOLLECTIONURI"],
				["AZURE_STATIC", "INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN"],
				["APPCIRCLE", "AC_APPCIRCLE"],
				["BAMBOO", "bamboo_planKey"],
				["BITBUCKET", "BITBUCKET_COMMIT"],
				["BITRISE", "BITRISE_IO"],
				["BUDDY", "BUDDY_WORKSPACE_ID"],
				["BUILDKITE"],
				["CIRCLE", "CIRCLECI"],
				["CIRRUS", "CIRRUS_CI"],
				[
					"CLOUDFLARE_PAGES",
					"CF_PAGES",
					{ ci: !0 }
				],
				[
					"CLOUDFLARE_WORKERS",
					"WORKERS_CI",
					{ ci: !0 }
				],
				["CODEBUILD", "CODEBUILD_BUILD_ARN"],
				["CODEFRESH", "CF_BUILD_ID"],
				["DRONE"],
				["DRONE", "DRONE_BUILD_EVENT"],
				["DSARI"],
				["GITHUB_ACTIONS"],
				["GITLAB", "GITLAB_CI"],
				["GITLAB", "CI_MERGE_REQUEST_ID"],
				["GOCD", "GO_PIPELINE_LABEL"],
				["LAYERCI"],
				["HUDSON", "HUDSON_URL"],
				["JENKINS", "JENKINS_URL"],
				["MAGNUM"],
				["NETLIFY"],
				[
					"NETLIFY",
					"NETLIFY_LOCAL",
					{ ci: !1 }
				],
				["NEVERCODE"],
				["RENDER"],
				["SAIL", "SAILCI"],
				["SEMAPHORE"],
				["SCREWDRIVER"],
				["SHIPPABLE"],
				["SOLANO", "TDDIUM"],
				["STRIDER"],
				["TEAMCITY", "TEAMCITY_VERSION"],
				["TRAVIS"],
				["VERCEL", "NOW_BUILDER"],
				[
					"VERCEL",
					"VERCEL",
					{ ci: !1 }
				],
				[
					"VERCEL",
					"VERCEL_ENV",
					{ ci: !1 }
				],
				["APPCENTER", "APPCENTER_BUILD_ID"],
				[
					"CODESANDBOX",
					"CODESANDBOX_SSE",
					{ ci: !1 }
				],
				[
					"CODESANDBOX",
					"CODESANDBOX_HOST",
					{ ci: !1 }
				],
				["STACKBLITZ"],
				["STORMKIT"],
				["CLEAVR"],
				["ZEABUR"],
				[
					"CODESPHERE",
					"CODESPHERE_APP_ID",
					{ ci: !0 }
				],
				["RAILWAY", "RAILWAY_PROJECT_ID"],
				["RAILWAY", "RAILWAY_SERVICE_ID"],
				["DENO-DEPLOY", "DENO_DEPLOYMENT_ID"],
				[
					"FIREBASE_APP_HOSTING",
					"FIREBASE_APP_HOSTING",
					{ ci: !0 }
				]
			];
			const yt = function() {
				if (globalThis.process?.env) for (const e$2 of vt) {
					const t$2 = e$2[1] || e$2[0];
					if (globalThis.process?.env[t$2]) return {
						name: e$2[0].toLowerCase(),
						...e$2[2]
					};
				}
				return "/bin/jsh" === globalThis.process?.env?.SHELL && globalThis.process?.versions?.webcontainer ? {
					name: "stackblitz",
					ci: !1
				} : {
					name: "",
					ci: !1
				};
			}();
			yt.name;
			function std_env_dist_n(e$2) {
				return !!e$2 && "false" !== e$2;
			}
			const _t = globalThis.process?.platform || "";
			std_env_dist_n(gt.CI) || yt.ci;
			const bt = std_env_dist_n(globalThis.process?.stdout && globalThis.process?.stdout.isTTY);
			std_env_dist_n(gt.DEBUG), "test" === xt || std_env_dist_n(gt.TEST);
			const kt = (std_env_dist_n(gt.MINIMAL), /^win/i.test(_t)), wt = (/^linux/i.test(_t), /^darwin/i.test(_t), !std_env_dist_n(gt.NO_COLOR) && (std_env_dist_n(gt.FORCE_COLOR) || (bt || kt) && gt.TERM), (globalThis.process?.versions?.node || "").replace(/^v/, "") || null), It = (Number(wt?.split(".")[0]), globalThis.process || Object.create(null)), Ct = { versions: {} }, Rt = (new Proxy(It, { get: (e$2, t$2) => "env" === t$2 ? gt : t$2 in e$2 ? e$2[t$2] : t$2 in Ct ? Ct[t$2] : void 0 }), "node" === globalThis.process?.release?.name), Pt = !!globalThis.Bun || !!globalThis.process?.versions?.bun, Tt = !!globalThis.Deno, At = !!globalThis.fastly, Nt = [
				[!!globalThis.Netlify, "netlify"],
				[!!globalThis.EdgeRuntime, "edge-light"],
				["Cloudflare-Workers" === globalThis.navigator?.userAgent, "workerd"],
				[At, "fastly"],
				[Tt, "deno"],
				[Pt, "bun"],
				[Rt, "node"]
			];
			(function() {
				const e$2 = Nt.find((e$3) => e$3[0]);
				if (e$2) e$2[1];
			})();
			const Ot = __require("node:tty")?.WriteStream?.prototype?.hasColors?.() ?? !1, base_format = (e$2, t$2) => {
				if (!Ot) return (e$3) => e$3;
				const i$1 = `[${e$2}m`, s$1 = `[${t$2}m`;
				return (e$3) => {
					const r$1 = e$3 + "";
					let n$1 = r$1.indexOf(s$1);
					if (-1 === n$1) return i$1 + r$1 + s$1;
					let a$1 = i$1, o$1 = 0;
					const h$1 = (22 === t$2 ? s$1 : "") + i$1;
					for (; -1 !== n$1;) a$1 += r$1.slice(o$1, n$1) + h$1, o$1 = n$1 + s$1.length, n$1 = r$1.indexOf(s$1, o$1);
					return a$1 += r$1.slice(o$1) + s$1, a$1;
				};
			}, Dt = (base_format(0, 0), base_format(1, 22), base_format(2, 22), base_format(3, 23), base_format(4, 24), base_format(53, 55), base_format(7, 27), base_format(8, 28), base_format(9, 29), base_format(30, 39), base_format(31, 39)), Vt = base_format(32, 39), Ut = base_format(33, 39), Mt = base_format(34, 39), jt = (base_format(35, 39), base_format(36, 39)), Ft = (base_format(37, 39), base_format(90, 39));
			base_format(40, 49), base_format(41, 49), base_format(42, 49), base_format(43, 49), base_format(44, 49), base_format(45, 49), base_format(46, 49), base_format(47, 49), base_format(100, 49), base_format(91, 39), base_format(92, 39), base_format(93, 39), base_format(94, 39), base_format(95, 39), base_format(96, 39), base_format(97, 39), base_format(101, 49), base_format(102, 49), base_format(103, 49), base_format(104, 49), base_format(105, 49), base_format(106, 49), base_format(107, 49);
			function isDir(e$2) {
				if ("string" != typeof e$2 || e$2.startsWith("file://")) return !1;
				try {
					return (0, ue.lstatSync)(e$2).isDirectory();
				} catch {
					return !1;
				}
			}
			function utils_hash(e$2, t$2 = 8) {
				return (function() {
					if (void 0 !== $t) return $t;
					try {
						return $t = !!ft().getFips?.(), $t;
					} catch {
						return $t = !1, $t;
					}
				}() ? ft().createHash("sha256") : ft().createHash("md5")).update(e$2).digest("hex").slice(0, t$2);
			}
			const Bt = {
				true: Vt("true"),
				false: Ut("false"),
				"[rebuild]": Ut("[rebuild]"),
				"[esm]": Mt("[esm]"),
				"[cjs]": Vt("[cjs]"),
				"[import]": Mt("[import]"),
				"[require]": Vt("[require]"),
				"[native]": jt("[native]"),
				"[transpile]": Ut("[transpile]"),
				"[fallback]": Dt("[fallback]"),
				"[unknown]": Dt("[unknown]"),
				"[hit]": Vt("[hit]"),
				"[miss]": Ut("[miss]"),
				"[json]": Vt("[json]"),
				"[data]": Vt("[data]")
			};
			function debug(e$2, ...t$2) {
				if (!e$2.opts.debug) return;
				const i$1 = process.cwd();
				console.log(Ft(["[jiti]", ...t$2.map((e$3) => e$3 in Bt ? Bt[e$3] : "string" != typeof e$3 ? JSON.stringify(e$3) : e$3.replace(i$1, "."))].join(" ")));
			}
			function jitiInteropDefault(e$2, t$2) {
				return e$2.opts.interopDefault ? function(e$3) {
					const t$3 = typeof e$3;
					if (null === e$3 || "object" !== t$3 && "function" !== t$3) return e$3;
					const i$1 = e$3.default, s$1 = typeof i$1, r$1 = null == i$1, n$1 = "object" === s$1 || "function" === s$1;
					if (r$1 && e$3 instanceof Promise) return e$3;
					return new Proxy(e$3, {
						get(t$4, s$2, a$1) {
							if ("__esModule" === s$2) return !0;
							if ("default" === s$2) return r$1 ? e$3 : "function" == typeof i$1?.default && e$3.__esModule ? i$1.default : i$1;
							if (Reflect.has(t$4, s$2)) return Reflect.get(t$4, s$2, a$1);
							if (n$1 && !(i$1 instanceof Promise)) {
								let e$4 = Reflect.get(i$1, s$2, a$1);
								return "function" == typeof e$4 && (e$4 = e$4.bind(i$1)), e$4;
							}
						},
						apply: (e$4, t$4, r$2) => "function" == typeof e$4 ? Reflect.apply(e$4, t$4, r$2) : "function" === s$1 ? Reflect.apply(i$1, t$4, r$2) : void 0
					});
				}(t$2) : t$2;
			}
			let $t;
			function _booleanEnv(e$2, t$2) {
				const i$1 = _jsonEnv(e$2, t$2);
				return Boolean(i$1);
			}
			function _jsonEnv(e$2, t$2) {
				const i$1 = process.env[e$2];
				if (!(e$2 in process.env)) return t$2;
				try {
					return JSON.parse(i$1);
				} catch {
					return t$2;
				}
			}
			const qt = /\.(c|m)?j(sx?)$/, Wt = /\.(c|m)?t(sx?)$/;
			function jitiResolve(e$2, t$2, i$1) {
				let s$1, r$1;
				if (e$2.isNativeRe.test(t$2)) return t$2;
				e$2.alias && (t$2 = function(e$3, t$3) {
					const i$2 = pathe_M_eThtNZ_normalizeWindowsPath(e$3);
					t$3 = normalizeAliases(t$3);
					for (const [e$4, s$2] of Object.entries(t$3)) {
						if (!i$2.startsWith(e$4)) continue;
						if (utils_hasTrailingSlash(i$2[(utils_hasTrailingSlash(e$4) ? e$4.slice(0, -1) : e$4).length])) return pathe_M_eThtNZ_join(s$2, i$2.slice(e$4.length));
					}
					return i$2;
				}(t$2, e$2.alias));
				let n$1 = i$1?.parentURL || e$2.url;
				isDir(n$1) && (n$1 = pathe_M_eThtNZ_join(n$1, "_index.js"));
				const a$1 = (i$1?.async ? [
					i$1?.conditions,
					["node", "import"],
					["node", "require"]
				] : [
					i$1?.conditions,
					["node", "require"],
					["node", "import"]
				]).filter(Boolean);
				for (const i$2 of a$1) {
					try {
						s$1 = resolvePathSync(t$2, {
							url: n$1,
							conditions: i$2,
							extensions: e$2.opts.extensions
						});
					} catch (e$3) {
						r$1 = e$3;
					}
					if (s$1) return s$1;
				}
				try {
					return e$2.nativeRequire.resolve(t$2, { paths: i$1.paths });
				} catch (e$3) {
					r$1 = e$3;
				}
				for (const r$2 of e$2.additionalExts) {
					if (s$1 = tryNativeRequireResolve(e$2, t$2 + r$2, n$1, i$1) || tryNativeRequireResolve(e$2, t$2 + "/index" + r$2, n$1, i$1), s$1) return s$1;
					if ((Wt.test(e$2.filename) || Wt.test(e$2.parentModule?.filename || "") || qt.test(t$2)) && (s$1 = tryNativeRequireResolve(e$2, t$2.replace(qt, ".$1t$2"), n$1, i$1), s$1)) return s$1;
				}
				if (!i$1?.try) throw r$1;
			}
			function tryNativeRequireResolve(e$2, t$2, i$1, s$1) {
				try {
					return e$2.nativeRequire.resolve(t$2, {
						...s$1,
						paths: [pathe_M_eThtNZ_dirname(fileURLToPath(i$1)), ...s$1?.paths || []]
					});
				} catch {}
			}
			const Gt = __require("node:perf_hooks"), Ht = __require("node:vm");
			var Kt = __webpack_require__.n(Ht);
			function jitiRequire(e$2, t$2, i$1) {
				const s$1 = e$2.parentCache || {};
				if (t$2.startsWith("node:")) return nativeImportOrRequire(e$2, t$2, i$1.async);
				if (t$2.startsWith("file:")) t$2 = (0, _e.fileURLToPath)(t$2);
				else if (t$2.startsWith("data:")) {
					if (!i$1.async) throw new Error("`data:` URLs are only supported in ESM context. Use `import` or `jiti.import` instead.");
					return debug(e$2, "[native]", "[data]", "[import]", t$2), nativeImportOrRequire(e$2, t$2, !0);
				}
				if (le.builtinModules.includes(t$2) || ".pnp.js" === t$2) return nativeImportOrRequire(e$2, t$2, i$1.async);
				if (e$2.opts.tryNative && !e$2.opts.transformOptions) try {
					if (!(t$2 = jitiResolve(e$2, t$2, i$1)) && i$1.try) return;
					if (debug(e$2, "[try-native]", i$1.async && e$2.nativeImport ? "[import]" : "[require]", t$2), i$1.async && e$2.nativeImport) return e$2.nativeImport(t$2).then((i$2) => (!1 === e$2.opts.moduleCache && delete e$2.nativeRequire.cache[t$2], jitiInteropDefault(e$2, i$2)));
					{
						const i$2 = e$2.nativeRequire(t$2);
						return !1 === e$2.opts.moduleCache && delete e$2.nativeRequire.cache[t$2], jitiInteropDefault(e$2, i$2);
					}
				} catch (i$2) {
					debug(e$2, `[try-native] Using fallback for ${t$2} because of an error:`, i$2);
				}
				const r$1 = jitiResolve(e$2, t$2, i$1);
				if (!r$1 && i$1.try) return;
				const n$1 = extname(r$1);
				if (".json" === n$1) {
					debug(e$2, "[json]", r$1);
					const t$3 = e$2.nativeRequire(r$1);
					return t$3 && !("default" in t$3) && Object.defineProperty(t$3, "default", {
						value: t$3,
						enumerable: !1
					}), t$3;
				}
				if (n$1 && !e$2.opts.extensions.includes(n$1)) return debug(e$2, "[native]", "[unknown]", i$1.async ? "[import]" : "[require]", r$1), nativeImportOrRequire(e$2, r$1, i$1.async);
				if (e$2.isNativeRe.test(r$1)) return debug(e$2, "[native]", i$1.async ? "[import]" : "[require]", r$1), nativeImportOrRequire(e$2, r$1, i$1.async);
				if (s$1[r$1]) return jitiInteropDefault(e$2, s$1[r$1]?.exports);
				if (e$2.opts.moduleCache) {
					const t$3 = e$2.nativeRequire.cache[r$1];
					if (t$3?.loaded) return jitiInteropDefault(e$2, t$3.exports);
				}
				return eval_evalModule(e$2, (0, ue.readFileSync)(r$1, "utf8"), {
					id: t$2,
					filename: r$1,
					ext: n$1,
					cache: s$1,
					async: i$1.async
				});
			}
			function nativeImportOrRequire(e$2, t$2, i$1) {
				return i$1 && e$2.nativeImport ? e$2.nativeImport(function(e$3) {
					return kt && isAbsolute(e$3) ? pathToFileURL(e$3) : e$3;
				}(t$2)).then((t$3) => jitiInteropDefault(e$2, t$3)) : jitiInteropDefault(e$2, e$2.nativeRequire(t$2));
			}
			const zt = "9";
			function getCache(e$2, t$2, i$1) {
				if (!e$2.opts.fsCache || !t$2.filename) return i$1();
				const s$1 = ` /* v${zt}-${utils_hash(t$2.source, 16)} */\n`;
				let r$1 = `${basename(pathe_M_eThtNZ_dirname(t$2.filename))}-${function(e$3) {
					const t$3 = e$3.split(lt).pop();
					if (!t$3) return;
					const i$2 = t$3.lastIndexOf(".");
					return i$2 <= 0 ? t$3 : t$3.slice(0, i$2);
				}(t$2.filename)}` + (e$2.opts.sourceMaps ? "+map" : "") + (t$2.interopDefault ? ".i" : "") + `.${utils_hash(t$2.filename)}` + (t$2.async ? ".mjs" : ".cjs");
				t$2.jsx && t$2.filename.endsWith("x") && (r$1 += "x");
				const n$1 = e$2.opts.fsCache, a$1 = pathe_M_eThtNZ_join(n$1, r$1);
				if (!e$2.opts.rebuildFsCache && (0, ue.existsSync)(a$1)) {
					const i$2 = (0, ue.readFileSync)(a$1, "utf8");
					if (i$2.endsWith(s$1)) return debug(e$2, "[cache]", "[hit]", t$2.filename, "~>", a$1), i$2;
				}
				debug(e$2, "[cache]", "[miss]", t$2.filename);
				const o$1 = i$1();
				return o$1.includes("__JITI_ERROR__") || ((0, ue.writeFileSync)(a$1, o$1 + s$1, "utf8"), debug(e$2, "[cache]", "[store]", t$2.filename, "~>", a$1)), o$1;
			}
			function prepareCacheDir(t$2) {
				if (!0 === t$2.opts.fsCache && (t$2.opts.fsCache = function(t$3) {
					const i$1 = t$3.filename && pathe_M_eThtNZ_resolve(t$3.filename, "../node_modules");
					if (i$1 && (0, ue.existsSync)(i$1)) return pathe_M_eThtNZ_join(i$1, ".cache/jiti");
					let s$1 = (0, e$1.tmpdir)();
					if (process.env.TMPDIR && s$1 === process.cwd() && !process.env.JITI_RESPECT_TMPDIR_ENV) {
						const t$4 = process.env.TMPDIR;
						delete process.env.TMPDIR, s$1 = (0, e$1.tmpdir)(), process.env.TMPDIR = t$4;
					}
					return pathe_M_eThtNZ_join(s$1, "jiti");
				}(t$2)), t$2.opts.fsCache) try {
					if ((0, ue.mkdirSync)(t$2.opts.fsCache, { recursive: !0 }), !function(e$2) {
						try {
							return (0, ue.accessSync)(e$2, ue.constants.W_OK), !0;
						} catch {
							return !1;
						}
					}(t$2.opts.fsCache)) throw new Error("directory is not writable!");
				} catch (e$2) {
					debug(t$2, "Error creating cache directory at ", t$2.opts.fsCache, e$2), t$2.opts.fsCache = !1;
				}
			}
			function transform(e$2, t$2) {
				let i$1 = getCache(e$2, t$2, () => {
					const i$2 = e$2.opts.transform({
						...e$2.opts.transformOptions,
						babel: {
							...e$2.opts.sourceMaps ? {
								sourceFileName: t$2.filename,
								sourceMaps: "inline"
							} : {},
							...e$2.opts.transformOptions?.babel
						},
						interopDefault: e$2.opts.interopDefault,
						...t$2
					});
					return i$2.error && e$2.opts.debug && debug(e$2, i$2.error), i$2.code;
				});
				return i$1.startsWith("#!") && (i$1 = "// " + i$1), i$1;
			}
			function eval_evalModule(e$2, t$2, i$1 = {}) {
				const s$1 = i$1.id || (i$1.filename ? basename(i$1.filename) : `_jitiEval.${i$1.ext || (i$1.async ? "mjs" : "js")}`), r$1 = i$1.filename || jitiResolve(e$2, s$1, { async: i$1.async }), n$1 = i$1.ext || extname(r$1), a$1 = i$1.cache || e$2.parentCache || {}, o$1 = /\.[cm]?tsx?$/.test(n$1), h$1 = ".mjs" === n$1 || ".js" === n$1 && "module" === function(e$3) {
					for (; e$3 && "." !== e$3 && "/" !== e$3;) {
						e$3 = pathe_M_eThtNZ_join(e$3, "..");
						try {
							const t$3 = (0, ue.readFileSync)(pathe_M_eThtNZ_join(e$3, "package.json"), "utf8");
							try {
								return JSON.parse(t$3);
							} catch {}
							break;
						} catch {}
					}
				}(r$1)?.type, c$1 = ".cjs" === n$1, p$1 = i$1.forceTranspile ?? (!c$1 && !(h$1 && i$1.async) && (o$1 || h$1 || e$2.isTransformRe.test(r$1) || hasESMSyntax(t$2))), l$1 = Gt.performance.now();
				if (p$1) {
					t$2 = transform(e$2, {
						filename: r$1,
						source: t$2,
						ts: o$1,
						async: i$1.async ?? !1,
						jsx: e$2.opts.jsx
					});
					const s$2 = Math.round(1e3 * (Gt.performance.now() - l$1)) / 1e3;
					debug(e$2, "[transpile]", i$1.async ? "[esm]" : "[cjs]", r$1, `(${s$2}ms)`);
				} else {
					if (debug(e$2, "[native]", i$1.async ? "[import]" : "[require]", r$1), i$1.async) return Promise.resolve(nativeImportOrRequire(e$2, r$1, i$1.async)).catch((s$2) => (debug(e$2, "Native import error:", s$2), debug(e$2, "[fallback]", r$1), eval_evalModule(e$2, t$2, {
						...i$1,
						forceTranspile: !0
					})));
					try {
						return nativeImportOrRequire(e$2, r$1, i$1.async);
					} catch (s$2) {
						debug(e$2, "Native require error:", s$2), debug(e$2, "[fallback]", r$1), t$2 = transform(e$2, {
							filename: r$1,
							source: t$2,
							ts: o$1,
							async: i$1.async ?? !1,
							jsx: e$2.opts.jsx
						});
					}
				}
				const u$1 = new le.Module(r$1);
				u$1.filename = r$1, e$2.parentModule && (u$1.parent = e$2.parentModule, Array.isArray(e$2.parentModule.children) && !e$2.parentModule.children.includes(u$1) && e$2.parentModule.children.push(u$1));
				const d$1 = createJiti$1(r$1, e$2.opts, {
					parentModule: u$1,
					parentCache: a$1,
					nativeImport: e$2.nativeImport,
					onError: e$2.onError,
					createRequire: e$2.createRequire
				}, !0);
				let f$1;
				u$1.require = d$1, u$1.path = pathe_M_eThtNZ_dirname(r$1), u$1.paths = le.Module._nodeModulePaths(u$1.path), a$1[r$1] = u$1, e$2.opts.moduleCache && (e$2.nativeRequire.cache[r$1] = u$1);
				const m$1 = function(e$3, t$3) {
					return `(${t$3?.async ? "async " : ""}function (exports, require, module, __filename, __dirname, jitiImport, jitiESMResolve) { ${e$3}\n});`;
				}(t$2, { async: i$1.async });
				try {
					f$1 = Kt().runInThisContext(m$1, {
						filename: r$1,
						lineOffset: 0,
						displayErrors: !1
					});
				} catch (t$3) {
					"SyntaxError" === t$3.name && i$1.async && e$2.nativeImport ? (debug(e$2, "[esm]", "[import]", "[fallback]", r$1), f$1 = function(e$3, t$4) {
						const i$2 = `data:text/javascript;base64,${Buffer.from(`export default ${e$3}`).toString("base64")}`;
						return (...e$4) => t$4(i$2).then((t$5) => t$5.default(...e$4));
					}(m$1, e$2.nativeImport)) : (e$2.opts.moduleCache && delete e$2.nativeRequire.cache[r$1], e$2.onError(t$3));
				}
				let g$1;
				try {
					g$1 = f$1(u$1.exports, u$1.require, u$1, u$1.filename, pathe_M_eThtNZ_dirname(u$1.filename), d$1.import, d$1.esmResolve);
				} catch (t$3) {
					e$2.opts.moduleCache && delete e$2.nativeRequire.cache[r$1], e$2.onError(t$3);
				}
				function next() {
					if (u$1.exports && u$1.exports.__JITI_ERROR__) {
						const { filename: t$3, line: i$2, column: s$2, code: r$2, message: n$2 } = u$1.exports.__JITI_ERROR__, a$2 = /* @__PURE__ */ new Error(`${r$2}: ${n$2} \n ${`${t$3}:${i$2}:${s$2}`}`);
						Error.captureStackTrace(a$2, jitiRequire), e$2.onError(a$2);
					}
					u$1.loaded = !0;
					return jitiInteropDefault(e$2, u$1.exports);
				}
				return i$1.async ? Promise.resolve(g$1).then(next) : next();
			}
			const Jt = "win32" === (0, e$1.platform)();
			function createJiti$1(e$2, t$2 = {}, i$1, s$1 = !1) {
				const r$1 = s$1 ? t$2 : function(e$3) {
					const t$3 = {
						fsCache: _booleanEnv("JITI_FS_CACHE", _booleanEnv("JITI_CACHE", !0)),
						rebuildFsCache: _booleanEnv("JITI_REBUILD_FS_CACHE", !1),
						moduleCache: _booleanEnv("JITI_MODULE_CACHE", _booleanEnv("JITI_REQUIRE_CACHE", !0)),
						debug: _booleanEnv("JITI_DEBUG", !1),
						sourceMaps: _booleanEnv("JITI_SOURCE_MAPS", !1),
						interopDefault: _booleanEnv("JITI_INTEROP_DEFAULT", !0),
						extensions: _jsonEnv("JITI_EXTENSIONS", [
							".js",
							".mjs",
							".cjs",
							".ts",
							".tsx",
							".mts",
							".cts",
							".mtsx",
							".ctsx"
						]),
						alias: _jsonEnv("JITI_ALIAS", {}),
						nativeModules: _jsonEnv("JITI_NATIVE_MODULES", []),
						transformModules: _jsonEnv("JITI_TRANSFORM_MODULES", []),
						tryNative: _jsonEnv("JITI_TRY_NATIVE", "Bun" in globalThis),
						jsx: _booleanEnv("JITI_JSX", !1)
					};
					t$3.jsx && t$3.extensions.push(".jsx", ".tsx");
					const i$2 = {};
					return void 0 !== e$3.cache && (i$2.fsCache = e$3.cache), void 0 !== e$3.requireCache && (i$2.moduleCache = e$3.requireCache), {
						...t$3,
						...i$2,
						...e$3
					};
				}(t$2), n$1 = r$1.alias && Object.keys(r$1.alias).length > 0 ? normalizeAliases(r$1.alias || {}) : void 0, a$1 = [
					"typescript",
					"jiti",
					...r$1.nativeModules || []
				], o$1 = /* @__PURE__ */ new RegExp(`node_modules/(${a$1.map((e$3) => escapeStringRegexp(e$3)).join("|")})/`), h$1 = [...r$1.transformModules || []], c$1 = /* @__PURE__ */ new RegExp(`node_modules/(${h$1.map((e$3) => escapeStringRegexp(e$3)).join("|")})/`);
				e$2 || (e$2 = process.cwd()), !s$1 && isDir(e$2) && (e$2 = pathe_M_eThtNZ_join(e$2, "_index.js"));
				const p$1 = pathToFileURL(e$2), l$1 = [...r$1.extensions].filter((e$3) => ".js" !== e$3), u$1 = i$1.createRequire(Jt ? e$2.replace(/\//g, "\\") : e$2), d$1 = {
					filename: e$2,
					url: p$1,
					opts: r$1,
					alias: n$1,
					nativeModules: a$1,
					transformModules: h$1,
					isNativeRe: o$1,
					isTransformRe: c$1,
					additionalExts: l$1,
					nativeRequire: u$1,
					onError: i$1.onError,
					parentModule: i$1.parentModule,
					parentCache: i$1.parentCache,
					nativeImport: i$1.nativeImport,
					createRequire: i$1.createRequire
				};
				s$1 || debug(d$1, "[init]", ...[
					["version:", ut.rE],
					["module-cache:", r$1.moduleCache],
					["fs-cache:", r$1.fsCache],
					["rebuild-fs-cache:", r$1.rebuildFsCache],
					["interop-defaults:", r$1.interopDefault]
				].flat()), s$1 || prepareCacheDir(d$1);
				return Object.assign(function(e$3) {
					return jitiRequire(d$1, e$3, { async: !1 });
				}, {
					cache: r$1.moduleCache ? u$1.cache : Object.create(null),
					extensions: u$1.extensions,
					main: u$1.main,
					options: r$1,
					resolve: Object.assign(function(e$3) {
						return jitiResolve(d$1, e$3, { async: !1 });
					}, { paths: u$1.resolve.paths }),
					transform: (e$3) => transform(d$1, e$3),
					evalModule: (e$3, t$3) => eval_evalModule(d$1, e$3, t$3),
					async import(e$3, t$3) {
						const i$2 = await jitiRequire(d$1, e$3, {
							...t$3,
							async: !0
						});
						return t$3?.default ? i$2?.default ?? i$2 : i$2;
					},
					esmResolve(e$3, t$3) {
						"string" == typeof t$3 && (t$3 = { parentURL: t$3 });
						const i$2 = jitiResolve(d$1, e$3, {
							parentURL: p$1,
							...t$3,
							async: !0
						});
						return !i$2 || "string" != typeof i$2 || i$2.startsWith("file://") ? i$2 : pathToFileURL(i$2);
					}
				});
			}
		})(), module.exports = i.default;
	})();
}) });

//#endregion
//#region ../../node_modules/.pnpm/jiti@2.6.1/node_modules/jiti/lib/jiti.mjs
var import_jiti = /* @__PURE__ */ __toESM(require_jiti(), 1);
function onError(err) {
	throw err;
}
const nativeImport = (id) => import(id);
let _transform;
function lazyTransform(...args) {
	if (!_transform) _transform = createRequire(import.meta.url)("../dist/babel.cjs");
	return _transform(...args);
}
function createJiti(id, opts = {}) {
	if (!opts.transform) opts = {
		...opts,
		transform: lazyTransform
	};
	return (0, import_jiti.default)(id, opts, {
		onError,
		nativeImport,
		createRequire
	});
}

//#endregion
export { createJiti as t };