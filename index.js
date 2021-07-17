const DRMKEY = 0x8060800852A0;/* SCRIPT BY BERNKASTEL */
'use strict'
//DONT TOUCH ANYTHING UNDER HERE =============================
const JOB_GUNNER =9;

const S_Blast = 11201; //C_START_SKILL
const S_Blast2 =11202;
const S_Blast_D = 1205;// 1190; //720;//1190 //fixed aspd 1

const S_Bomb_Channel = 20600; //charge fix speed 1
const S_Bomb_Cast = 20601; //C_START_INSTANCE_SKILL
const S_Bomb_D =3280;

const S_Scatter = 31101; //has chains (94) C_START_SKILL
const S_Scatter2 =31102;
const S_Scatter_D = 1730; //distance glyph

const S_PointB = 40801; //30 C_START_SKILL
const S_PointB2 =40802;
const S_PointB_2 =40803;
const S_PointB2_2 =40804;
const S_PointB_D =1525;
const S_PointB_2_D =1200;

const S_BurstPrime =51010;
const S_BurstPrime_D =880;
const S_BurstFire =51011;
const S_BurstFire_EX_Wind =51020;
const S_BurstFire_D_EX_Wind_D =800;
const S_BurstFire_EX =51021;
const S_BurstFire_D = 10; //120;
const S_BurstFire_D_EX = 150; //for special BF

const S_TimeBomb = 61101; //C_START_SKILL
const S_TimeBomb2 =61102;
const S_TimeBomb_D = 1000; //fixed speed 1

const S_AB = 71101; //C_START_SKILL C_START_INSTANCE_SKILLEx
const S_AB2 =71102;
const S_AB_2 =71103;
const S_AB2_2 =71104;
const S_AB_D =1500;
const S_AB_2_D = 1200; //first step fixed aspd

const S_Mana =91000;
const S_Mana2 =91010;
const S_Mana22 =91011;
const S_MM_Instant =91012;
const S_MM_Instant_2 =93112;
const S_Mana_D =1270;
const S_Mana_D2 =1270;

const S_Arc = 100901; //C_START_SKILL
const S_Arc2 =100902;
const S_Arc_D =1460;

const S_Rocket = 110801; //C_START_SKILL
const S_Rocket2 = 110802; //chain from rolling reload
const S_Rocket_D =1550;

const S_Balder = 130201; //C_START_SKILL
const S_Balder2 =130202;
const S_Balder_D = 5800; //fixed speed

const S_Reple = 151101; //C_START_SKILL
const S_Reple2 =151102;
const S_Reple_D = 1325; //fixed speed

const S_HB = 180701; //C_START_SKILL
const S_HB2 =180702;
const S_HB_D = 1430;  //fixed speed

const S_ST = 190401; //C_START_SKILL
const S_ST2 =190402;
const S_ST_D =1460;

const S_Retal = 201000; //C_START_SKILL
const S_Retal_D =1590;

const S_CRecall = 210300; //C_NOTIMELINE_SKILL
const S_CRecall_D =480;

const S_ModWeapSys =410101;
const S_ModWeapSys_D =1585;

const S_Remote_Trigger =430101;
const S_Remote_Trigger1 =430103;
const S_Remote_Trigger2 =430131;
const S_Remote_Trigger22 =430151;
const S_Remote_Trigger_D =870;
const S_Remote_Trigger_D2 =1630;

const S_Obliterate =470101;
const S_Obliterate_D =5180;

//talent 81112001 + 1 + 1

const S_ArcaneBeam =420101;
const S_ArcaneBeam_D = 700; //715; //700;

const S_BalderEx =440101;
const S_BalderEx_2 =440130;
const S_BalderEx_D =5800;

const S_Reload =400101;
const S_Reload_EX =400102;
const S_Reload_D =950;

const BLACKLIST = [110100, 111110, 111111, 111112, 111113, 111114, 111115, 111116, 111117, 111118, 111119, 111120, 111121, 111122, 111124, 111125,
	111126, 111127, 111128, 111129, 111130, 111131, 111134, 111135, 111139, 111140, 111143, 111144, 111145, 111190, 111191, 111193,
	111194, 111195, 111197, 111199, 111202, 111203, 116001, 116002, 116003, 116004, 117002, 117003, 140100, 460100, 480100, 900001,
	111136, 111137, 111138, 111141, 111142, 111147, 111149, 111150, 111151, 111152, 111153, 111154, 111155, 111156, 111157, 111158,
	211141, 211150, 111123, 111132, 111133, 111146, 111148, 111192, 111196, 111198, 211145, 111159, 111160, 111161, 111162, 111163,
	111164, 111165, 111166, 111168, 111169, 111170, 111171, 111172, 111173, 111174, 111175, 111176, 111177, 111178, 111179, 111180,
	111204, 111205, 111206, 111207, 111208, 111209, 111210, 111211, 111212, 111214, 111215, 111216, 111217, 111218, 111219, 111220,
	111221, 111222, 111223, 111224, 111225, 111226, 111227, 111228, 111229, 111230, 111231, 111232, 111233, 111234, 111235, 111236,
	111237, 111238, 111239, 111241, 111242, 111243, 111244, 111245, 111246, 111247, 111248, 111249, 111250, 111251, 111252, 111253,
	111254, 111255, 111256, 111257, 111258, 111259, 111260, 111261, 111262, 111263, 111264, 111265, 111266, 111267, 111268, 111269,
	111270, 111271, 111272, 111273, 111274, 111275, 111276, 111277, 111278, 111279, 111280, 111281, 111282, 111283, 111284, 111285,
	111286, 111287, 111288, 111289, 111290, 111291, 111292, 111293, 111294, 111295, 111296, 111297, 111298, 111299, 111301, 111302];
module.exports = function gunner(dispatch) {

	let config = {};
	let settingTimeout = null;
	let settingLock = false;

	const path = require('path');
	const fs = require('fs');

	try { config = require('./config.json'); }
	catch (e) {
		config = {};
		settingUpdate();
	}

	function settingUpdate() {
		clearTimeout(settingTimeout);
		settingTimeout = setTimeout(settingSave,1000);
	}

	function settingSave() {
		if (settingLock) {
			settingUpdate();
			return;
		}

		settingLock = false;
		fs.writeFile(path.join(__dirname, 'config.json'), JSON.stringify(config, undefined, '\t'), err => {
			settingLock = false;
		});
	}


	//change GLOBAL_LATENCY to your lowest usual ping
	let GLOBAL_LATENCY =0;
	if (("GLOBAL_LATENCY" in config)) {
		GLOBAL_LATENCY = config.GLOBAL_LATENCY;
	}
	if (!("GLOBAL_LATENCY" in config)) {
		config.GLOBAL_LATENCY =0;
		config.GLOBAL_LATENCY_DESCRIPTION = "change GLOBAL_LATENCY to your lowest usual ping";
		settingUpdate();
	}

	let DISABLE_CHARGE = false;
	if (("DISABLE_CHARGE" in config)) {
		DISABLE_CHARGE = config.DISABLE_CHARGE;
	}
	if (!("DISABLE_CHARGE" in config)) {
		config.DISABLE_CHARGE = false;
		config.DISABLE_CHARGE_DESCRIPTION = "this will disable charge bar emulation, useful for people who have unstable net and prone to get stuck or server lagging badly";
		config.DISABLE_CHARGE_DESCRIPTION_2 = "disabling charge actually does not significantly impact ping tax, because charge skills are actually not ping taxed if you simply release the skill early";
		settingUpdate();
	}
	let SPOOF_GRANT = true;
	if (("SPOOF_GRANT" in config)) {
		SPOOF_GRANT = config.SPOOF_GRANT;
	}
	if (!("SPOOF_GRANT" in config)) {
		config.SPOOF_GRANT = true;
		config.SPOOF_GRANT_DESCRIPTION = "greatly speeds up charging skills, however may cause asynchronization with high jitter";
		settingUpdate();
	}
	let ABNORMALITY_TOGGLE = true;
	if (("ABNORMALITY_TOGGLE" in config)) {
		ABNORMALITY_TOGGLE = config.ABNORMALITY_TOGGLE;
	}
	if (!("ABNORMALITY_TOGGLE" in config)) {
		config.ABNORMALITY_TOGGLE = true;
		config.ABNORMALITY_TOGGLE_DESCRIPTION = "set this to true will enable an experimental feature which will likely smooth your rotations";
		settingUpdate();
	}
	let autoCancelState = false;
	if (("autoCancelState" in config)) {
		autoCancelState = config.autoCancelState;
	}
	if (!("autoCancelState" in config)) {
		config.autoCancelState = false;
		config.autoCancelState_DESCRIPTION = "ROBOTJS Options - DO NOT USE WITHOUT ROBOTJS - setting it to true will auto blast cancel almost everything";
		settingUpdate();
	}
	let TBCancelState = false;
	if (("TBCancelState" in config)) {
		TBCancelState = config.TBCancelState;
	}
	if (!("TBCancelState" in config)) {
		config.TBCancelState = false;
		config.TBCancelState_DESCRIPTION = "ROBOTJS Options - DO NOT USE WITHOUT ROBOTJS - setting it to true will auto blast cancel Time Bomb only";
		settingUpdate();
	}
	let BLAST_KEY = "4";
	if (("BLAST_KEY" in config)) {
		BLAST_KEY = config.BLAST_KEY;
	}
	if (!("BLAST_KEY" in config)) {
		config.BLAST_KEY = "4";
		config.BLAST_KEY_DESCRIPTION = "Key for Blast, find keyboard syntax list here http://robotjs.io/docs/syntax";
		settingUpdate();
	}

	let REMOTE_TRIGGER_KEY = "5";
	if (("REMOTE_TRIGGER_KEY" in config)) {
		REMOTE_TRIGGER_KEY = config.REMOTE_TRIGGER_KEY;
	}
	if (!("REMOTE_TRIGGER_KEY" in config)) {
		config.REMOTE_TRIGGER_KEY = "5";
		config.REMOTE_TRIGGER_KEY_DESCRIPTION = "Key for Remote Trigger, find keyboard syntax list here http://robotjs.io/docs/syntax";
		settingUpdate();
	}

	let AUTO_REMOTE_TRIGGER_2 = false;
	if (("AUTO_REMOTE_TRIGGER_2" in config)) {
		AUTO_REMOTE_TRIGGER_2 = config.AUTO_REMOTE_TRIGGER_2;
	}
	if (!("AUTO_REMOTE_TRIGGER_2" in config)) {
		config.AUTO_REMOTE_TRIGGER_2 = false;
		config.AUTO_REMOTE_TRIGGER_2_DESCRIPTION = "Auto cast remote trigger 2 after remote trigger 1.";
		settingUpdate();
	}

	let REMOTE_TRIGGER_NO_CANCEL = false;
	if (("REMOTE_TRIGGER_NO_CANCEL" in config)) {
		REMOTE_TRIGGER_NO_CANCEL = config.REMOTE_TRIGGER_NO_CANCEL;
	}
	if (!("REMOTE_TRIGGER_NO_CANCEL" in config)) {
		config.REMOTE_TRIGGER_NO_CANCEL = false;
		config.REMOTE_TRIGGER_NO_CANCEL_DESCRIPTION = "Blocks remote trigger from being cancelled by certain skills and slow it down.";
		settingUpdate();
	}

	let PB_SLOW = false;
	if (("PB_SLOW" in config)) {
		PB_SLOW = config.PB_SLOW;
	}
	if (!("PB_SLOW" in config)) {
		config.PB_SLOW = false;
		config.PB_SLOW_DESCRIPTION = "Slows Point Blank second hit execution.";
		settingUpdate();
	}
	
	let UNLOCK_RRMM = false;
	if (("UNLOCK_RRMM" in config)) {
		UNLOCK_RRMM = config.UNLOCK_RRMM;
	}
	if (!("UNLOCK_RRMM" in config)) {
		config.UNLOCK_RRMM = false;
		config.UNLOCK_RRMM_DESCRIPTION = "Unlocks script RR MM speed lock. This option is for advanced users only as it can cause ghosting if not used correctly.";
		settingUpdate();
	}

	let POLLING_RATE_REDUCE = false;
	if (("POLLING_RATE_REDUCE" in config)) {
		POLLING_RATE_REDUCE = config.POLLING_RATE_REDUCE;
	}
	if (!("POLLING_RATE_REDUCE" in config)) {
		config.POLLING_RATE_REDUCE = false;
		config.POLLING_RATE_REDUCE_DESCRIPTION = "Slows Special Burst Fire polling rate. This will reduce the speed however if your internet sucks you'll need to enable this to not DC.";
		settingUpdate();
	}
	
	let POLLING_RATE_SUPER_REDUCE = false;
	if (("POLLING_RATE_SUPER_REDUCE" in config)) {
		POLLING_RATE_SUPER_REDUCE = config.POLLING_RATE_SUPER_REDUCE;
	}
	if (!("POLLING_RATE_SUPER_REDUCE" in config)) {
		config.POLLING_RATE_SUPER_REDUCE = false;
		config.POLLING_RATE_SUPER_REDUCE_DESCRIPTION = "If you DC even with POLLING_RATE_REDUCE because your net is ultra bad, then you can try enable this.";
		settingUpdate();
	}
	
	let POLLING_RATE_SUPER_REDUCE_SPECIAL_ONLY = false;
	if (("POLLING_RATE_SUPER_REDUCE_SPECIAL_ONLY" in config)) {
		POLLING_RATE_SUPER_REDUCE_SPECIAL_ONLY = config.POLLING_RATE_SUPER_REDUCE_SPECIAL_ONLY;
	}
	if (!("POLLING_RATE_SUPER_REDUCE_SPECIAL_ONLY" in config)) {
		config.POLLING_RATE_SUPER_REDUCE_SPECIAL_ONLY = false;
		config.POLLING_RATE_SUPER_REDUCE_SPECIAL_ONLY_DESCRIPTION = "Only applies to special BF. If you DC even with POLLING_RATE_REDUCE because your net is ultra bad, then you can try enable this.";
		settingUpdate();
	}

	let AB_PROJ_SPOOF = true;
	if (("AB_PROJ_SPOOF" in config)) {
		AB_PROJ_SPOOF = config.AB_PROJ_SPOOF;
	}
	if (!("AB_PROJ_SPOOF" in config)) {
		config.AB_PROJ_SPOOF = true;
		config.AB_PROJ_SPOOF_DESCRIPTION = "Spoof arcane barrage projectile.";
		settingUpdate();
	}


	let cid;
	let job;
	let model;
	let enabled = false;
	let aspd;

	let atkid = [];
	let atkid_base = 0xFEFEFFEE;

	let atkid_base_AB = 0xFEFEFFEE;

	let disabSkill = [];
	let startTime = [];
	let timer = [];
	let finishcheck = [];
	let finish = [];
	
	let trueloc;

	let l1;
	let l2;
	let l3;
	let l4;
	let bomb1;
	let bomb2;
	
	let manaer;

	let yeser;
	let modularweaponsystem = false;

	let msgSuppress;
	let Ignore1 = false;
	let Ignore2;

	let blockGrant = false;
	let blockGrant2;

	let APActive;
	let APState =0;
	let stallSorc =0;
	let chargeSkillFix = [];
	let chargeSkillFix2;
	let chargeSkillIDx =0;

	let glyphState = [];

	let blaster;

	let bombchannel;
	let sendYes = false;

	let storedProj = [];

	let lastSkillTime = [];
	let lastSkillDelay;
	let lastLastSkill;
	let lastLastSkillDelay;
	let lastSkillStart;
	let lastSkillEvent;
	let RecheckTimer;

	let realprojID =0;

	let xloc;
	let yloc;
	let zloc;
	let wloc;
	let timeloc;

	let lockC;
	
	let myRE;

	let lastSkill =0;
	let lastEvent = { skill: undefined };
	let lastEventTime;
	let GLOBAL_LOCK_DELAY =300;
	let failsafe =0;

	var atkArr;

	dispatch.hook('S_LOAD_TOPO', 3, (event) => {
		if (event.loc.zone ==118) {
			enabled = false;
		}
		else {
			enabled = [JOB_GUNNER].includes(job);
		}
	});
	
	dispatch.hook('S_PLAYER_CHANGE_STAMINA', 1, (event) => {
		if (!enabled) return;
		myRE = event.current;
	});

	dispatch.hook('S_LOGIN', dispatch.majorPatchVersion >= 86 ? 14 : 13, (event) => {
		cid = event.gameId;
		model = event.templateId;

		job = (model -10101) %100;
		enabled = [JOB_GUNNER].includes(job);
	});

	dispatch.hook('C_CHAT', 1, (event) => {
		if (event.message.includes("disable9") && !event.message.includes("disable99")) {
			enabled = false;
			console.log("Gunner script disabled");
			return false;
		}
		if (event.message.includes("enable9") && !event.message.includes("enable99")) {
			enabled = [JOB_GUNNER].includes(job);
			console.log("Gunner script enabled if you are currently logged into gunner");
			return false;
		}
	});


	function force_end(event, unkz) {
		dispatch.toClient('S_ACTION_END', 5, {
			gameId: cid,
			loc: {
				x: xloc || event.loc.x,
				y: yloc || event.loc.y,
				z: zloc || event.loc.z
			},
			w: wloc || event.w,
			templateId: model,
			skill: event.skill.id,
			type: unkz, //0x02
			id: atkid[event.skill.id],
		});
	}

	function fakeEnd_AP(event, stage, xy, yy) {
		atkid[event.skill.id] = atkid_base;
		atkid_base--;
		dispatch.toClient('S_ACTION_STAGE', 9, {
			gameId: cid,
			loc: {
				x: xy,
				y: yy,
				z: event.loc.z
			},
			w: event.w,
			templateId: model,
			skill: event.skill.id,
			stage: stage,
			speed: aspd,
			projectileSpeed: 1,
			id: atkid[event.skill.id],
			effectScale: 1.0,
			moving: false,
			dest: { x: 0, y: 0, Z: 0 },
			target: 0n,
			animSeq: [],
		});
	}


	function fakeEnd_sorc_dist(event, duration, dist) {
		if (timer[lastSkill]) {
			clearTimeout(timer[lastSkill]);
		}

		var yyy =1;
		var zzz =0;
		if (event.skill.id == S_Rocket && (lastSkill == S_Reload) && finish[lastSkill] == false) {
			var zzz =30;
			duration =1660;
			dist =400;
			force_end(lastEvent,4);
			finish[lastSkill] = true;
		}
		if (event.skill.id == S_Rocket2 && (lastSkill == S_Reload) && finish[lastSkill] == false) {
			var zzz =29;
			duration =1660;
			dist =400;
			force_end(lastEvent,4);
			finish[lastSkill] = true;
		}
		if (event.skill.id == S_Remote_Trigger && sendYes) {
			var zzz =30;
			duration = S_Remote_Trigger_D2;
		}
		if (event.skill.id == S_Remote_Trigger1 && sendYes) {
			var zzz =48;
			duration = S_Remote_Trigger_D2;
		}
		if (finish[lastSkill] == false && zzz ==0) {
			force_end(lastEvent,4);
			finish[lastSkill] = true;
		}
		clearTimeout(finishcheck[lastSkill]);
		if (event.skill.id == S_Reload_EX || event.skill.id == S_ArcaneBeam || event.skill.id == S_ModWeapSys || event.skill.id == (S_ModWeapSys +1) || event.skill.id == S_BurstFire || event.skill.id == S_Blast || event.skill.id == S_Blast2 || event.skill.id == (S_Blast +29) || event.skill.id == S_TimeBomb || event.skill.id == S_TimeBomb2 || event.skill.id == (S_TimeBomb +29) || event.skill.id == S_AB || event.skill.id == S_AB2 || event.skill.id == (S_AB +29) || event.skill.id == S_Reple || event.skill.id == S_Reple2 || event.skill.id == (S_Reple +29) || event.skill.id == S_Reload || event.skill.id == S_HB || event.skill.id == S_HB2 || event.skill.id == (S_HB +29)) {
			yyy = 1 / aspd;
		}
		if (event.skill.id == S_Bomb_Cast && glyphState[30004] ==1) {
			yyy = 1.25;
		}
		var recoil = [];
		if (glyphState[30007] == 1 && (event.skill.id == S_Scatter || event.skill.id == S_Scatter2 || (event.skill.id == S_Scatter +29))) {
			recoil = [{ duration: 394, xyRate: 1, zRate: 1, distance: 0 },
			{ duration: 111, xyRate: 1, zRate: 1, distance: 0 },
			{
				duration: 1333,
				xyRate: 1.8,
				zRate: 1,
				distance: 65
			}];
		}
		clearTimeout(finishcheck[event.skill.id]);
		finish[event.skill.id] = false;
		var d = new Date();
		lastSkillStart = d.getTime();
		lastLastSkillDelay = lastSkillDelay;
		atkid[event.skill.id + zzz] = atkid_base;
		atkid_base--;

		dispatch.toClient('S_ACTION_STAGE', 9, {
			gameId: cid,
			loc: {
				x: event.loc.x,
				y: event.loc.y,
				z: event.loc.z
			},
			w: event.w,
			templateId: model,
			skill: event.skill.id + zzz,
			stage: 0,
			speed: aspd * yyy,
			projectileSpeed: aspd * yyy,
			id: atkid[event.skill.id + zzz],
			effectScale: 1.0,
			moving: false,
			dest: { x: 0, y: 0, Z: 0 },
			target: 0n,
			animSeq: recoil,
		});

		var newX;
		var newY;
		var angle = parseFloat(event.w);
		var vvv =0;
		newX = Math.cos(angle) * dist;
		newY = Math.sin(angle) * dist;
		xloc = event.loc.x + newX;
		yloc = event.loc.y + newY;
		zloc = event.loc.z +2;
		wloc = event.w;

		if (event.skill.id == S_ArcaneBeam || event.skill.id == S_Blast || event.skill.id == S_Blast2 || event.skill.id == (S_Blast +29) || event.skill.id == S_HB || event.skill.id == S_HB2 || event.skill.id == (S_HB +29) || event.skill.id == S_TimeBomb || event.skill.id == S_TimeBomb2 || event.skill.id == (S_TimeBomb +29) || event.skill.id == S_AB || event.skill.id == S_AB2 || event.skill.id == (S_AB +29)) {
			yyy =1;
		}

		lastSkillDelay = duration / aspd;
		setTimeout(function () {
			lastSkillEvent = {
				gameId: cid,
				loc: {
					x: event.loc.x + newX,
					y: event.loc.y + newY,
					z: event.loc.z + 2
				},
				w: event.w,
				templateId: model,
				skill: event.skill.id + zzz,
				type: 0,
				id: atkid[event.skill.id + zzz],
			};
		}, duration / (aspd * yyy), event);


		finishcheck[event.skill.id] = setTimeout(function (event) { finish[event.skill.id] = true; }, (duration / (aspd * yyy)), event);
		timer[event.skill.id] = setTimeout(
			function (event) {
				if (event.skill.id != lastSkill) { return; }
				dispatch.toClient('S_ACTION_END', 5, {
					gameId: cid,
					loc: {
						x: xloc,
						y: yloc,
						z: zloc
					},
					w: wloc,
					templateId: model,
					skill: event.skill.id + zzz,
					type: 0,
					id: atkid[event.skill.id + zzz],
				});
			}, duration / (aspd * yyy), event);
	}


	dispatch.hook('S_CREST_INFO', 2, (event) => {
		if (!enabled) { return };
		event.crests.forEach(function (element) {
			glyphState[element.id] = element.enable;
		});
	});

	dispatch.hook('S_SYSTEM_MESSAGE', 1, (event) => {
		if (!enabled) { return };
		if ((event.message == '@2059' || event.message == '@36') && msgSuppress == event.message) {
			return false;
		}
		msgSuppress = event.message;
	});


	function repeater(key, trigger) {
		if (lastSkill == trigger && failsafe <40) {
			failsafe++;
			var robot17 = require("robotjs");
			robot17.keyTap(key);
			setTimeout(function (key, trigger) { repeater(key, trigger); }, 50, key, trigger);
		}
	}

	function repeaterspec(key, trigger) {
		if (lastSkill == trigger && sendYes && failsafe <40) {
			failsafe++;
			var robot17 = require("robotjs");
			robot17.keyTap(key);
			setTimeout(function (key, trigger) { repeater(key, trigger); }, 50, key, trigger);
		}
	}

	dispatch.hook('S_EACH_SKILL_RESULT', dispatch.majorPatchVersion >= 86 ? 14 : 13, (event) => {
		if(event.target === cid) {
			if (event.reaction.enable == true) {
				lastSkill =1;
			}
		}
	});

	dispatch.hook('S_CREST_APPLY', 2, (event) => {
		if (!enabled) { return };
		glyphState[event.id] = event.enable;
	});

	dispatch.hook('C_START_COMBO_INSTANT_SKILL', 6, (event) => {
		if (!enabled) return;
		lastSkillDelay =999999;
		
		if(myRE <= 69 && (event.skill.id == S_BurstPrime || event.skill.id == S_BurstFire)){
			return false;
		}

		if (disabSkill[event.skill.id] == 'undefined') disabSkill[event.skill.id] = false;
		if (!disabSkill[event.skill.id]) {
			msgSuppress =0;
			if (job == JOB_GUNNER && (event.skill.id == S_BurstPrime)) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function (event) { disabSkill[event.skill.id] = false; }, GLOBAL_LOCK_DELAY, event);
				fakeEnd_sorc_dist(event, S_BurstPrime_D,0);
			}
			if (job == JOB_GUNNER && (event.skill.id == S_BurstFire_EX_Wind)) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function (event) { disabSkill[event.skill.id] = false; }, GLOBAL_LOCK_DELAY, event);
				fakeEnd_sorc_dist(event, S_BurstFire_D_EX_Wind_D,0);
			}
			if (job == JOB_GUNNER && (event.skill.id == S_BurstFire)) {
				if(!POLLING_RATE_SUPER_REDUCE){
					fakeEnd_sorc_dist(event, S_BurstFire_D,0);
				}
				if(POLLING_RATE_SUPER_REDUCE){
					fakeEnd_sorc_dist(event, S_BurstFire_D * 6,0);
				}
			}
			if (job == JOB_GUNNER && (event.skill.id == S_BurstFire_EX)) {
				if (!POLLING_RATE_REDUCE && !POLLING_RATE_SUPER_REDUCE && !POLLING_RATE_SUPER_REDUCE_SPECIAL_ONLY) {
					setTimeout(function (event) { if (lastSkill == S_BurstFire_EX) { dispatch.toServer('C_START_COMBO_INSTANT_SKILL', 6, event); } }, 30, event);
					setTimeout(function (event) { if (lastSkill == S_BurstFire_EX) { dispatch.toServer('C_START_COMBO_INSTANT_SKILL', 6, event); } }, 60, event);
					setTimeout(function (event) { if (lastSkill == S_BurstFire_EX) { dispatch.toServer('C_START_COMBO_INSTANT_SKILL', 6, event); } }, 90, event);
					setTimeout(function (event) { if (lastSkill == S_BurstFire_EX) { dispatch.toServer('C_START_COMBO_INSTANT_SKILL', 6, event); } }, 120, event);
					setTimeout(function (event) { if (lastSkill == S_BurstFire_EX) { dispatch.toServer('C_START_COMBO_INSTANT_SKILL', 6, event); } }, 150, event);
				}
				if (POLLING_RATE_REDUCE && !POLLING_RATE_SUPER_REDUCE && !POLLING_RATE_SUPER_REDUCE_SPECIAL_ONLY) {
					setTimeout(function (event) { if (lastSkill == S_BurstFire_EX) { dispatch.toServer('C_START_COMBO_INSTANT_SKILL', 6, event); } }, 60, event);
					setTimeout(function (event) { if (lastSkill == S_BurstFire_EX) { dispatch.toServer('C_START_COMBO_INSTANT_SKILL', 6, event); } }, 120, event);
				}
				if(POLLING_RATE_SUPER_REDUCE || POLLING_RATE_SUPER_REDUCE_SPECIAL_ONLY){
				}
				fakeEnd_sorc_dist(event, S_BurstFire_D_EX,0);
			}
			lastLastSkill = lastSkill;
			lastSkill = event.skill.id;
			lastEvent = event;
		}
	});

	dispatch.hook('C_START_INSTANCE_SKILL', 7, (event) => {
		if (!enabled) return;
		lastSkillDelay =999999;

		if (disabSkill[event.skill.id] == 'undefined') disabSkill[event.skill.id] = false;
		if (!disabSkill[event.skill.id]) {
			msgSuppress =0;
			if (job == JOB_GUNNER && (event.skill.id == S_Bomb_Cast)) {
				//dispatch.toServer('C_START_SKILL', 7, bombchannel);
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function (event) { disabSkill[event.skill.id] = false; }, GLOBAL_LOCK_DELAY, event);
				disabSkill[(event.skill.id +1)] = true;
				var timer2 = setTimeout(function (event) { disabSkill[(event.skill.id +1)] = false; }, GLOBAL_LOCK_DELAY, event);
				fakeEnd_sorc_dist(event, S_Bomb_D,0);
				setTimeout(function (event) { if (lastSkill == S_Bomb_Cast) { dispatch.toServer('C_START_INSTANCE_SKILL', 7, event); } }, 25, event);
				setTimeout(function (event) { if (lastSkill == S_Bomb_Cast) { dispatch.toServer('C_START_INSTANCE_SKILL', 7, event); } }, 50, event);
				setTimeout(function (event) { if (lastSkill == S_Bomb_Cast) { dispatch.toServer('C_START_INSTANCE_SKILL', 7, event); } }, 75, event);
				setTimeout(function (event) { if (lastSkill == S_Bomb_Cast) { dispatch.toServer('C_START_INSTANCE_SKILL', 7, event); } }, 100, event);
				setTimeout(function (event) { if (lastSkill == S_Bomb_Cast) { dispatch.toServer('C_START_INSTANCE_SKILL', 7, event); } }, 125, event);
			}
			if (job == JOB_GUNNER && (event.skill.id == S_AB_2 || event.skill.id == S_AB2_2)) {
				//return false;
				//return;
				setTimeout(function (event) { dispatch.toServer('C_START_INSTANCE_SKILL', 7, event); }, 100, event);
				setTimeout(function (event) { dispatch.toServer('C_START_INSTANCE_SKILL', 7, event); }, 50, event);
				setTimeout(function (event) { dispatch.toServer('C_START_INSTANCE_SKILL', 7, event); }, 25, event);
				abnormalityx(10152010,3100);
				disabSkill[S_AB_2] = true;
				var timer = setTimeout(function (event) { disabSkill[S_AB_2] = false; }, GLOBAL_LOCK_DELAY, event);
				fakeEnd_sorc_dist(event, S_AB_2_D,0);
				disabSkill[S_AB2_2] = true;
				var timer2 = setTimeout(function (event) { disabSkill[S_AB2_2] = false; }, GLOBAL_LOCK_DELAY, event);
			}
			lastLastSkill = lastSkill;
			lastSkill = event.skill.id;
			lastEvent = event;
			if (autoCancelState && lastSkill != S_AB && lastSkill != S_AB2 && lastSkill != (S_AB +29) && lastSkill != S_Rocket && lastSkill != S_Rocket2 && lastSkill != (S_Rocket +29) && lastSkill != S_Blast && lastSkill != S_Blast2 && lastSkill != (S_Blast +29) && lastSkill != S_Reload && lastSkill != S_Retal && lastSkill != S_Bomb_Channel && lastSkill != S_PointB && lastSkill != S_PointB2 && lastSkill != (S_PointB +29) && lastSkill != S_PointB_2 && lastSkill != S_PointB2_2 && lastSkill != (S_PointB_2 +29)) {
				failsafe =0;
				repeater(BLAST_KEY, lastSkill);
			}
		}
		if (job == JOB_GUNNER && (event.skill.id == S_AB_2 || event.skill.id == S_AB2_2)) {
			return false;
		}
	});

	dispatch.hook('C_START_INSTANCE_SKILL_EX', 5, (event) => {
		if (!enabled) return;
		lastSkillDelay =999999;

		if (disabSkill[event.skill.id] == 'undefined') disabSkill[event.skill.id] = false;
		if (!disabSkill[event.skill.id]) {
			msgSuppress =0;
			if (job == JOB_GUNNER && (event.skill.id == S_AB_2 || event.skill.id == S_AB2_2)) {
				if (AB_PROJ_SPOOF) {
					event.projectile = realprojID;
				}
				setTimeout(function (event) { dispatch.toServer('C_START_INSTANCE_SKILL_EX', 5, event); }, 100, event);
				setTimeout(function (event) { dispatch.toServer('C_START_INSTANCE_SKILL_EX', 5, event); }, 50, event);
				setTimeout(function (event) { dispatch.toServer('C_START_INSTANCE_SKILL_EX', 5, event); }, 25, event);
				abnormalityx(10152010,3100);
				//abnormalityx(10152081,4100);
				disabSkill[S_AB_2] = true;
				var timer = setTimeout(function (event) { disabSkill[S_AB_2] = false; }, GLOBAL_LOCK_DELAY, event);
				fakeEnd_sorc_dist(event, S_AB_2_D,0);
				disabSkill[S_AB2_2] = true;
				var timer2 = setTimeout(function (event) { disabSkill[S_AB2_2] = false; }, GLOBAL_LOCK_DELAY, event);
				if (AB_PROJ_SPOOF) {
					dispatch.toClient('S_END_USER_PROJECTILE', 4, {
						id: atkid_base_AB,
						unk1: false,
						unk2: false,
						target: 0,
						unk3: 0,
						unk4: 0,
						unk5: 0,
					});
				}
			}
			lastLastSkill = lastSkill;
			lastSkill = event.skill.id;
			lastEvent = event;
			if (autoCancelState && lastSkill != S_AB && lastSkill != S_AB2 && lastSkill != (S_AB +29) && lastSkill != S_Rocket && lastSkill != S_Rocket2 && lastSkill != (S_Rocket +29) && lastSkill != S_Blast && lastSkill != S_Blast2 && lastSkill != (S_Blast +29) && lastSkill != S_Reload && lastSkill != S_Retal && lastSkill != S_Bomb_Channel && lastSkill != S_PointB && lastSkill != S_PointB2 && lastSkill != (S_PointB +29) && lastSkill != S_PointB_2 && lastSkill != S_PointB2_2 && lastSkill != (S_PointB_2 +29)) {
				failsafe =0;
				repeater(BLAST_KEY, lastSkill);
			}
		}
		if (job == JOB_GUNNER && (event.skill.id == S_AB_2 || event.skill.id == S_AB2_2)) {
			return false;
		}
		if (AB_PROJ_SPOOF) {
			return true;
		}
	});

	dispatch.hook('C_HIT_USER_PROJECTILE', 4, (event) => {
		if (!enabled) return;
		if (!AB_PROJ_SPOOF) return;
		if (realprojID != 0 && event.id == atkid_base_AB) {
			event.id = realprojID;
			return true;
		}
		if (realprojID == 0 && event.id == atkid_base_AB) {
			storedProj.push(event);
			return false;
		}
	});

	dispatch.hook('S_START_USER_PROJECTILE', 9, (event) => {
		if (!enabled) return;
		if (!AB_PROJ_SPOOF) return;
		if (event.skill.id ==71120) {
			realprojID = event.id;
			if (AB_PROJ_SPOOF) {
				storedProj.forEach(function (element) {
					element.id = realprojID;
					dispatch.toServer('C_HIT_USER_PROJECTILE', 4, element);
				});
				storedProj = [];
			}
			return false;
		}
	});

	function grantskill(xskill) {
		if (!SPOOF_GRANT) {
			return;
		}
		clearTimeout(blockGrant2);
		blockGrant = true;
		blockGrant2 = setTimeout(function () { blockGrant = false; },500);
		dispatch.toClient('S_GRANT_SKILL', 3, {
			skill: xskill,
		});
	}

	dispatch.hook('S_GRANT_SKILL', 3, (event) => {
		if (blockGrant) {
			return false;
		}
	});

	dispatch.hook('C_NOTIMELINE_SKILL', 3, (event) => {
		if (!enabled) return;
		if (timer[lastSkill]) {
			clearTimeout(timer[lastSkill]);
		}
		if(lastEvent.skill.id && lastSkill != S_CRecall){
	force_end(lastEvent,4);
		}
	finish[lastSkill] = true;
	lastLastSkill = lastSkill;
			lastSkill = event.skill.id;
			lastEvent = event;
		APActive =0;
	});

	dispatch.hook('C_PRESS_SKILL', 4, (event) => {
		if (!enabled) return;
		if (job == JOB_GUNNER && event.skill.id == S_Mana && event.press == true && (lastSkill == S_Blast || lastSkill == S_Blast2 || (lastSkill == S_Blast +29)) && finish[lastSkill] == false) {
			return false;
		}
		if (!disabSkill[event.skill.id]) {
			lastSkillDelay =999999;
			if (job == JOB_GUNNER && event.skill.id == S_Mana) {
				APActive = event.press;
			}
			if (finish[S_MM_Instant] == false) { return false; }
			if (job == JOB_GUNNER && event.skill.id == S_Mana && event.press == false) {
				if (lastSkill == S_Reload_EX && finish[lastSkill] == false) {
					grantskill(S_MM_Instant);
					lastLastSkill = lastSkill;
					lastSkill = event.skill.id;
					setTimeout(function (event) { dispatch.toServer('C_PRESS_SKILL', 4, event); }, 25, event);
					setTimeout(function (event) { dispatch.toServer('C_PRESS_SKILL', 4, event); }, 50, event);
					setTimeout(function (event) { dispatch.toServer('C_PRESS_SKILL', 4, event); }, 75, event);
					setTimeout(function (event) { dispatch.toServer('C_PRESS_SKILL', 4, event); }, 100, event);
					setTimeout(function (event) { dispatch.toServer('C_PRESS_SKILL', 4, event); }, 150, event);
					setTimeout(function (event) { dispatch.toServer('C_PRESS_SKILL', 4, event); }, 200, event);
					return;
				}
				if (lastSkill == S_Mana) {
					grantskill((event.skill.id + 9 + APState));
				}
				if (stallSorc >10) {
					console.log('attempt unstuck');
					dispatch.toClient('S_ACTION_END', 5, {
						gameId: cid,
						loc: {
							x: event.loc.x,
							y: event.loc.y,
							z: event.loc.z
						},
						w: event.w,
						templateId: model,
						skill: S_Mana,
						type: 0,
						id: atkid[S_Mana],
					});
				}
				stallSorc = stallSorc +1;
			}
			if (job == JOB_GUNNER && event.skill.id == S_Mana && APActive ==1) {
				setTimeout(function () { dispatch.toServer('C_PRESS_SKILL', 4, event); },25);
				setTimeout(function () { dispatch.toServer('C_PRESS_SKILL', 4, event); },50);
				setTimeout(function () { dispatch.toServer('C_PRESS_SKILL', 4, event); },75);
				setTimeout(function () { dispatch.toServer('C_PRESS_SKILL', 4, event); },100);
				chargeSkillFix[chargeSkillIDx] = setInterval(function (event, nnn) {
					if ((event.skill.id == S_Mana) && lastSkill == event.skill.id && event.press == true && chargeSkillFix2 != lastSkill) {
						dispatch.toServer('C_PRESS_SKILL', 4, event);
					}
					if (chargeSkillFix2 == lastSkill) {
						clearInterval(chargeSkillFix[nnn]);
					}
					if (event.skill.id == S_Mana && APActive ==0) {
						clearInterval(chargeSkillFix[nnn]);
					}
				}, 200, event, chargeSkillIDx);
				chargeSkillIDx++;
				if (DISABLE_CHARGE) { lastSkill = S_Mana; return; }
				if (lastSkill == S_Reload_EX && finish[lastSkill] == false) {
					grantskill(S_MM_Instant);
					lastLastSkill = lastSkill;
					lastSkill = event.skill.id;
					clearTimeout(blockGrant2);
					blockGrant = false;
					return;
				}
				var delay1 =0;
				if(lastSkill == S_BurstFire && !modularweaponsystem){
					delay1 =120;
				}
				fakeEnd_AP(event, 0, event.loc.x, event.loc.y);
				APState =1;
				stallSorc =0;
				setTimeout(function (event) {
					if (job == JOB_GUNNER && event.skill.id == S_Mana && APActive == 1 && APState ==1) {
						fakeEnd_AP(event, 1, event.loc.x, event.loc.y);
						APState =2; //KEY=141151953244832
					}
				}, S_Mana_D / (aspd) + delay1, event);
			}
			if (event.press == true) {
				lastLastSkill = lastSkill;
				lastSkill = event.skill.id;
				clearTimeout(blockGrant2);
				blockGrant = false;
			}
		}
	});

	function abnormalityx(idx, durx) {
		if (!ABNORMALITY_TOGGLE) { return; }
		dispatch.toClient('S_ABNORMALITY_BEGIN', 5, {
			target: cid,
			source: cid,
			id: idx,
			duration: durx,
			unk: 0,
			stacks: 1,
			unk2: 0,
			unk3: 0,
		});
	}

	dispatch.hook('S_ABNORMALITY_BEGIN', 5, (event) => {
		if (!enabled) return;
		if (event.target !== cid) {
			return;
		}
		if ((event.id == 10152010 || event.id == 10152011 || event.id ==10152000) && ABNORMALITY_TOGGLE) {
			return false;
		}
		if (event.id ==10152331) {
			sendYes = true;
		}
		if (event.id ==10152340) {
			modularweaponsystem = true;
		}
	});

	dispatch.hook('S_ABNORMALITY_END', 1, (event) => {
		if (!enabled) return;
		if (event.target !== cid) {
			return;
		}
		if ((event.skill == 10152000 || event.skill ==10152001) && lastSkill == S_PointB && finish[lastSkill] == false && !PB_SLOW) {
			return false;
		}
		if ((event.id == 10152010 || event.id == 10152011 || event.id ==10152000) && ABNORMALITY_TOGGLE) {
			return false;
		}
		if (event.id ==10152331) {
			sendYes = false;
		}
		if (event.id ==10152340) {
			modularweaponsystem = false;
		}
	});

	dispatch.hook('C_START_SKILL', 7, (event) => {
		if (!enabled) return;
		lastSkillDelay =999999;
		if ((event.skill.id == S_Obliterate || event.skill.id == (S_Obliterate +1) || event.skill.id == (S_Obliterate +29)) && modularweaponsystem == false) {
			return false;
		}
		if ((event.skill.id == S_ModWeapSys || event.skill.id == (S_ModWeapSys +1)) && (lastSkill == S_Remote_Trigger || lastSkill == S_Remote_Trigger1) && finish[lastSkill] == false) {
			return false;
		}
		if (event.skill.id == S_ArcaneBeam && lastSkill == S_ArcaneBeam && disabSkill[99985] == true) {
			return;
		}
		if (REMOTE_TRIGGER_NO_CANCEL && lastSkill == S_Remote_Trigger && finish[lastSkill] == false && (event.skill.id == S_Scatter || event.skill.id == S_Scatter2 || (event.skill.id == S_Scatter +29) || event.skill.id == S_Arc || event.skill.id == S_Arc2 || (event.skill.id == S_Arc +29) || event.skill.id == S_Reple || event.skill.id == S_Reple2 || (event.skill.id == S_Reple +29) || event.skill.id == S_AB || event.skill.id == S_AB2 || (event.skill.id == S_AB +29) || event.skill.id == S_Rocket || event.skill.id == S_Rocket2 || (event.skill.id == S_Rocket +29) || event.skill.id == S_PointB || event.skill.id == S_PointB2 || (event.skill.id == S_PointB +29) || event.skill.id == S_PointB_2 || event.skill.id == S_PointB2_2 || (event.skill.id == S_PointB_2 +29) || event.skill.id == S_Blast || event.skill.id == S_Blast2 || (event.skill.id == S_Blast +29) || event.skill.id == S_ArcaneBeam)) {
			return false;
		}
		/*if(event.skill.id == S_Reload_EX && lastSkill == S_ModWeapSys && finish[lastSkill] == false){
			return false;
		}*/
		if ((event.skill.id == S_PointB || event.skill.id == S_PointB2 || (event.skill.id == S_PointB +29) || event.skill.id == S_Balder || event.skill.id == S_Balder2 || (event.skill.id == S_Balder +29) || event.skill.id == S_Rocket || event.skill.id == S_Rocket2 || (event.skill.id == S_Rocket +29)) && (lastSkill == S_Blast || lastSkill == S_Blast2 || (lastSkill == S_Blast +29)) && disabSkill[7715]) { return false; }


		if ((event.skill.id == S_PointB_2 || event.skill.id == S_PointB2_2 || (event.skill.id == S_PointB_2 +29)) && lastSkill != S_PointB && lastSkill != S_PointB2 && lastSkill != (S_PointB +29)) {
			event.skill.id = S_PointB;
		}
		yeser = false;
		if ((event.skill.id == S_PointB || event.skill.id == S_PointB2 || (event.skill.id == S_PointB +29)) && (lastSkill == S_PointB || lastSkill == S_PointB2 || (lastSkill == S_PointB +29)) && finish[lastSkill] == false) {
			event.skill.id = S_PointB_2;
			yeser = true;
		}
		
		if(event.skill.id != S_Reload_EX){
			disabSkill[S_Reload_EX] = false;
		}
		
		if((event.skill.id == S_Scatter || event.skill.id == S_Scatter2 || (event.skill.id == S_Scatter +29)) && (lastSkill == S_Scatter || lastSkill == S_Scatter2 || (lastSkill == S_Scatter +29)) && finish[lastSkill] == false){
			return false;
		}
		
		if (event.skill.id != S_PointB && event.skill.id != S_PointB2 && (event.skill.id != S_PointB +29) && event.skill.id != S_PointB_2 && event.skill.id != S_PointB2_2 && (event.skill.id != S_PointB_2 +29)) {
			clearTimeout(l1);
			clearTimeout(l2);
			clearTimeout(l3);
			clearTimeout(l4);
			disabSkill[S_PointB] = false;
			disabSkill[S_PointB2] = false;
			disabSkill[S_PointB_2] = false;
			disabSkill[S_PointB2_2] = false;
			disabSkill[(S_PointB +29)] = false;
			disabSkill[(S_PointB_2 +29)] = false;
		}

		if (event.skill.id == S_Remote_Trigger1) {
			event.skill.id = S_Remote_Trigger;
		}

		//if((event.skill.id == S_Rocket || event.skill.id == S_Rocket2 || (event.skill.id == S_Rocket +29)) && (lastSkill == S_Reple || lastSkill == S_Reple2 || (lastSkill == S_Reple +29)) && finish[lastSkill] == false){return false;}
		if ((event.skill.id == S_Reple || event.skill.id == S_Reple2 || (event.skill.id == S_Reple +29)) && (lastSkill == S_Reple || lastSkill == S_Reple2 || (lastSkill == S_Reple +29)) && finish[lastSkill] == false) { return false; }
		if ((event.skill.id == S_Blast || event.skill.id == S_Blast2 || (event.skill.id == S_Blast +29)) && (lastSkill == S_Blast || lastSkill == S_Blast2 || (lastSkill == S_Blast +29)) && finish[lastSkill] == false) { return false; }
		if ((event.skill.id == S_Blast || event.skill.id == S_Blast2 || (event.skill.id == S_Blast +29) || event.skill.id == S_Scatter || event.skill.id == S_Scatter2 || (event.skill.id == S_Scatter +29) || event.skill.id == S_Rocket || event.skill.id == S_Rocket2 || (event.skill.id == S_Rocket +29)) && APActive) { return false; }
		if ((event.skill.id == S_AB || event.skill.id == S_AB2 || (event.skill.id == S_AB +29)) && (lastSkill == S_AB || lastSkill == S_AB2 || (lastSkill == S_AB +29)) && finish[lastSkill] == false) { return false; }
		//if ((event.skill.id == S_Obliterate || event.skill.id == (S_Obliterate +1) || (event.skill.id == S_Obliterate +29)) && (lastSkill == S_Obliterate || lastSkill == (S_Obliterate +1) || (lastSkill == S_Obliterate +29)) && finish[lastSkill] == false) { return; }
		if (disabSkill[event.skill.id] == 'undefined') disabSkill[event.skill.id] = false;
		if (!disabSkill[event.skill.id]) {

			if ((event.skill.id != S_PointB && event.skill.id != S_PointB2 && (event.skill.id != S_PointB +29) || PB_SLOW) && ABNORMALITY_TOGGLE) {
				dispatch.toClient('S_ABNORMALITY_END', 1, {
					target: cid,
					id: 10152010,
				});
				dispatch.toClient('S_ABNORMALITY_END', 1, {
					target: cid,
					id: 10152011,
				});
				dispatch.toClient('S_ABNORMALITY_END', 1, {
					target: cid,
					id: 10152000,
				});
			}

			msgSuppress =0;

			if (job == JOB_GUNNER && (event.skill.id == S_Blast || event.skill.id == S_Blast2 || (event.skill.id == S_Blast +29))) {
				disabSkill[S_Blast] = true;
				abnormalityx(10152011,3100);
				//abnormalityx(10152010,3100);
				setTimeout(function (event) { disabSkill[S_Blast] = false; }, GLOBAL_LOCK_DELAY, event);
				//setTimeout(function(ranson){if((lastSkill == S_Blast || lastSkill == S_Blast2 || (lastSkill == S_Blast +29)) && !POLLING_RATE_REDUCE){ranson.skill.id = S_Blast; dispatch.toServer('C_START_SKILL', 7, ranson);}},25, event);
				//setTimeout(function(ranson){if(lastSkill == S_Blast || lastSkill == S_Blast2 || (lastSkill == S_Blast +29)){ranson.skill.id = S_Blast; dispatch.toServer('C_START_SKILL', 7, ranson);}},50, event);
				fakeEnd_sorc_dist(event, S_Blast_D,29);
				disabSkill[7715] = true;
				setTimeout(function () { disabSkill[7715] = false; },0);
				//event.skill.id = S_Blast2;
				//yeser = true;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_Scatter || event.skill.id == S_Scatter2 || (event.skill.id == S_Scatter +29))) {
				disabSkill[event.skill.id] = true;
				abnormalityx(10152010,3100);
				var timer = setTimeout(function (event) { disabSkill[event.skill.id] = false; }, GLOBAL_LOCK_DELAY * 2, event);
				disabSkill[(event.skill.id +1)] = true;
				var timer2 = setTimeout(function (event) { disabSkill[(event.skill.id +1)] = false; }, GLOBAL_LOCK_DELAY * 2, event);
				fakeEnd_sorc_dist(event, S_Scatter_D,0);
			}
			if (job == JOB_GUNNER && (event.skill.id == S_PointB || event.skill.id == S_PointB2 || (event.skill.id == S_PointB +29))) {
				event.skill.id = S_PointB;
				disabSkill[event.skill.id] = true;
				l1 = setTimeout(function (event) { disabSkill[event.skill.id] = false; }, GLOBAL_LOCK_DELAY * 2, event);
				disabSkill[(event.skill.id +1)] = true;
				l2 = setTimeout(function (event) { disabSkill[(event.skill.id +1)] = false; }, GLOBAL_LOCK_DELAY * 2, event);
				fakeEnd_sorc_dist(event, S_PointB_D,0);
				if (!PB_SLOW) {
					dispatch.toClient('S_ABNORMALITY_BEGIN', 5, {
						target: cid,
						source: cid,
						id: 10152000,
						duration: 2100,
						unk: 0,
						stacks: 1,
						unk2: 0,
						unk3: 0,
					});
					dispatch.toClient('S_ABNORMALITY_BEGIN', 5, {
						target: cid,
						source: cid,
						id: 10152001,
						duration: 2100,
						unk: 0,
						stacks: 1,
						unk2: 0,
						unk3: 0,
					});
				}
			}
			if (job == JOB_GUNNER && (event.skill.id == S_PointB_2 || event.skill.id == S_PointB2_2 || (event.skill.id == S_PointB_2 +29))) {
				disabSkill[event.skill.id] = true;
				abnormalityx(10152010,3100);
				l3 = setTimeout(function (event) { disabSkill[event.skill.id] = false; }, GLOBAL_LOCK_DELAY * 2, event);
				disabSkill[(event.skill.id +1)] = true;
				l4 = setTimeout(function (event) { disabSkill[(event.skill.id +1)] = false; }, GLOBAL_LOCK_DELAY * 2, event);
				fakeEnd_sorc_dist(event, S_PointB_2_D, -200);
			}
			if (job == JOB_GUNNER && (event.skill.id == S_TimeBomb || event.skill.id == S_TimeBomb2 || (event.skill.id == S_TimeBomb +29))) {
				disabSkill[event.skill.id] = true;
				abnormalityx(10152010,3100);
				setTimeout(function (event) { dispatch.toServer('C_START_SKILL', 7, event); }, 50, event);
				var timer = setTimeout(function (event) { disabSkill[event.skill.id] = false; }, GLOBAL_LOCK_DELAY, event);
				disabSkill[(event.skill.id +1)] = true;
				var timer2 = setTimeout(function (event) { disabSkill[(event.skill.id +1)] = false; }, GLOBAL_LOCK_DELAY, event);
				fakeEnd_sorc_dist(event, S_TimeBomb_D,0);
			}
			if (job == JOB_GUNNER && (event.skill.id == S_Arc || event.skill.id == S_Arc2 || (event.skill.id == S_Arc +29))) {
				disabSkill[S_Arc] = true;
				var timer2 = setTimeout(function (event) { disabSkill[S_Arc] = false; }, GLOBAL_LOCK_DELAY * 5, event);
				disabSkill[S_Arc2] = true;
				var timer = setTimeout(function (event) { disabSkill[S_Arc2] = false; }, GLOBAL_LOCK_DELAY * 5, event);
				disabSkill[(S_Arc +29)] = true;
				var timer3 = setTimeout(function (event) { disabSkill[(S_Arc +29)] = false; }, GLOBAL_LOCK_DELAY * 5, event);
				fakeEnd_sorc_dist(event, S_Arc_D,0);
			}
			if (job == JOB_GUNNER && (event.skill.id == S_Rocket || event.skill.id == S_Rocket2 || (event.skill.id == S_Rocket +29))) {
				disabSkill[event.skill.id] = true;
				var timer2 = setTimeout(function (event) { disabSkill[event.skill.id] = false; }, GLOBAL_LOCK_DELAY, event);
				disabSkill[(event.skill.id +1)] = true;
				var timer = setTimeout(function (event) { disabSkill[(event.skill.id +1)] = false; }, GLOBAL_LOCK_DELAY, event);
				fakeEnd_sorc_dist(event, S_Rocket_D,300);
			}
			if (job == JOB_GUNNER && (event.skill.id == S_Balder || event.skill.id == S_Balder2 || (event.skill.id == S_Balder +29))) {
				disabSkill[event.skill.id] = true;
				var timer2 = setTimeout(function (event) { disabSkill[event.skill.id] = false; }, GLOBAL_LOCK_DELAY, event);
				disabSkill[(event.skill.id +1)] = true;
				var timer = setTimeout(function (event) { disabSkill[(event.skill.id +1)] = false; }, GLOBAL_LOCK_DELAY, event);
				fakeEnd_sorc_dist(event, S_Balder_D, -270);
			}
			if (job == JOB_GUNNER && (event.skill.id == S_Reple || event.skill.id == S_Reple2 || (event.skill.id == S_Reple +29))) {
				setTimeout(function (event) { if (lastSkill == S_Reple || lastSkill == S_Reple2 || lastSkill == (S_Reple +29)) { dispatch.toServer('C_START_SKILL', 7, event); } }, 25, event);
				setTimeout(function (event) { if (lastSkill == S_Reple || lastSkill == S_Reple2 || lastSkill == (S_Reple +29)) { dispatch.toServer('C_START_SKILL', 7, event); } }, 50, event);
				setTimeout(function (event) { if (lastSkill == S_Reple || lastSkill == S_Reple2 || lastSkill == (S_Reple +29)) { dispatch.toServer('C_START_SKILL', 7, event); } }, 75, event);
				setTimeout(function (event) { if (lastSkill == S_Reple || lastSkill == S_Reple2 || lastSkill == (S_Reple +29)) { dispatch.toServer('C_START_SKILL', 7, event); } }, 100, event);
				disabSkill[event.skill.id] = true;
				abnormalityx(10152010,3100);
				var timer2 = setTimeout(function (event) { disabSkill[event.skill.id] = false; }, GLOBAL_LOCK_DELAY, event);
				disabSkill[(event.skill.id +1)] = true;
				var timer = setTimeout(function (event) { disabSkill[(event.skill.id +1)] = false; }, GLOBAL_LOCK_DELAY, event);
				fakeEnd_sorc_dist(event, S_Reple_D,0);
			}
			if (job == JOB_GUNNER && event.skill.id == S_Bomb_Channel) {
				//setTimeout(function (event) { if (lastSkill == S_Bomb_Channel) { dispatch.toServer('C_START_SKILL', 7, event); } }, 25, event);
				//setTimeout(function (event) { if (lastSkill == S_Bomb_Channel) { dispatch.toServer('C_START_SKILL', 7, event); } }, 50, event);
				setTimeout(function (event) { if (lastSkill == S_Bomb_Channel) { dispatch.toServer('C_START_SKILL', 7, event); } }, 75, event);
				//setTimeout(function (event) { if (lastSkill == S_Bomb_Channel) { dispatch.toServer('C_START_SKILL', 7, event); } }, 100, event);
				setTimeout(function (event) { if (lastSkill == S_Bomb_Channel) { dispatch.toServer('C_START_SKILL', 7, event); } }, 150, event);
				//setTimeout(function (event) { if (lastSkill == S_Bomb_Channel) { dispatch.toServer('C_START_SKILL', 7, event); } }, 200, event);
				//setTimeout(function (event) { if (lastSkill == S_Bomb_Channel) { dispatch.toServer('C_START_SKILL', 7, event); } }, 300, event);
				bombchannel = event;

				atkid[event.skill.id] = atkid_base;
				atkid_base--;
				dispatch.toClient('S_ACTION_STAGE', 9, {
					gameId: cid,
					loc: {
						x: event.loc.x,
						y: event.loc.y,
						z: event.loc.z
					},
					w: event.w,
					templateId: model,
					skill: event.skill.id,
					stage: 0,
					speed: 1,
					projectileSpeed: 1,
					id: atkid[event.skill.id],
					effectScale: 1.0,
					moving: false,
					dest: { x: 0, y: 0, Z: 0 },
					target: 0n,
					animSeq: [],
				});
			}
			if (job == JOB_GUNNER && (event.skill.id == S_HB || event.skill.id == S_HB2 || (event.skill.id == S_HB +29))) {
				setTimeout(function (event) { if (lastSkill == S_HB || lastSkill == S_HB2 || lastSkill == (S_HB +29)) { dispatch.toServer('C_START_SKILL', 7, event); } }, 25, event);
				setTimeout(function (event) { if (lastSkill == S_HB || lastSkill == S_HB2 || lastSkill == (S_HB +29)) { dispatch.toServer('C_START_SKILL', 7, event); } }, 50, event);
				setTimeout(function (event) { if (lastSkill == S_HB || lastSkill == S_HB2 || lastSkill == (S_HB +29)) { dispatch.toServer('C_START_SKILL', 7, event); } }, 100, event);
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function (event) { disabSkill[event.skill.id] = false; }, GLOBAL_LOCK_DELAY, event);
				disabSkill[(event.skill.id +1)] = true;
				var timer2 = setTimeout(function (event) { disabSkill[(event.skill.id +1)] = false; }, GLOBAL_LOCK_DELAY, event);
				fakeEnd_sorc_dist(event, S_HB_D,0);
			}
			if (job == JOB_GUNNER && (event.skill.id == S_ST || event.skill.id == S_ST2 || (event.skill.id == S_ST +29))) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function (event) { disabSkill[event.skill.id] = false; }, GLOBAL_LOCK_DELAY, event);
				disabSkill[(event.skill.id +1)] = true;
				var timer2 = setTimeout(function (event) { disabSkill[(event.skill.id +1)] = false; }, GLOBAL_LOCK_DELAY, event);
				fakeEnd_sorc_dist(event, S_ST_D,0);
			}
			if (job == JOB_GUNNER && (event.skill.id == S_Mana2 || event.skill.id == S_Mana22)) {
				disabSkill[event.skill.id] = true;
				abnormalityx(10152010,3100);
				var timer = setTimeout(function (event) { disabSkill[event.skill.id] = false; }, GLOBAL_LOCK_DELAY, event);
				disabSkill[(event.skill.id +1)] = true;
				var timer2 = setTimeout(function (event) { disabSkill[(event.skill.id +1)] = false; }, GLOBAL_LOCK_DELAY, event);
				fakeEnd_sorc_dist(event, S_Mana_D2,0);
			}
			if (job == JOB_GUNNER && (event.skill.id == S_Retal)) {
				disabSkill[event.skill.id] = true;
				var timer = setTimeout(function (event) { disabSkill[event.skill.id] = false; }, GLOBAL_LOCK_DELAY, event);
				disabSkill[(event.skill.id +1)] = true;
				var timer2 = setTimeout(function (event) { disabSkill[(event.skill.id +1)] = false; }, GLOBAL_LOCK_DELAY, event);
				fakeEnd_sorc_dist(event, S_Retal_D,0);
			}
			if (job == JOB_GUNNER && (event.skill.id == S_Reload)) {
				setTimeout(function (event) { if (lastSkill == S_Reload) { dispatch.toServer('C_START_SKILL', 7, event); } }, 25, event);
				setTimeout(function (event) { if (lastSkill == S_Reload) { dispatch.toServer('C_START_SKILL', 7, event); } }, 50, event);
				//setTimeout(function (event) { if (lastSkill == S_Reload) { dispatch.toServer('C_START_SKILL', 7, event); } }, 75, event);
				//setTimeout(function (event) { if (lastSkill == S_Reload) { dispatch.toServer('C_START_SKILL', 7, event); } }, 100, event);
				APActive =0;
				disabSkill[event.skill.id] = true;
				abnormalityx(10152010,3100);
				var timer = setTimeout(function (event) { disabSkill[event.skill.id] = false; }, GLOBAL_LOCK_DELAY, event);
				disabSkill[(event.skill.id +1)] = true;
				var timer2 = setTimeout(function (event) { disabSkill[(event.skill.id +1)] = false; }, GLOBAL_LOCK_DELAY, event);
				fakeEnd_sorc_dist(event, S_Reload_D,100);
			}
			if (job == JOB_GUNNER && (event.skill.id == S_AB || event.skill.id == S_AB2 || (event.skill.id == S_AB +29))) {
				lockC = false;
				abnormalityx(10152010,3100); //prev ok
				//abnormalityx(10152040,3100);
				disabSkill[S_AB] = true;
				var timer = setTimeout(function (event) { disabSkill[S_AB] = false; }, GLOBAL_LOCK_DELAY, event);
				disabSkill[S_AB2] = true;
				var timer2 = setTimeout(function (event) { disabSkill[S_AB2] = false; }, GLOBAL_LOCK_DELAY, event);
				fakeEnd_sorc_dist(event, S_AB_D,0);
				if (AB_PROJ_SPOOF) {
					atkid_base_AB--;
					realprojID =0;
					dispatch.toClient('S_START_USER_PROJECTILE', 9, {
						gameId: cid,
						templateId: model,
						unk1: 0,
						id: atkid_base_AB,
						skill: 71120,
						loc: { x: event.loc.x, y: event.loc.y, z: (event.loc.z +25), },
						dest: { x: event.dest.x, y: event.dest.y, z: event.dest.z, },
						speed: 300,
						distance: 550,
						curve: false,
						projectileSpeed: 1,
					});
				}
			}

			if (job == JOB_GUNNER && (event.skill.id == S_ModWeapSys || event.skill.id == (S_ModWeapSys +1))) {
				disabSkill[event.skill.id] = true;
				abnormalityx(10152010,3100);
				var timer = setTimeout(function (event) { disabSkill[event.skill.id] = false; }, GLOBAL_LOCK_DELAY, event);
				fakeEnd_sorc_dist(event, S_ModWeapSys_D,0);
				modularweaponsystem = true;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_Remote_Trigger || event.skill.id == S_Remote_Trigger1)) {
				disabSkill[event.skill.id] = true;
				abnormalityx(10152010,3100);
				var timer = setTimeout(function (event) { disabSkill[event.skill.id] = false; }, 0, event);
				fakeEnd_sorc_dist(event, S_Remote_Trigger_D,0);
				sendYes = true;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_Obliterate || event.skill.id == (S_Obliterate +1) || event.skill.id == (S_Obliterate +29))) {
				//setTimeout(function(event){if(job == JOB_GUNNER){dispatch.toServer('C_START_SKILL', 7, event);}},25, event);
				//setTimeout(function(event){if(job == JOB_GUNNER){dispatch.toServer('C_START_SKILL', 7, event);}},50, event);
				disabSkill[event.skill.id] = true;
				setTimeout(function (event) { disabSkill[event.skill.id] = false; }, GLOBAL_LOCK_DELAY, event);
				//disabSkill[S_Obliterate] = true;
				//setTimeout(function (event) { disabSkill[S_Obliterate] = false; }, GLOBAL_LOCK_DELAY, event);
				//disabSkill[(S_Obliterate +1)] = true;
				//setTimeout(function (event) { disabSkill[(S_Obliterate +1)] = false; }, GLOBAL_LOCK_DELAY, event);
				//disabSkill[(S_Obliterate +29)] = true;
				//setTimeout(function (event) { disabSkill[(S_Obliterate +29)] = false; }, GLOBAL_LOCK_DELAY, event);
				abnormalityx(10152010,3100);
				fakeEnd_sorc_dist(event, S_Obliterate_D,0);
			}
			if (job == JOB_GUNNER && (event.skill.id == S_ArcaneBeam)) {
				setTimeout(function (event) { if (lastSkill == S_ArcaneBeam && !POLLING_RATE_REDUCE) { dispatch.toServer('C_START_SKILL', 7, event); } }, 25, event);
				setTimeout(function (event) { if (lastSkill == S_ArcaneBeam) { dispatch.toServer('C_START_SKILL', 7, event); } }, 50, event);
				abnormalityx(10152011,3100);
				//abnormalityx(10152010,3100);
				clearTimeout(blaster);
				disabSkill[99985] = true;
				blaster = setTimeout(function (event) { disabSkill[99985] = false; }, S_ArcaneBeam_D / aspd / 2, event);
				fakeEnd_sorc_dist(event, S_ArcaneBeam_D,0);
			}
			if (job == JOB_GUNNER && (event.skill.id == S_Reload_EX)) {
				setTimeout(function (event) { if (lastSkill == S_Reload_EX) { dispatch.toServer('C_START_SKILL', 7, event); } }, 25, event);
				setTimeout(function (event) { if (lastSkill == S_Reload_EX) { dispatch.toServer('C_START_SKILL', 7, event); } }, 50, event);
				//setTimeout(function (event) { if (lastSkill == S_Reload_EX) { dispatch.toServer('C_START_SKILL', 7, event); } }, 75, event);
				//setTimeout(function (event) { if (lastSkill == S_Reload_EX) { dispatch.toServer('C_START_SKILL', 7, event); } }, 100, event);
				APActive =0;
				disabSkill[event.skill.id] = true;
				abnormalityx(10152010,3100);
				var timer = setTimeout(function (event) { disabSkill[event.skill.id] = false; }, GLOBAL_LOCK_DELAY / 2, event);
				clearTimeout(bomb1);
				clearTimeout(bomb2);
				disabSkill[S_MM_Instant] = false;
				disabSkill[S_MM_Instant_2] = false;
				fakeEnd_sorc_dist(event, S_Reload_D,100);
			}
			if (job == JOB_GUNNER && (event.skill.id == S_BalderEx)) {
				disabSkill[event.skill.id] = true;
				abnormalityx(10152010,3100);
				var timer = setTimeout(function (event) { disabSkill[event.skill.id] = false; }, GLOBAL_LOCK_DELAY, event);
				fakeEnd_sorc_dist(event, S_BalderEx_D,0);
			}
			if (job == JOB_GUNNER && (event.skill.id == S_MM_Instant)) {
				setTimeout(function (event) { if (lastSkill == S_MM_Instant) { dispatch.toServer('C_START_SKILL', 7, event); } }, 25, event);
				setTimeout(function (event) { if (lastSkill == S_MM_Instant) { dispatch.toServer('C_START_SKILL', 7, event); } }, 50, event);
				setTimeout(function (event) { if (lastSkill == S_MM_Instant) { dispatch.toServer('C_START_SKILL', 7, event); } }, 75, event);
				setTimeout(function (event) { if (lastSkill == S_MM_Instant) { dispatch.toServer('C_START_SKILL', 7, event); } }, 100, event);
				setTimeout(function (event) { if (lastSkill == S_MM_Instant) { dispatch.toServer('C_START_SKILL', 7, event); } }, 150, event);
				setTimeout(function (event) { if (lastSkill == S_MM_Instant) { dispatch.toServer('C_START_SKILL', 7, event); } }, 200, event);
				disabSkill[S_MM_Instant] = true;
				disabSkill[S_MM_Instant_2] = true;
				if(UNLOCK_RRMM){
				abnormalityx(10152010,3100);
				}
				clearTimeout(bomb1);
				clearTimeout(bomb2);
				bomb1 = setTimeout(function (event) { disabSkill[S_MM_Instant] = false; }, GLOBAL_LOCK_DELAY * 3, event);
				bomb2 = setTimeout(function (event) { disabSkill[S_MM_Instant_2] = false; }, GLOBAL_LOCK_DELAY * 3, event);
				fakeEnd_sorc_dist(event, S_Mana_D2,0);
			}
			
			if (job == JOB_GUNNER && (event.skill.id == S_MM_Instant_2)) {
				setTimeout(function (event) { if (lastSkill == S_MM_Instant_2) { dispatch.toServer('C_START_SKILL', 7, event); } }, 25, event);
				setTimeout(function (event) { if (lastSkill == S_MM_Instant_2) { dispatch.toServer('C_START_SKILL', 7, event); } }, 50, event);
				setTimeout(function (event) { if (lastSkill == S_MM_Instant_2) { dispatch.toServer('C_START_SKILL', 7, event); } }, 75, event);
				setTimeout(function (event) { if (lastSkill == S_MM_Instant_2) { dispatch.toServer('C_START_SKILL', 7, event); } }, 100, event);
				setTimeout(function (event) { if (lastSkill == S_MM_Instant_2) { dispatch.toServer('C_START_SKILL', 7, event); } }, 150, event);
				setTimeout(function (event) { if (lastSkill == S_MM_Instant_2) { dispatch.toServer('C_START_SKILL', 7, event); } }, 200, event);
				disabSkill[S_MM_Instant] = true;
				disabSkill[S_MM_Instant_2] = true;
				if(UNLOCK_RRMM){
				abnormalityx(10152010,3100);
				}
				clearTimeout(bomb1);
				clearTimeout(bomb2);
				bomb1 = setTimeout(function (event) { disabSkill[S_MM_Instant] = false; }, GLOBAL_LOCK_DELAY * 3, event);
				bomb2 = setTimeout(function (event) { disabSkill[S_MM_Instant_2] = false; }, GLOBAL_LOCK_DELAY * 3, event);
				fakeEnd_sorc_dist(event, S_Mana_D2,0);
			}

			lastLastSkill = lastSkill;
			lastSkill = event.skill.id;
			lastEvent = event;
			if (autoCancelState && lastSkill != S_Remote_Trigger && lastSkill != S_Remote_Trigger2 && lastSkill != S_ArcaneBeam && lastSkill != S_Bomb_Cast && lastSkill != S_Bomb_Channel && lastSkill != S_AB && lastSkill != S_AB2 && lastSkill != (S_AB +29) && lastSkill != S_Rocket && lastSkill != S_Rocket2 && lastSkill != (S_Rocket +29) && lastSkill != S_Blast && lastSkill != S_Blast2 && lastSkill != (S_Blast +29) && lastSkill != S_Reload && lastSkill != S_Retal && lastSkill != S_Bomb_Channel && lastSkill != S_PointB && lastSkill != S_PointB2 && lastSkill != (S_PointB +29) && lastSkill != S_PointB_2 && lastSkill != S_PointB2_2 && lastSkill != (S_PointB_2 +29)) {
				failsafe =0;
				repeater(BLAST_KEY, lastSkill);
			}
			if (AUTO_REMOTE_TRIGGER_2 && lastSkill == S_Remote_Trigger && sendYes) {
				failsafe =0;
				repeaterspec(REMOTE_TRIGGER_KEY, lastSkill);
			}
			if (TBCancelState && (lastSkill == S_TimeBomb || lastSkill == S_TimeBomb2 || (lastSkill == S_TimeBomb +29))) {
				failsafe =0;
				repeater(BLAST_KEY, lastSkill);
			}
		}
		if (yeser) {
			return true;
		}
	});

	dispatch.hook('C_START_SKILL', 7, { order: 999 }, (event) => {
		if (!enabled) return;
		var xzzy = event.skill.type === 1 && event.skill.id <= 999999 && BLACKLIST.indexOf(event.skill.id) === -1;
		if (!xzzy) return;
		event.moving = false;
		dispatch.toServer('C_START_SKILL', 7, event);
		if (event.skill.id == S_Scatter || event.skill.id == S_Scatter2 || (event.skill.id == S_Scatter +29) || event.skill.id == S_Arc || event.skill.id == S_Arc2 || (event.skill.id == S_Arc +29)) {
			setTimeout(function (event) { dispatch.toServer('C_START_SKILL', 7, event); }, 25, event);
			setTimeout(function (event) { dispatch.toServer('C_START_SKILL', 7, event); }, 50, event);
			if (!POLLING_RATE_REDUCE) {
				setTimeout(function (event) { dispatch.toServer('C_START_SKILL', 7, event); }, 75, event);
				setTimeout(function (event) { dispatch.toServer('C_START_SKILL', 7, event); }, 100, event);
			}
		}
		if (event.skill.id == S_PointB || event.skill.id == S_PointB2 || (event.skill.id == S_PointB +29) || event.skill.id == S_Balder || event.skill.id == S_Balder2 || (event.skill.id == S_Balder +29) || event.skill.id == S_Rocket || event.skill.id == S_Rocket2 || (event.skill.id == S_Rocket +29)) {
			setTimeout(function (event) { dispatch.toServer('C_START_SKILL', 7, event); }, 25, event);
			setTimeout(function (event) { dispatch.toServer('C_START_SKILL', 7, event); }, 50, event);
			setTimeout(function (event) { dispatch.toServer('C_START_SKILL', 7, event); }, 75, event);
			setTimeout(function (event) { dispatch.toServer('C_START_SKILL', 7, event); }, 100, event);
		}
		return false;
	});

	dispatch.hook('S_ACTION_STAGE', 9, (event) => {
	  //console.log("test: " + event.skill == 67115885);
		if (!enabled) return;
		if(event.target === cid && event.templateId ==30302007){
			trueloc = event.loc;
		}
		if(event.gameId === cid) {
			if(event.skill.id ==1101008){
				event.dest = trueloc;
				return true;
			}
			var d = new Date();
			lastSkillTime[1] = d.getTime();
			lastSkillTime[3] = event.skill.id;
			chargeSkillFix2 = event.skill.id;
			var xzzy = event.skill.type ===1;
			if (!xzzy) {
				lastSkill =1;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_Blast || event.skill.id == S_Blast2 || (event.skill.id == S_Blast +29))) {
				return false;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_Scatter || event.skill.id == S_Scatter2 || (event.skill.id == S_Scatter +29))) {
				return false;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_PointB || event.skill.id == S_PointB2 || (event.skill.id == S_PointB +29))) {
				return false;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_PointB_2 || event.skill.id == S_PointB2_2 || (event.skill.id == S_PointB_2 +29))) {
				return false;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_TimeBomb || event.skill.id == S_TimeBomb2 || (event.skill.id == S_TimeBomb +29))) {
				return false;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_Arc || event.skill.id == S_Arc2 || (event.skill.id == S_Arc +29))) {
				return false;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_Arc || event.skill.id == S_Arc2 || (event.skill.id == S_Arc +29))) {
				return false;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_Rocket || event.skill.id == S_Rocket2 || (event.skill.id == S_Rocket +29) || (event.skill.id == S_Rocket +30))) {
				return false;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_Balder || event.skill.id == S_Balder2 || (event.skill.id == S_Balder +29))) {
				return false;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_Reple || event.skill.id == S_Reple2 || (event.skill.id == S_Reple +29))) {
				return false;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_HB || event.skill.id == S_HB2 || (event.skill.id == S_HB +29))) {
				return false;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_ST || event.skill.id == S_ST2 || (event.skill.id == S_ST +29))) {
				return false;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_Retal)) {
				if (Ignore1) {
					fakeEnd_sorc_dist(event, S_Retal_D,0);
					lastSkill = S_Retal;
				}
				return false;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_Reload || event.skill.id == (S_Reload +30))) {
				return false;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_Bomb_Channel || event.skill.id == S_Bomb_Cast)) {
				return false;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_AB || event.skill.id == S_AB2 || (event.skill.id == S_AB +29))) {
				return false;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_AB_2 || event.skill.id == S_AB2_2)) {
				return false;
			}
			if (job == JOB_GUNNER && event.skill.id == S_Mana && DISABLE_CHARGE) {
				return;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_Mana || event.skill.id == S_Mana2 || event.skill.id == S_Mana22)) {
				return false;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_BurstFire || event.skill.id == S_BurstPrime)) {
				return false;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_ModWeapSys || event.skill.id == (S_ModWeapSys +1))) {
				return false;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_Remote_Trigger || event.skill.id == S_Remote_Trigger1 || event.skill.id == S_Remote_Trigger2 || event.skill.id == S_Remote_Trigger22)) {
				return false;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_Obliterate || event.skill.id == (S_Obliterate +1) || event.skill.id == (S_Obliterate +29))) {
				return false;
			}
			if (job == JOB_GUNNER && event.skill.id == S_ArcaneBeam) {
				return false;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_Reload_EX || event.skill.id == (S_Reload_EX +30))) {
				return false;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_BalderEx || event.skill.id == S_BalderEx_2)) {
				return false;
			}
			if (job == JOB_GUNNER && event.skill.id == S_BurstFire_EX) {
				return false;
			}
			if (job == JOB_GUNNER && event.skill.id == S_BurstFire_EX_Wind) {
				return false;
			}
			if (job == JOB_GUNNER && event.skill.id == S_MM_Instant) {
				return false;
			}
			if (job == JOB_GUNNER && event.skill.id == S_MM_Instant_2) {
				return false;
			}
		}
	});

	dispatch.hook('S_ACTION_END', 5, (event) => {
	  if(event.skill == 67108451) console.log("error");
		if (!enabled) return;
		if(event.gameId === cid) {
			if(event.skill.id ==1101008){
				event.loc = trueloc;
				return true;
			}
			var d = new Date();
			lastSkillTime[2] = d.getTime();
			if (job == JOB_GUNNER && (event.skill.id == S_Blast || event.skill.id == S_Blast2 || (event.skill.id == S_Blast +29))) {
				//disabSkill[event.skill.id] = false;
				return false;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_Scatter || event.skill.id == S_Scatter2 || (event.skill.id == S_Scatter +29))) {
				return false;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_PointB || event.skill.id == S_PointB2 || (event.skill.id == S_PointB +29))) {
				return false;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_PointB_2 || event.skill.id == S_PointB2_2 || (event.skill.id == S_PointB_2 +29))) {
				return false;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_TimeBomb || event.skill.id == S_TimeBomb2 || (event.skill.id == S_TimeBomb +29))) {
				return false;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_Arc || event.skill.id == S_Arc2 || (event.skill.id == S_Arc +29))) {
				return false;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_Arc || event.skill.id == S_Arc2 || (event.skill.id == S_Arc +29))) {
				return false;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_Rocket || event.skill.id == S_Rocket2 || (event.skill.id == S_Rocket +29) || (event.skill.id == S_Rocket +30))) {
				if (((event.loc.z - zloc) >50) || ((zloc - event.loc.z) >50)) {
					dispatch.toClient('S_INSTANT_MOVE', 3, {
						gameId: cid,
						loc: {
							x: event.loc.x,
							y: event.loc.y,
							z: event.loc.z
						},
						w: event.w,
					});
				}
				return false;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_Balder || event.skill.id == S_Balder2 || (event.skill.id == S_Balder +29))) {
				return false;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_Reple || event.skill.id == S_Reple2 || (event.skill.id == S_Reple +29))) {
				return false;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_HB || event.skill.id == S_HB2 || (event.skill.id == S_HB +29))) {
				return false;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_ST || event.skill.id == S_ST2 || (event.skill.id == S_ST +29))) {
				return false;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_Retal)) {
				return false;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_Reload || event.skill.id == (S_Reload +30))) {
				return false;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_Bomb_Channel || event.skill.id == S_Bomb_Cast)) {
				return false;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_AB || event.skill.id == S_AB2 || (event.skill.id == S_AB +29))) {
				return false;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_AB_2 || event.skill.id == S_AB2_2)) {
				return false;
			}
			if (job == JOB_GUNNER && event.skill.id == S_Mana && DISABLE_CHARGE) {
				return;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_Mana || event.skill.id == S_Mana2 || event.skill.id == S_Mana22)) {
				return false;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_BurstFire || event.skill.id == S_BurstPrime)) {
				return false;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_ModWeapSys || event.skill.id == (S_ModWeapSys +1))) {
				return false;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_Remote_Trigger || event.skill.id == S_Remote_Trigger1 || event.skill.id == S_Remote_Trigger2 || event.skill.id == S_Remote_Trigger22)) {
				return false;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_Obliterate || event.skill.id == (S_Obliterate +1) || event.skill.id == (S_Obliterate +29))) {
				return false;
			}
			if (job == JOB_GUNNER && event.skill.id == S_ArcaneBeam) {
				return false;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_Reload_EX || event.skill.id == (S_Reload_EX +30))) {
				return false;
			}
			if (job == JOB_GUNNER && (event.skill.id == S_BalderEx || event.skill.id == S_BalderEx_2)) {
				return false;
			}
			if (job == JOB_GUNNER && event.skill.id == S_BurstFire_EX) {
				return false;
			}
			if (job == JOB_GUNNER && event.skill.id == S_BurstFire_EX_Wind) {
				return false;
			}
			if (job == JOB_GUNNER && event.skill.id == S_MM_Instant) {
				return false;
			}
			if (job == JOB_GUNNER && event.skill.id == S_MM_Instant_2) {
				return false;
			}
		}
	});

	dispatch.hook('S_START_COOLTIME_SKILL', 3, (event) => {
		if (!enabled) return;
		event.cooldown -= GLOBAL_LATENCY;
		return true;
	});

	dispatch.hook('C_CANCEL_SKILL', 3, (event) => {
		if (!enabled) return;
		if (job == JOB_GUNNER && (event.skill.id == S_Bomb_Cast || event.skill.id == S_Bomb_Channel) && event.type ==1) {
			dispatch.toClient('S_ACTION_END', 5, {
				gameId: cid,
				loc: {
					x: xloc,
					y: yloc,
					z: zloc
				},
				w: wloc,
				templateId: model,
				skill: S_Bomb_Channel,
				type: 1,
				id: atkid[S_Bomb_Channel],
			});
		}
	});
    
	dispatch.hook('S_PLAYER_STAT_UPDATE', 16, (event) => {
		if (!enabled) return;
		aspd = (event.attackSpeed + event.attackSpeedBonus) /100;
	});

	dispatch.hook('C_PLAYER_LOCATION', 5, (event) => {
		if (!enabled) return;
		xloc = event.dest.x;
		yloc = event.dest.y;
		zloc = event.dest.z;
		wloc = event.w;
		timeloc = event.time +1;
	});
	dispatch.hook('S_ACTION_STAGE', 9, (event) => {
	  //console.log("test: " + event.skill == 67115885);
		if (!enabled) return;
		if (event.gameId !== cid) {
			return;
		}
		if (event.skill.id ==1080101) {
			disabSkill[S_Retal] = true;
			Ignore1 = true;
		}
	});
	dispatch.hook('S_ACTION_END', 5, (event) => {
	  if(event.skill == 67108451) console.log("error");
		if (!enabled) return;
		if (event.gameId !== cid) {
			return;
		}
		if (event.skill.id ==1080101) {
			disabSkill[S_Retal] = false;
			clearTimeout(Ignore2);
			Ignore2 = setTimeout(function () { Ignore1 = false; },400);
		}
	});
};