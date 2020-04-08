const fs = require("fs");
const createCard = require("../controllers/rank_card");
var osu = require("node-osu");
var checkthreadid = [];
var sleeptime = [];
var wakelist = [];
var d = new Date();
var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
var nd = new Date(utc + (3600000 * 7));
var h = nd.getHours();

var javcode = Array('MIAD-530', 'MIDD-944', 'LADY-077', 'SW-186', 'STAR444', 'T28-184', 'dvdes-635', 'BOD-277', 'BOD-277', 'ARMG-014', 'JUC-579', 'BBI-142', 'MILD-716', 'FSLV-002', 'CRS-S014',
  'ODFW-006', 'SOE-837', 'SOE-837', 'Nhdta-141', 'NADE-783', 'PPPD-294', 'MIRD-102', 'SRS-022', 'BBI-163', 'BIST-001',
  'SIRO-1690', 'HAWA-020', 'SNIS-166', 'MIRD136', 'ABP-138', 'WANZ-201', 'STAR-524', 'SAMA-385', 'ABP-171', 'IPZ-409', 'ABP-108', 'MIDE128', 'N0960', 'JUX-357', 'SNIS-070',
  'SIRO-1774', 'MIRD-134', 'MIDE-128', 'ABP-145', 'N0962', 'ABP159', 'ZIZG-003', 'CWP-107', 'IPZ-127', 'MIDD-532', 'IPTD-748', 'IESP-144', 'crpd-222', 'GAR-280', 'BW248', 'MXGS173', 'MIAD-530', 'RCT-402', 'ABP-159',
  'ABP-103', 'ABP-105', 'ABP-108', 'ABP-117', 'ABP-128', 'ABP-013', 'ABP-138', 'ABP-142', 'ABP-171', 'ABP-276', 'ABP-092', 'ABS-130', 'ABS-141', 'ABS-170', 'ABS-217', 'ABS-047', 'ABS-070',
  'ABS-074', 'ABS-083', 'ADN-032', 'AKB-056', 'AMBI-048', 'AOZ-173z', 'AOZ-189z', 'AOZ-212z', 'AOZ-217z', 'AP-154', ' AP-081', 'APAA-151', 'APAA-246', 'APAA-258',
  'APAA-272', 'APAA-280', 'APAA-299', 'APAK-074', 'APAK-078', 'APAK-086', 'APAK-088', 'ARM-383', 'ARM-416', 'ARMF-003', 'ATID-157', 'ATID-207', 'ATOM-093', 'AUKG-276', 'AUKG-293', 'AUKG-045', 'AVOP-109', 'AVOP-155', 'AVOP-159', 'AVOP-167', 'AVOP-002',
  'BAMS-001', 'BDSR-185', 'BDSR-202', 'BGN-018', 'BGN-005', 'BKSP-274', 'BRA-007', 'BUG-012', 'CCCV-001', 'CHN-035', 'CLUB-196', 'CMV-049', 'CND-128', 'CND-129', 'CND-142', 'CND-089', 'CRIM-035', 'CRS-046', 'CUT-002', 'CWM-221',
  'DAJ-075', 'DANDY-289', 'DANDY-368', 'DANDY-440', 'DASD-267', 'DDT-469', 'DDT-482', 'DFE-020', 'DISM-001', 'DIY-030', 'DMOW-098', 'DOM-021',
  'DOM-043', 'DOPP-035', 'DPHN-142', 'DV-1175', 'DV-1246', 'DVDES-659', 'DVDES-734', 'DVDES-804', 'DVDES-818', 'DVDES-832', 'DVDES-836', 'DVDES-878', 'DVLL-010', 'DWI-01',
  'EBOD-249', 'EBOD-338', 'EBOD-405', 'EBOD-416', 'EDD-191', 'EMRD-058', 'EQ-059', 'EXD-048', 'FAJS-035', 'FAX-306', 'FAX-428', 'FSET-249', 'FSET-264', 'FSET-294', 'FSET-320', 'FSET-321', 'FSET-323', 'FSET-324', 'FSET-421', 'FSET-553',
  'GASO-0012', 'GASO-0013', 'GDTM-044', 'GDTM-054', 'GDTM-078', 'GENT-060', 'GENT-075', 'GEXP-91', 'GEXP-93', 'GG-106', 'GG-132', 'GG-177', 'GG-228', 'GIRO-92', 'GKI-012', 'GSHRB-037', 'GSHRB-046', 'GVG-106', 'GVG-135', 'GVG-158', 'GVG-067', 'GVRD-05',
  'HAVD-596', 'HAVD-830', 'HAVD-837', 'HBAD-141', 'HBAD-260', 'HBAD-267', 'HDI-001', 'HED-002', 'HELL-102', 'HERR-024', 'HERR-029', 'HERX-025', 'HERX-029', 'HND-110', 'HND-132', 'HND-138', 'HND-186', 'HNDS-024', 'HNDS-024', 'HODV-20467', 'HODV-20978',
  'HODV-20986', 'HODV-20993', 'HODV-21002', 'HODV-21027', 'HODV-21062', 'HRRB-003', 'HUNT-852', 'HUNT-913', 'HUNT-946', 'HUNT-971', 'HUNT-999', 'HUNTA-018', 'HUNTA-025', 'HUNTA-032', 'HUNTA-006', 'IBW-312',
  'IBW-356', 'IBW-363', 'IBW-372', 'IBW-475z', 'IBW-476z', 'IBW-483z', 'IBW-495z', 'IBW-506z', 'IBW-508z', 'IBW-518z', 'IDOL-018', 'IEND-002', 'IENE-101', 'IENE-112', 'IENE-114', 'IENE-159', 'IENE-160',
  'IENE-386', 'IENE-406', 'IENE-412', 'IENE-431', 'IESP-104', 'IESP-114', 'IESP-418', 'IESP-458', 'INU-027', 'IPTD-587', 'IPTD-619', 'IPTD-694', 'IPTD-813', 'IPTD-949', 'IPZ-140', 'IPZ-187', 'IPZ-204', 'IPZ-210',
  'IPZ-226', 'IPZ-228', 'IPZ-235', 'IPZ-257', 'IPZ-281', 'IPZ-306', 'IPZ-331', 'IPZ-344', 'IPZ-368', 'IPZ-040', 'IPZ-478', 'JOHS-005', 'JUC-112', 'JUC-368', 'JUC-398', 'JUC-419', 'JUC-944', 'JUMP-2210', 'JUMP-2312',
  'JUX-298', 'JUX-360', 'JUX-500', 'KAWD-596', 'KAWD-608', 'KAWD-629', 'KAWD-640', 'KAWD-651', 'KISD-082', 'KK-054', 'KRND-020', 'KRND-027', 'KRND-029', 'KRND-031', 'KTDS-726', 'KTDS-769', 'KTDS-774', 'LLR-005',
  'LLR-008', 'LOL-089', 'LOL-091', 'LOVE-90', 'MAS-052', 'MDTM-001', 'MDTM-013', 'MDTM-027', 'MDTM-029', 'MDYD-732', 'MDYD-785', 'MDYD-811', 'MDYD-881', 'MIAD-488', 'MIAD-573', 'MIAD-730', 'MIAD-767', 'MIDD-678',
  'MIDE-113', 'MIDE-123', 'MIDE-243', 'MIDE-007', 'MIGD-590', 'MIGD-594', 'MIGD-613', 'MIGD-625', 'MIGD-639', 'MIGD-654', 'MILD-863', 'MIMK-023', 'MIRD-139', 'MIST-045',
  'MMND-104', 'MNG-93', 'MOC-004',
  'MOMJ-017', 'MSK-006', 'MSTT-002', 'MUKD-192', 'MUKD-335', 'MUM-001', 'MUM-105', 'MUM-109', 'MUM-110', 'MUM-113', 'MUM-114', 'MUM-119', 'MUM-126', 'MUM-130',
  'MUM-132', 'MUM-135', 'MUM-143', 'MUM-144', 'MUM-165',
  'MUM-168', 'MUM-169', 'MUM-172', 'MUM-173', 'MUM-174', 'MUM-019', 'MUM-067', 'MUM-007', 'MUM-079', 'MUM-097', 'MVSD-198', 'MXGS-236', 'MXGS-271', 'MXGS-553',
  'MXGS-729', 'MXSPS-178', 'NHDT-996', 'NHDTA-141',
  'NHDTA-153', 'NHDTA-223', 'NHDTA-276', 'NHDTA-295', 'NHDTA-314', 'NHDTA-346', 'NHDTA-348', 'NHDTA-399', 'NHDTA-557', 'NHDTA-564', 'NHDTA-583', 'NHDTA-588', 'NHDTA-591', 'NHDTA-599', 'NHDTA-600', 'NHDTA-605',
  'NHDTA-606', 'NHDTA-610', 'NHDTA-636', 'NHDTA-639', 'NHDTA-644', 'NHDTA-657', 'NIN-004', 'NITR-139', 'NOP-019', 'NTR-003', 'ODFB-037', 'ODFP-010', 'OGPP-006', 'OKSN-103', 'OKSN-127', 'OKSN-228', 'OKSN-242',
  'ONED-557', 'ONED-989', 'ONEG-029', 'ONEZ-027', 'ONEZ-035', 'ONI-013', 'OVG-025', 'OYC-004', 'OYC-005', 'PARM-062', 'PARM-065', 'PARM-070', 'PARM-077', 'PGD-587', 'PGD-788', 'PMP-189', 'PMP-193', 'PMS-198',
  'PMS-201', 'PPPD-320', 'PPPD-337', 'QBD-065', 'QQ-041', 'R18-294', 'RAW-006', 'RBD-173', 'RBD-249', 'RBD-281', 'RBD-291', 'RBD-306', 'RBD-328', 'RBD-346', 'RBD-360', 'RBD-368', 'RBD-395', 'RBD-397', 'RBD-418',
  'RBD-441', 'RBD-481', 'RBD-487', 'RBD-493', 'RBD-503', 'RBD-505', 'RBD-541', 'RBD-551', 'RBD-626', 'RBD-628', 'RBD-694', 'RCT-222', 'RCT-352', 'RCT-600', 'RCT-666', 'RCT-752', 'RDD-122', 'RHTS-015', 'RHTS-032',
  'RHTS-040', 'RTP-020', 'RTP-035', 'RTP-039', 'RTP-049', 'RTP-057', 'RTP-009', 'SAK-8453', 'SAMA-842', 'SAMA-853', 'SBNS-078', 'SCOP-118', 'SCOP-185', 'SCOP-266', 'SCR-111', 'SCR-021', 'SCR-022',
  'SCR-023', 'SCR-040', 'SCR-043', 'SCR-050', 'SCR-056', 'SCR-057', 'SCR-067', 'SCR-069', 'SCR-077', 'SCR-082', 'SCR-089', 'SCR-092', 'SCR-099', 'SDDE-346', 'SDDE-372', 'SDDE-391', 'SDMS-297', 'SDMT-506',
  'SDMU-100', 'SDMU-120', 'SDMU-140', 'SDMU-161', 'SDMU-165', 'SDMU-194', 'SDMU-196', 'SERO-0262', 'SERO-0269', 'SGA-019', 'SHE-125', 'SHE-147', 'SHKD-315', 'SHKD-345', 'SHKD-378', 'SHKD-403', 'SHKD-409',
  'SHKD-489', 'SHKD-518', 'SHKD-546', 'SHKD-586', 'SHKD-614', 'SHKD-619', 'SHL-035', 'SILK-001', 'SILK-052', 'SILK-009', 'SIS-012', 'SIS-020', 'SIS-021', 'SIS-022', 'SIS-023', 'SIS-028', 'SIS-032', 'SIS-007',
  'SMA-661', 'SMA-723', 'SMS-004', 'SND-003', 'SNIS-110', 'SNIS-268', 'SNIS-313', 'SNIS-070', 'SNIS-070', 'SOE-146', 'SOE-028', 'SOE-339', 'SOE-586', 'SOE-910', 'SOE-936', 'SOE-940', 'SOE-941', 'SOE-990', 'SOE-992',
  'SOE-992', 'SON-501', 'SOR-018', 'SQTE-082', 'SQTE-090', 'SQTE-092', 'SRS-015', 'SS-025', 'SS-005', 'SSD-111', 'SSD-086', 'STAR-3115', 'STAR-316', 'STAR-325', 'STAR-395', 'STAR-476', 'STAR-545', 'STAR-551',
  'STAR-553');

module.exports = function ({
  api,
  modules,
  config,
  __GLOBAL,
  User,
  Thread,
  Rank
}) {
  let { prefix, ENDPOINT, admins } = config;
  return function ({ event }) {
    let { body: contentMessage, senderID, threadID } = event;
    senderID = parseInt(senderID);
    threadID = parseInt(threadID);
    var osuApi = new osu.Api("f542df9a0b7efc666ac0350446f954740a88faa8", {
      notFoundAsError: true,
      completeScores: false
    });
    function osuinfo(username) {
      var main = osuApi
        .apiCall("/get_user", {
          u: username
        })
        .then(user => {
          api.sendMessage(
            `*OSU INFO*\n*username* : ` +
            user[0].username +
            `\n*level* :` +
            user[0].level +
            `\n*playcount* :` +
            user[0].playcount +
            `\n*CountryRank* : ` +
            user[0].pp_country_ran +
            `\n*Total PP* : ` +
            user[0].pp_raw +
            `\n*Accuracy* :` +
            user[0].accuracy +
            `\n<3 `,
            threadID
          );
        });
      return api.sendMessage(main, threadID);
    }

    /* ================ BAN & UNBAN ==================== */

    if (__GLOBAL.userBlocked.includes(senderID)) {
      return;
    }
    // Unban thread
    if (__GLOBAL.threadBlocked.includes(threadID)) {
      if (
        contentMessage == `${prefix}unban thread` &&
        admins.includes(senderID)
      ) {
        const indexOfThread = __GLOBAL.threadBlocked.indexOf(threadID);
        if (indexOfThread == -1)
          return api.sendMessage("Nhóm này chưa bị chặn!", threadID);
        Thread.unban(threadID).then(success => {
          if (!success)
            return api.sendMessage("Không thể bỏ chặn nhóm này!", threadID);
          api.sendMessage("Nhóm này đã được bỏ chặn!", threadID);
          //Clear from blocked
          __GLOBAL.threadBlocked.splice(indexOfThread, 1);
          modules.log(threadID, "Unban Thread");
        });

        return;
      }
      return;
    }

    Rank.updatePoint(senderID, 2);

    // Unban user
    if (
      contentMessage.indexOf(`${prefix}unban`) == 0 &&
      admins.includes(senderID)
    ) {
      const mentions = Object.keys(event.mentions);
      if (mentions.length == 0)
        return api.sendMessage("Vui lòng tag những người cần unban", threadID);
      mentions.forEach(mention => {
        const indexOfUser = __GLOBAL.userBlocked.indexOf(parseInt(mention));
        if (indexOfUser == -1)
          return api.sendMessage(
            {
              body: `${event.mentions[mention]} chưa bị ban, vui lòng ban trước!`,
              mentions: [
                {
                  tag: event.mentions[mention],
                  id: mention
                }
              ]
            },
            threadID
          );

        User.unban(mention).then(success => {
          if (!success)
            return api.sendMessage("Không thể unban người này!", threadID);
          api.sendMessage(
            {
              body: `Đã unban ${event.mentions[mention]}!`,
              mentions: [
                {
                  tag: event.mentions[mention],
                  id: mention
                }
              ]
            },
            threadID
          );
          //Clear from blocked
          __GLOBAL.userBlocked.splice(indexOfUser, 1);
          modules.log(mentions, "Unban User");
        });
      });
      return;
    }

    // Ban thread
    if (contentMessage == `${prefix}ban thread` && admins.includes(senderID)) {
      api.sendMessage("Bạn có chắc muốn ban group này ?", threadID, function (
        error,
        info
      ) {
        if (error) return modules.log(error, 2);
        __GLOBAL.confirm.push({
          type: "ban:thread",
          messageID: info.messageID,
          target: parseInt(threadID),
          author: senderID
        });
      });
      return;
    }

    // Ban user
    if (
      contentMessage.indexOf(`${prefix}ban`) == 0 &&
      admins.includes(senderID)
    ) {
      const mentions = Object.keys(event.mentions);
      if (mentions.length == 0)
        return api.sendMessage("Vui lòng tag những người cần ban!", threadID);
      mentions.forEach(mention => {
        if (admins.includes(mention))
          return api.sendMessage(
            "Bạn không đủ thẩm quyền để ban người này?",
            threadID
          );
        api.sendMessage(
          {
            body: `Bạn có chắc muốn ban ${event.mentions[mention]}?`,
            mentions: [
              {
                tag: event.mentions[mention],
                id: mention
              }
            ]
          },
          threadID,
          function (error, info) {
            if (error) return modules.log(error, 2);
            __GLOBAL.confirm.push({
              type: "ban:user",
              messageID: info.messageID,
              target: {
                tag: event.mentions[mention],
                id: parseInt(mention)
              },
              author: senderID
            });
          }
        );
      });
      return;
    }

    /* ==================== CRON JOB =============== */

    //nhắc đi ngủ trong thời gian từ 11h00PM đến 6h00AM
    if (utc >= 23 && utc <= 6 && !checkthreadid.hasOwnProperty(threadID)) {
      api.sendMessage(
        `Trễ rồi đấy nii-chan, mau tắt thiết bị rồi đi ngủ đi. おやすみなさい！ `,
        threadID,
        function () {
          console.log("nhắc đi ngủ thread: " + threadID);
          checkthreadid[threadID] = true;
        }
      );
      return;
    }

    //nhắc đi ngủ trong thời gian 10h00PM tới 11h00PM
    if (utc >= 22 && utc <= 23 && !sleeptime.hasOwnProperty(threadID)) {
      api.sendMessage(
        `Tới giờ ngủ rồi đấy nii-chan, おやすみなさい!  `,
        threadID,
        function () {
          console.log("nhắc đi ngủ thread: " + threadID);
          sleeptime[threadID] = true;
        }
      );
      return;
    }

    if (utc >= 6 && utc <= 9 && !wakelist.hasOwnProperty(threadID)) {
      api.sendMessage(
        ` おはようございま các nii-chan uwu `,
        threadID,
        function () {
          console.log("thread đã thức: " + threadID);
          wakelist[threadID] = true;
        }
      );
      return;
    }

    /* ==================== SMTHING ================ */

    //detect
    if (modules.checkCrap(contentMessage)) {
      var route = Math.round(Math.random() * 10);
      if (route == 1) {
        api.sendMessage("Master à, đừng nói tục nữaa :(", threadID);
        api.sendMessage("em năn nỉ aww 🥺", threadID);
        return;
      } else if (route == 2 || route == 3) {
        api.sendMessage("Chửi nó tiếp đi anhh êy :3", threadID);
        return;
      } else if (route == 4) {
        api.sendMessage("gì chứ cái này thì em ủng hộ :v", threadID);
        return;
      } else if (route > 5) {
        api.sendMessage("-.-", threadID);
        api.sendMessage(` hạn chế nói bậy đi ạ, bọn mình là người văn hoá :(`, threadID);
        return;
      }
    }



    //gọi bot
    if (contentMessage == `em ơi` || contentMessage == "@Nam Hoàng" || contentMessage.indexOf('hú nam') != -1)
      return api.sendMessage(`Dạ nii-chan gọi Nam ạ?`, threadID);

    //lenny
    if (contentMessage == `${prefix}lenny`)
      return api.sendMessage("( ͡° ͜ʖ ͡°) ", threadID);
    //offbot
    if (contentMessage == `${prefix}turnoff`) {

      api.sendMessage("off cmm, tính giết t hả đcm 🤬🤬 lozz ", threadID);
      return;
    }

    // nhắc ngủ
    if (contentMessage == `sleep`) {
      var thoigian = ""
      var d = new Date()
      h = d.getHours()
      m = d.getMinutes()
      var x = 1
      y = 30

      for (var i = 1; i < 7; i++) {
        var h1 = 0, m1 = 0
        if ((h + i * x) > 24) {
          h1 = h + i * x - 24
        }
        else {
          h1 = h + i * x
        }
        if ((m + i * y) > 60) {
          m1 = m + i * y //số phút
          var z = Math.floor(m1 / 60) // lấy số giờ dư
          m1 = m + i * y
          m1 = m1 % 60 //lấy số phút dư
          h1 = h1 + z //cộng số giờ dư vào hours
        }
        else {
          m1 = m + 30
        }
        if (m1 + 20 > 60) {
          h1 += 1
          m1 = m1 + 20 - 60
        }
        else {
          m1 = m1 + 20
        }
        if (h1 > 24) {
          h1 = h1 - 24
        }
        if (i != 6) {
          thoigian = thoigian + h1 + ":" + m1 + " hoặc "
        }
        else
          thoigian = thoigian + h1 + ":" + m1 + "."
      }


      return api.sendMessage("Bây giờ là " + h + ":" + m + "\n \nBạn nên thức dậy vào các khung giờ " + thoigian + " \n\n (Thức dậy giữa một chu kỳ giấc ngủ khiến bạn cảm thấy mệt mỏi, nhưng khi thức dậy vào giữa chu kỳ tỉnh giấc sẽ làm bạn cảm thấy tỉnh táo và minh mẫn.) \n \n Chúc ngủ ngon! 😴", threadID);

    }

    //hug
    if (contentMessage == `${prefix}hug`)
      return api.sendMessage(" (つ ͡° ͜ʖ ͡°)つ  ", threadID);

    //mlem
    if (contentMessage == `${prefix}mlem`)
      return api.sendMessage(" ( ͡°👅 ͡°)  ", threadID);
    //care
    if (contentMessage == `${prefix}care`)
      return api.sendMessage("¯\\\_(ツ)_/¯", threadID);

    //prefix
    if (contentMessage == `prefix`)
      return api.sendMessage("Prefix is: !", threadID);

    //kick user
    if (
      contentMessage.indexOf(`${prefix}kick`) == 0 &&
      admins.includes(senderID)
    ) {
      for (var i = 0; i < Object.keys(event.mentions).length; i++) {
        api.removeUserFromGroup(Object.keys(event.mentions)[i], threadID);
      }
      return;
    }

    //tìm vị trí theo ip
    if (contentMessage.indexOf(`${prefix}local`) == 0) {
      const apilocal = require("./modules/findlocaltion");
      let callback = function () {
        delete require.cache[
          require.resolve(__dirname + "/src/findlocaltion.json")
        ];
        let iplocal = require(__dirname + "/src/findlocaltion.json");
        console.log(iplocal);
        if (iplocal.status == "success") {
          api.sendMessage(
            " Toàn bộ thông tin về ip: " +
            iplocal.query +
            "\n - Thành phố: " +
            iplocal.city +
            "\n - Tên miền: " +
            iplocal.regionName +
            "\n - Quốc gia: " +
            iplocal.country +
            "\n - Núi giờ: " +
            iplocal.timezone +
            "\n - AS mumber và tổ chức: " +
            iplocal.as +
            "\n - Tên tổ chức: " +
            iplocal.org +
            "\n - Tên ISP: " +
            iplocal.isp +
            ".",
            threadID
          );
        } else {
          api.sendMessage(
            "ip bạn nhập không tổn tại hoặc hệ thống lỗi, vui lòng thử lại sau! Lỗi: " +
            iplocal.status +
            " | " +
            iplocal.message +
            ".",
            threadID
          );
        }
      };
      apilocal.api(
        contentMessage.slice(prefix.length + 6, contentMessage.length),
        callback
      );
      return;
    }

    //thời tiết
    if (contentMessage.indexOf(`${prefix}weather`) == 0) {
      const weather = require("./modules/weather");
      let callback = function () {
        delete require.cache[require.resolve(__dirname + "/src/weather.json")];
        let weatherdata = require(__dirname + "/src/weather.json");
        if (weatherdata.cod == "200") {
          api.sendMessage(
            `Thành phố: ` +
            weatherdata.name +
            `\n - nhiệt độ hiện tại: ` +
            weatherdata.main.temp +
            `°C \n - Bầu trời: ` +
            weatherdata.weather[0].description +
            `\n - độ ẩm trong không khí: ` +
            weatherdata.main.humidity +
            `% \n - tốc độ gió: ` +
            weatherdata.wind.speed +
            `km/h \n Tips: Thời tiết luôn cập nhật theo realtime, nên các bạn chú ý thời tiết để tránh các hoạt động vui chơi bị trì hoãn nha <3`,
            threadID
          );
        } else {
          api.sendMessage(
            `Thông tin thành phố của bạn không đúng!`,
            threadID
          );
          return;
        }
      };
      weather.api(
        contentMessage.slice(prefix.length + 8, contentMessage.length),
        callback
      );
      return;
    }

    //say
    if (contentMessage.indexOf(`${prefix}say`) == 0) {
      const tts = require("./modules/say");
      let callback = function () {
        let m = {
          body: "",
          attachment: fs.createReadStream(__dirname + "/src/say.mp3")
        };
        api.sendMessage(m, threadID);
      };
      if (contentMessage.indexOf("jp") == 5)
        tts.other(
          contentMessage.slice(prefix.length + 7, contentMessage.length),
          "ja",
          callback
        );
      else if (contentMessage.indexOf("en") == 5)
        tts.other(
          contentMessage.slice(prefix.length + 7, contentMessage.length),
          "en-US",
          callback
        );
      else if (contentMessage.indexOf("ko") == 5)
        tts.other(
          contentMessage.slice(prefix.length + 7, contentMessage.lenght),
          "ko",
          callback
        );
      else if (contentMessage.indexOf("ru") == 5)
        tts.other(
          contentMessage.slice(prefix.lenght + 7, contentMessage.lenght),
          "ru",
          callback
        );
      else
        tts.vn(
          contentMessage.slice(prefix.length + 4, contentMessage.length),
          callback
        );
      return;
    }

    //cập nhật tình hình dịch

    if (contentMessage == `${prefix}corona`) {
      const takedata = require("./modules/corona");
      let callback = function () {
        var data = require(__dirname + "/src/corona.json");
        api.sendMessage(
          "Thế giới: \n - Nhiễm: " +
          data.data.global.cases +
          "\n - Chết: " +
          data.data.global.deaths +
          "\n - Hồi phục: " +
          data.data.global.recovered +
          "\n Việt Nam:\n - Nhiễm: " +
          data.data.vietnam.cases +
          "\n - Chết: " +
          data.data.vietnam.deaths +
          "\n - Phục hồi: " +
          data.data.vietnam.recovered +
          "\nTips: Nếu bạn có dấu hiệu như: ho, sốt cao, sổ mũi, khó thở, đau vòm họng hãy báo ngay cho bộ y tế với đường dây nóng: 19003228, 0989671115 và 0963851919 \n Tips: để bảo vệ sức khoẻ cho bản thân và cho mọi người xung quanh, tuyệt đối tránh ra khỏi nhà khi không cần thiết, nếu thấy bản thân hay người xung quanh có các triệu chứng của bệnh vui lòng báo ngay đến các cơ sở y tế gần đó hoặc gọi điện cho đường dây nóng của bộ y tế đã đề cập bên trên! #stayhome ",
          threadID
        );
      };
      takedata.take(callback);
      return;
    }

    //tuỳ chọn
    if (contentMessage.indexOf(`${prefix}choose`) == 0) {
      var input = contentMessage
        .slice(prefix.length + 7, contentMessage.length)
        .trim();
      if (input.lenght == 0)
        return api.sendMessage(
          `Nii-chan không nhập đủ thông tin kìa :(`,
          threadID
        );
      var array = input.split(" | ");
      var rand = Math.floor(Math.random() * array.length);

      api.sendMessage(
        `hmmmm, em sẽ chọn giúp nii-chan là: ` + array[rand] + `.`,
        threadID
      );
      return;
    }

    //detect chửi bot
    if (
      contentMessage.indexOf("đcm") > -1 ||
      contentMessage.indexOf("Bot") > -1 ||
      contentMessage.indexOf("bot") > -1 ||
      contentMessage.indexOf("điếm") > -1 ||
      contentMessage.indexOf("Nam") > -1 ||
      contentMessage.indexOf("Tươi") > -1 ||
      contentMessage.indexOf("tuoi") > -1 ||
      contentMessage.indexOf("Tuoi") > -1 ||
      contentMessage.indexOf("tươi") > -1 ||
      contentMessage.indexOf("ngọc") > -1 ||
      contentMessage.indexOf("Ngọc") > -1 ||
      contentMessage.indexOf("nam") > -1
    ) {
      if (
        contentMessage.indexOf("ngu") != -1 ||
        contentMessage.indexOf("khùng") != -1 ||
        contentMessage.indexOf("khung") != -1 ||
        contentMessage.indexOf("điên") != -1 ||
        contentMessage.indexOf("cặc") != -1 ||
        contentMessage.indexOf("óc") != -1 ||
        contentMessage.indexOf("chó") != -1 ||
        contentMessage.indexOf("đm") != -1 ||
        contentMessage.indexOf("mẹ") != -1 ||
        contentMessage.indexOf("địt") != -1 ||
        contentMessage.indexOf("sủa") != -1 ||
        contentMessage.indexOf("súc vật") != -1 ||
        contentMessage.indexOf("như lồn") != -1 ||
        contentMessage.indexOf("đĩ") != -1 ||
        contentMessage.indexOf("cave") != -1 ||
        contentMessage.indexOf("lồn") != -1 ||
        contentMessage.indexOf("địt mẹ") != -1 ||
        contentMessage.indexOf("lòn") != -1 ||
        contentMessage.indexOf("lozz") != -1
      ) {
        const gud = require("./modules/music");
        let callback = function () {
          let up = {
            body: "",
            attachment: fs.createReadStream(__dirname + "/src/music.mp3")
          };
          api.sendMessage(up, threadID);
        };
        var myArray = [
          "https://www.youtube.com/watch?v=fMW1pmDjdH0",
          "https://youtu.be/VYjTNW3zGhA",
          "https://youtube.com/watch?v=hoo02dFNEYA"
        ];
        var rand = Math.floor(Math.random() * myArray.length);

        gud.youtube(myArray[rand], callback);
        return api.sendMessage("chửi cc, mày nói chuyện gì tục tĩu dữ mải", threadID);;
      }
    }

    //waifu
    if (contentMessage === `${prefix}waifu`) {
      var route = Math.round(Math.random() * 10);
      if (route == 1) {
        api.sendMessage("Dạ em sẽ làm vợ anh <3", threadID);
        api.sendMessage("Yêu chàng nhiều <3", threadID);
        return;
      } else if (route == 2) {
        api.sendMessage("Làm Bạn thôi nhé :'(", threadID);
        return;
      } else if (route == 3) {
        api.sendMessage("Dạ em sẽ làm vợ anh <3", threadID);
        api.sendMessage("Yêu chàng nhiều <3", threadID);
        return;
      } else if (route > 4) {
        api.sendMessage("-.-", threadID);
        api.sendMessage("Chúng ta chỉ là bạn thôi :'(", threadID);
        return;
      }
    }

    //ramdom con số
    if (contentMessage == `${prefix}roll`) {
      var roll = Math.round(Math.random() * 100);
      api.sendMessage("UwU Your Number is " + roll + " ", threadID);
      return;
    }

    //tát người bạn
    if (contentMessage.indexOf(`${prefix}tát`) == 0) {
      for (var i = 0; i < Object.keys(event.mentions).length; i++) {
        var route = Math.round(Math.random() * 10);
        var x = contentMessage
          .slice(prefix.length + 5, contentMessage.length)
          .trim();
        if (route == 1 || route == 3) {
          api.sendMessage(
            {
              body: x + " Vừa xinh vừa cute, ai lại đi vả nòo 🥺",
              mentions: [
                {
                  tag: x,
                  id: Object.keys(event.mentions)[i]
                }
              ]
            },
            threadID
          );
        } else if (route == 2 || route == 4) {
          api.sendMessage(
            {
              body: x + " nhỏ này thì phải vả cả đời không hết nghiệp 😌 \n chán hết muốn nói",
              mentions: [
                {
                  tag: x,
                  id: Object.keys(event.mentions)[i]
                }
              ]
            },
            threadID
          );
        } else if (route > 4) {
          api.sendMessage(
            {
              body: x + " Vừa Bị Vả Vỡ Mồm Haha\n",
              mentions: [
                {
                  tag: x,
                  id: Object.keys(event.mentions)[i]
                }
              ]
            },
            threadID
          );
        }
      }
      return;
    }


    //detect khen sumi
    if (
      contentMessage == `Nam khôn` ||
      contentMessage == `nam khôn` ||
      contentMessage == `nam đẹp trai` ||
      contentMessage == `Nam đẹp trai` ||
      contentMessage == `Nam đẹp gái` ||
      contentMessage == `nam thông minh` ||
      contentMessage == `Nam thông minh` ||
      contentMessage == `Nam dễ thương ` ||
      contentMessage == `nam dễ thương ` ||
      contentMessage == `Nam cute` ||
      contentMessage == `nam cute` ||
      contentMessage == `nam giỏi á` ||
      contentMessage == `Nam giỏi á` ||
      contentMessage == `nam giỏi ghê` ||
      contentMessage == `Nam giỏi ghê` ||
      contentMessage == `nam đẹp gái` ||
      contentMessage == `ngọc khôn` ||
      contentMessage == `Ngọc khôn` ||
      contentMessage == `ngọc đẹp trai` ||
      contentMessage == `Ngọc đẹp trai` ||
      contentMessage == `ngọc đẹp gái` ||
      contentMessage == `ngọc thông minh` ||
      contentMessage == `Ngọc thông minh` ||
      contentMessage == `ngọc dễ thương ` ||
      contentMessage == `Ngọc dễ thương ` ||
      contentMessage == `ngọc cute` ||
      contentMessage == `Ngọc cute` ||
      contentMessage == `ngọc giỏi á` ||
      contentMessage == `Ngọc giỏi á` ||
      contentMessage == `ngọc giỏi ghê` ||
      contentMessage == `Ngọc giỏi ghê` ||
      contentMessage == `Ngọc đẹp gái`
    ) {
      api.sendMessage(`Dạ em cám ơn nii-chan <3 <3 <3 <3 <3 <3`, threadID);
      return;
    }

    //Khiến bot nhái lại tin nhắn bạn
    if (contentMessage.indexOf(`${prefix}echo`) == 0) {
      let echotext = contentMessage
        .slice(prefix.length + 4, contentMessage.length)
        .trim();
      api.sendMessage(`${echotext}`, threadID);
      return;
    }

    //nhentai ramdom code
    if (contentMessage == `${prefix}nhentai -r`) {
      let ramdomnhentai = Math.floor(Math.random() * 99999);
      api.sendMessage(
        `Code lý tưởng của nii-chan là: ${ramdomnhentai}`,
        threadID
      );
      return;
    }

    //toàn bộ lệnh ở đây
    if (contentMessage == `${prefix}help`) {
      event.isGroup &&
        api.sendMessage(
          `     Danh sách toàn bộ lệnh của Sumi-Chan: \n
\n
  \\\\\ Lệnh dành cho dân thường \\\\\ \n
\n  
  prefix : Kiểm tra prefix (default là !)\n
\n  
  em ơi || @Nam Hoàng || hú nam : Ping bot\n
\n
  sleep : thông báo nên dậy khi nào \n
\n  
  ${prefix}turnoff : tắt bot
\n
  sleep : thông báo nên dậy khi nào \n
\n  
  ${prefix}lenny : ( ͡° ͜ʖ ͡°)\n
\n  
  ${prefix}hug : (つ ͡° ͜ʖ ͡°)つ\n
\n  
  ${prefix}mlem : ( ͡°👅 ͡°)\n
\n  
  ${prefix}say <text> : bot xuất ra âm thanh\n
\n
  ${prefix}play <đường dẫn> : phát video, Lưu ý link phải thuộc dạng: https://youtube.com/ \n
\n
  ${prefix}choose <input 1> | <input 2> : chọn ngẫu nhiên trong tất cả, có thể làm dài ra ví dụ như <input1> | <input2> | <input3> | <input n+1> \n
\n  
  ${prefix}echo <text> : bot sẽ nói lại y chang bạn vừa nói\n
\n  
  ${prefix}corona : kiểm tra tình hình dịch covid-19 (realtime)\n
\n  
  ${prefix}weather <city> : kiểm tra thời tiết, lưu ý phần city phải để là tên thành phố không dấu, không viết hoa!\n
\n  
  ${prefix}waifu : thử vận may có hốt được nam-chan không (đa số là không "/)\n
\n  
  ${prefix}roll : lấy con số may mắn của bạn\n
\n  
  ${prefix}tát <@ người cần tát> : tát hoặc vả người mà bạn nhắc\n
\n  
  ${prefix}osuinfo -u <username> : lấy thông tin từ username osu! của bạn\n
\n  
  ${prefix}music <url youtube> : phát nhạc ở chat, lưu ý sử dụng link của https://youtube.com/, tất cả link khác đều không hoạt động\n
\n  
  ${prefix}rank : kiểm tra level của bạn, hoạt động ở multi group!\n
\n  
  \\\\\ Lệnh không phù hợp cho nơi làm việc(NSFW) \\\\\ \n
\n 
  ${prefix}nhentai -r : lấy con số sauce may mắn của bạn\n
\n  
  ${prefix}nhentai -i <id> : lấy toàn bộ thông tin truyện của bạn\n
\n  
  ${prefix}jav : lấy code may mắn của bạn\n
\n  
  \\\\\ Admin Commands: call admin at https://fb.me/Cataliz2k \\\\\\ \n
\n
  ${prefix}ban <@ người bạn muốn ban> : khiến cho người dùng đấy không thể sử dụng bot\n
\n  
  ${prefix}unban <@ người bạn muốn unban> : khiến cho người dùng có thể sử dụng bot\n
\n  
  ${prefix}ban thread : khiến cho chat đó không thể sử dụng bot (áp dụng cho toàn bộ thành viên)\n
\n  
  ${prefix}unban thread : khiến cho chat đó có thể sử dụng bot (áp dụng dho toàn bộ thành viên kể cả người bị ban)\n
\n  
  ${prefix}adduser <id> : thêm thành viên vào nhóm\n
\n  
  ${prefix}kick <@ người bạn muốn kick> : xoá thành viên ra khỏi nhóm\n
\n  
  \\\\\ các lệnh ngoài lề phục vụ cho AI bot \\\\\\ \n
\n
  nam ngu, buồi, vv : bot sẽ dizz bạn không thương tiếc\n
\n  
  nam khôn : bot sẽ cám ơn bạn thay lời cám ơn của mình :3\n
\n  
  chửi thề : sẽ bị bot nhắc chỉnh sửa lại cái nết của bạn "/\n
\n  
  \\\\\ Credits \\\\\ \n
\n
  contact me at: https://www.facebook.com/messages/t/CoktailDail\n
\n
  Sumi-chan Source code open at: https://github.com/roxtigger2003/Sumi-chan-bot\n
\n
  \\\\\ Cám ơn vì đã tin tưởng bot của tớ <3 | nếu có lỗi gì xin vui lòng báo cáo ở link contact trên của mình nha <3 \\\\\ \n
\n
`,
          senderID
        );

      api.sendMessage(`check inbox đi nii-chan!`, threadID);
      return;
    }

    //jav code
    if (contentMessage == `${prefix}jav`) {
      var ran = Math.floor(Math.random() * javcode.length);
      api.sendMessage(javcode[ran], threadID);
      return;
    }

    //lấy thông tin osu!
    if (contentMessage.indexOf(`${prefix}osuinfo -u`) == 0) {
      var username = contentMessage
        .slice(prefix.length + 11, contentMessage.length)
        .trim();

      osuinfo(username);
      return;
    }

    //nhentai search
    if (contentMessage.indexOf(`${prefix}nhentai -i`) == 0) {
      let nhentai = require("./modules/nhentai-search");
      let linknhentai = contentMessage
        .slice(prefix.length + 11, contentMessage.length)
        .trim();
      api.sendMessage(`link: https://nhentai.net/g/${linknhentai}`, threadID);
      nhentai
        .get(
          contentMessage.slice(prefix.length + 11, contentMessage.length).trim()
        )
        .then(res => {
          if (!res.error) {
            let tags = "";
            res.tags.map(e => {
              tags = tags + e + ", ";
            });
            api.sendMessage("title: " + res.title, threadID);
            api.sendMessage(
              "pages: " + res.pages + "\nfavorites: " + res.favorites
            );
            api.sendMessage(
              "tags: \n" + tags.slice(0, tags.length - 2),
              threadID
            );
          } else api.sendMessage("lỗi, id không xác định 😞", threadID);
        });
      return;
    }

    //phát video

    if (contentMessage.indexOf(`${prefix}play`) == 0) {
      if (contentMessage.indexOf("https://www.youtube.com") == 6) {
        const playvideo = require("./modules/playvideo");
        let url = contentMessage.slice(
          prefix.length + 5,
          contentMessage.length
        );
        api.sendMessage(` đợi em một xíu em đang xử lý... ${url}`, threadID);
        let callback = function () {
          let up = {
            body: "",
            attachment: fs.createReadStream(__dirname + "/src/video.mp4")
          };
          api.sendMessage(up, threadID);
        };
        playvideo.youtube(
          contentMessage.slice(prefix.length + 4, contentMessage.length).trim(),
          callback
        );
      } else {
        api.sendMessage(
          " Đường link không phù hợp, đường link phải là: https://www.youtube.com"
        );
      }
      return;
    }

    //phát nhạc
    if (contentMessage.indexOf(`${prefix}music`) == 0) {
      if (contentMessage.indexOf("https://www.youtube.com") == 7) {
        const music = require("./modules//music");
        api.sendMessage(" đợi em một xíu em đang xử lý...", threadID);
        let callback = function () {
          let up = {
            body: "",
            attachment: fs.createReadStream(__dirname + "/src/music.mp3")
          };
          api.sendMessage(up, threadID);
        };
        music.youtube(
          contentMessage.slice(prefix.length + 6, contentMessage.length).trim(),
          callback
        );
      } else {
        api.sendMessage(
          " Đường link không phù hợp, đường link phải là: https://www.youtube.com ",
          threadID
        );
      }
      return;
    }

    //rank
    if (contentMessage == `${prefix}rank`)
      api.getUserInfo(senderID, (err, result) => {
        if (err) return modules.log(err, 2);
        const { name } = result[senderID];

        Rank.getPoint(senderID)
          .then(point => createCard({ id: senderID, name, ...point }))
          .then(path =>
            api.sendMessage(
              { body: "", attachment: fs.createReadStream(path) },
              threadID,
              () => {
                fs.unlinkSync(path);
              }
            )
          );
      });
  };
};
