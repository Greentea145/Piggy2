/*      
 *  �\��G�U�� NPC
 *  �s�@�GWinter�V�u
 *  �ɶ��G2018�~06��15��
 */

var status;
var x0 = "#fEffect/CharacterEff/1112949/0/0#";//�����аO��
var x1 = "#fEffect/CharacterEff/1112949/1/0#";//�����аO��
var x2 = "#fEffect/CharacterEff/1112949/2/0#";//�����аO��
var x3 = "#fEffect/CharacterEff/1112949/3/0#";//�����аO��
var x4 = "#fEffect/CharacterEff/1112949/4/0#";//�����аO��
var up = "#fUI/Login/CharSelect/icon/up#";
var new_ = "#fUI/Login/CharSelect/icon/new#";
var down = "#fUI/Login/CharSelect/icon/down#";
var same = "#fUI/Login/CharSelect/icon/same#";
var N = "#fUI/Login/WorldNotice/2/0#";

var Message = Array(
        Array("#fUI/Logo/1#", Array(//�޲z��
			Array("��K�ǰe", 9000003, "��K�ǰe"),
			Array("��K��¾", 9900003, "��K��¾"),
			Array("���ժA���", 9900007, "���ժA���")
			)),
        Array("#fUI/Logo/2#", Array(//�Τ�
			Array("�b��", 9900007, "�b��"),//�ݭ״_
			Array("�ǰe", 9900007, "�ǰe"),
			Array("�d��", 9900007, "home", "Pet"),
			Array("�^��", 9900007, "�^��"),
			//Array("���i", 9900007, "news"),
			//Array("���Z", 9900007, "���Z")
			Array("�v��", 1012117, "�v��"),
			//Array("�v��1", 1012117, "�v��1"),
			Array("�y��", 1012117, "�y��")
			)),
        Array("#fUI/Logo/3#", Array(//���y
			//Array("���v", 1012117, "���v"),
			Array("�ɯ�", 9900007, "�ɯ�"),
			Array("�b�u", 9900007, "�b�u"),
			Array("�I��", 9900007, "�I��"),
			Array("���v", 9900007, "�[�X���y"),
			Array("�Ǹ�", 9900007, "�Ǹ�")
			//Array("��������", 9900007, "��������"),
			//Array("Facebook", 9900007, "FB����"),
			//Array("�ʴ�", 9900007, "�ʴ����")
			)),
        Array("#fUI/Logo/4#", Array(//�\��
			Array("���", 9900007, "���"),
			Array("�Ʀ�", 9900007, "�Ʀ�"),
			Array("���]", 9900007, "���]"),
			Array("����", 9900007, "����"),//�ݭ״_
			Array("�ޯ�", 9900007, "�ޯ�"),
			Array("�z�v", 9900007, "�z�v"),
			Array("��ï", 9900007, "��ï�\��")
			//Array("���~�I��", 9900003, "�I��"),
			//Array("�L���t��", 9900003, "�L��"),
			//Array("�������", 9900007, "���"),
			//Array("�H���z�v", 9105006, null),
			//Array("��ĳ�^��", 9900007, "�^��")
			))
    );
	
function start() {
    status = -1;
    action(1, 0, 0);
}

var skill = [	
4101004,
1,//�I��r��
4,//�p�d��誫
2,//�v¡�ɦ�
1301007,
3,//�v¡���]
5,//�j�d��誫
3121002,
3121000,
2311003,
6//���Ϧ誫
];

var pet = [5000595,5000685,5000696,5000707,5000708,5000709,5000721,5000722,5000723,5000727,5000736,5000737,5000738,5000740,5000749,5000751,5000752,5000753,5000754,5000762,5000763,5000764,5000765,5000766,5000767,5000768,5000769,5000772,5000773,5000774,5000786,5000790,5000791,5000792,5000793,5000794,5000795,5000796,5000797,5000798,5000806,5000807,5000808,5000906,5000907,5000908,5000918,
5000919,5000920,5000921,5000922,5000923,5000924,5000925,5000945,5000953];
pet = [5000906,5000907,5000908];

var itemss = [1054002,1006002,1104002,1083002,1074002];
itemss = [1054003,1006003,1104003,1083003,1074003];



function action(mode, type, selection) {
var change = 1;

if (change == 1) {
	cm.dispose();
	cm.warp(9100000000, 0);
	//cm.openNpc(9900007, "�}�A�[�X�ɯ�", "Player/List2");
	return;
} else if (change == 2) {
	cm.dispose();
	cm.openShop(95);
	return;
} else if (change == 3) {
	for (var t in pet) {
		cm.gainPetItem(pet[t], 1, 1);
		//cm.playerMessage(1, "�ʶR���\: " + pet[t]);
	}
} else if (change == 4) {
	for (var t in pet) {
		cm.DELPetItem(pet[t]);
	}
} else if (change == 5) {
	cm.teachSkill(1004,1);
} else if (change == 6) {
	for (var t in itemss)
		cm.gainItem(itemss[t],1);
}
    if (mode == 0) {
		cm.dispose();
		return;
	} else if (cm.getPlayer().getLevel() < 10){
		cm.sendOk("�p�ثe�����ŵL�k�ϥ�");
		cm.dispose();
		return;
    } else if (mode == 1){
		status++;
    } else {
		status--;
    }
    switch (status) {
        case 0:
			var UI = "#fUI/Logo/0#", AUI = "#fUI/Logo/1#";
			var admin = (cm.getChar().isGM()? "#r#L999#" + AUI: "\t\t�@ " + UI);
			var text = "#e#b"+admin+"#n#k\r\n";
			var L = Message;
			for (var i in L) {
				//���L���O�\��
				if (i == 0)
					continue;
				text += L[i][0];
				text += cor(i);
				for (var j in L[i][1]) {
					var �ϥ� = L[i][1][j][0];
					if (j%6 == 0)
						text += "\r\n";
					text += "#L" + i+j + "#[" + �ϥ� + "]#l";
				}
				if (i!=3)
					text += "\r\n\r\n\r\n";
            }
			cm.sendOk(text);
            break;
        case 1:
            var i = Math.floor(selection/10);
			var j = Math.floor(selection%10);
			cm.dispose();
			if (selection == 999) {
				cm.openNpc(9900007, "home", "Admin");
				return;
			}
			var NPC = Message[i][1][j][1];
			var �}�� = Message[i][1][j][2];
			var ���| = Message[i][1][j][3];
			if (NPC == null)
				Packages.client.messages.CommandProcessor.processCommand(cm.getClient(), �}��, Packages.constants.ServerConstants.CommandType.NORMAL);
			else if (�}�� == null)
				cm.openNpc(NPC);
			else if (���| != null)
				cm.openNpc(NPC, �}��, ���|);
			/*else if (�}�� == "news")
				cm.openNpc(NPC, "news_eve");*/
			else 
				cm.openNpc(NPC, �}��, "Player/List"+i);
            break;
        case 2:
        case 3:
            cm.dispose();
            break;
    }
}

function cor(i) {
	var c = i%10;
    switch (c) {
        case 0:
			return "#d";
        case 1:
            return "#r";
        case 2:
			return "#b";
        case 3:
			return "#k";
		default:
            return "";
    }

}

var format = function FormatString(c, length, content) {
    var str = "";
    var cs = "";
    if (content.length > length) {
        str = content;
    } else {
        for (var j = 0; j < length - content.getBytes("big5").length; j++) {
            cs = cs + c;
        }
    }
    str = content + cs;
    return str;
}
