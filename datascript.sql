use lolo_db;
SET FOREIGN_KEY_CHECKS = 0; 
truncate lolo_report; 
truncate lolo_locust; 
truncate lolo_locust_in_report; 
truncate lolo_location; 
truncate lolo_image; 
truncate lolo_image_in_report; 
SET FOREIGN_KEY_CHECKS = 1; 
INSERT INTO lolo_report(reportId, body, date) VALUES(1,"This is a test comment about locusts. This is a test comment about locusts. This is a test comment about locusts. This is a test comment about locusts. This is a test comment about locusts.",'2026-12-27 08:32:42');
INSERT INTO lolo_report(reportId, body, date) VALUES(2,"arcu",'2026-12-21 13:57:47');
INSERT INTO lolo_report(reportId, body, date) VALUES(3,"vitae",'2026-12-20 09:28:27');
INSERT INTO lolo_report(reportId, body, date) VALUES(4,"elementum",'2026-11-04 14:10:14');
INSERT INTO lolo_report(reportId, body, date) VALUES(5,"curabitur",'2026-11-24 06:17:28');
INSERT INTO lolo_report(reportId, body, date) VALUES(6,"vitae",'2026-11-24 01:45:01');
INSERT INTO lolo_report(reportId, body, date) VALUES(7,"nunc",'2026-10-13 13:22:40');
INSERT INTO lolo_report(reportId, body, date) VALUES(8,"sed",'2026-10-07 17:17:46');
INSERT INTO lolo_report(reportId, body, date) VALUES(9,"velit",'2026-10-22 08:08:59');
INSERT INTO lolo_report(reportId, body, date) VALUES(10,"dignissim",'2026-10-11 09:49:44');
INSERT INTO lolo_report(reportId, body, date) VALUES(11,"sodales",'2026-09-18 11:46:43');
INSERT INTO lolo_report(reportId, body, date) VALUES(12,"ut",'2026-09-05 09:49:21');
INSERT INTO lolo_report(reportId, body, date) VALUES(13,"eu",'2026-09-18 07:48:59');
INSERT INTO lolo_report(reportId, body, date) VALUES(14,"sem",'2026-08-16 09:45:05');
INSERT INTO lolo_report(reportId, body, date) VALUES(15,"integ",'2026-08-12 03:09:25');
INSERT INTO lolo_report(reportId, body, date) VALUES(16,"vitae",'2026-08-28 01:24:23');
INSERT INTO lolo_report(reportId, body, date) VALUES(17,"justo",'2026-11-28 10:09:56');
INSERT INTO lolo_report(reportId, body, date) VALUES(18,"eget",'2026-07-11 12:08:21');
INSERT INTO lolo_report(reportId, body, date) VALUES(19,"magna",'2026-07-28 15:52:24');
INSERT INTO lolo_report(reportId, body, date) VALUES(20,"fermentum",'2026-06-30 07:41:03');
INSERT INTO lolo_report(reportId, body, date) VALUES(21,"iaculis",'2024-12-14 14:25:59');
INSERT INTO lolo_report(reportId, body, date) VALUES(22,"e",'2024-11-14 14:50:46');
INSERT INTO lolo_report(reportId, body, date) VALUES(23,"bibendum",'2023-01-25 15:01:19');
INSERT INTO lolo_report(reportId, body, date) VALUES(24,"arcu",'2024-11-08 22:31:55');
INSERT INTO lolo_report(reportId, body, date) VALUES(25,"vitae",'2024-09-28 03:13:46');
INSERT INTO lolo_report(reportId, body, date) VALUES(26,"elementum",'2024-04-12 17:14:02');
INSERT INTO lolo_report(reportId, body, date) VALUES(27,"curabitur",'2022-02-27 09:35:51');
INSERT INTO lolo_report(reportId, body, date) VALUES(28,"vitae",'2023-07-18 05:10:41');
INSERT INTO lolo_report(reportId, body, date) VALUES(29,"nunc",'2025-01-29 00:19:45');
INSERT INTO lolo_report(reportId, body, date) VALUES(30,"sed",'2022-12-31 07:16:14');
INSERT INTO lolo_report(reportId, body, date) VALUES(31,"velit",'2024-05-01 15:21:20');
INSERT INTO lolo_report(reportId, body, date) VALUES(32,"dignissim",'2025-10-31 19:43:36');
INSERT INTO lolo_report(reportId, body, date) VALUES(33,"sodales",'2022-05-24 19:36:04');
INSERT INTO lolo_report(reportId, body, date) VALUES(34,"ut",'2022-04-03 14:16:15');
INSERT INTO lolo_report(reportId, body, date) VALUES(35,"eu",'2023-12-09 17:30:08');
INSERT INTO lolo_report(reportId, body, date) VALUES(36,"sem",'2021-12-17 06:30:34');
INSERT INTO lolo_report(reportId, body, date) VALUES(37,"integer",'2025-02-17 16:23:20');
INSERT INTO lolo_report(reportId, body, date) VALUES(38,"vitae",'2023-03-31 00:56:32');
INSERT INTO lolo_report(reportId, body, date) VALUES(39,"justo",'2024-10-27 21:36:28');
INSERT INTO lolo_report(reportId, body, date) VALUES(40,"eget",'2023-11-02 02:20:50');
INSERT INTO lolo_report(reportId, body, date) VALUES(41,"magna",'2022-04-15 16:39:02');
INSERT INTO lolo_report(reportId, body, date) VALUES(42,"fermentum",'2024-06-15 04:15:48');
INSERT INTO lolo_report(reportId, body, date) VALUES(43,"iaculis",'2021-09-19 12:59:46');
INSERT INTO lolo_report(reportId, body, date) VALUES(44,"eu",'2023-06-09 16:45:35');
INSERT INTO lolo_report(reportId, body, date) VALUES(45,"non",'2024-07-21 04:46:45');
INSERT INTO lolo_report(reportId, body, date) VALUES(46,"diam",'2025-06-30 10:51:53');
INSERT INTO lolo_report(reportId, body, date) VALUES(47,"phasellus",'2024-10-05 21:45:50');
INSERT INTO lolo_report(reportId, body, date) VALUES(48,"vestibulum",'2021-11-10 21:40:16');
INSERT INTO lolo_report(reportId, body, date) VALUES(49,"lorem",'2025-07-01 04:28:41');
INSERT INTO lolo_report(reportId, body, date) VALUES(50,"sed",'2022-02-08 15:35:44');
INSERT INTO lolo_locust(locustId, type) VALUES(1, "Adults");
INSERT INTO lolo_locust(locustId, type) VALUES(2, "Hoppers");
INSERT INTO lolo_locust(locustId, type) VALUES(3, "Eggs");
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(1,2);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(1,1);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(2,3);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(2,2);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(3,3);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(3,2);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(4,3);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(4,2);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(5,3);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(6,3);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(6,1);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(7,2);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(8,1);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(8,2);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(9,3);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(9,2);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(9,1);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(10,2);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(10,1);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(11,3);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(12,3);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(12,2);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(12,1);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(13,3);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(13,1);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(14,3);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(15,3);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(15,1);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(16,1);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(17,3);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(17,2);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(17,1);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(18,3);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(18,1);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(19,1);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(19,2);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(20,2);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(20,1);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(21,1);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(22,3);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(22,2);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(23,2);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(23,3);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(24,1);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(24,3);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(25,2);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(26,3);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(26,2);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(28,3);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(28,1);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(29,3);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(29,1);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(30,2);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(30,1);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(31,3);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(31,2);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(32,3);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(32,1);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(33,1);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(33,3);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(34,2);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(35,2);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(35,3);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(36,3);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(36,1);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(37,1);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(37,2);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(38,2);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(38,3);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(39,2);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(39,3);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(40,2);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(40,3);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(41,2);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(41,1);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(42,3);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(42,2);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(42,1);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(43,3);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(44,1);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(44,2);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(45,2);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(46,3);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(47,1);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(47,2);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(48,3);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(48,2);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(48,1);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(49,3);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(49,2);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(50,3);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(50,2);
INSERT INTO lolo_locust_in_report(reportId,locustId) VALUES(50,1);
INSERT INTO lolo_location VALUES(1,"Addis Ababa, Ethiopia",38.7578,8.9806);
INSERT INTO lolo_location VALUES(2,"Shashamene Zuria, Ethiopia",38.6005,7.1973);
INSERT INTO lolo_location VALUES(3,"Eldoret, Kenya",35.2698,0.5143);
INSERT INTO lolo_location VALUES(4,"Boocame, Somalia",47.9379,8.3991);
INSERT INTO lolo_location VALUES(5,"Eldoret, Kenya",35.2698,0.5143);
INSERT INTO lolo_location VALUES(6,"Ambo, Ethiopia",37.9321,8.9581);
INSERT INTO lolo_location VALUES(7,"Bur Salah, Somalia",47.2387,7.1745);
INSERT INTO lolo_location VALUES(8,"Tile, Somalia",45.8667,3.1);
INSERT INTO lolo_location VALUES(9,"Shashamene Zuria, Ethiopia",38.6005,7.1973);
INSERT INTO lolo_location VALUES(10,"Quljeed, Somalia",43.0086,10.091);
INSERT INTO lolo_location VALUES(11,"Emali, Kenya",37.4731,2.0797);
INSERT INTO lolo_location VALUES(12,"Las Anod, Somalia",47.3658,8.476);
INSERT INTO lolo_location VALUES(13,"Hargeisa, Somalia",44.077,9.5624);
INSERT INTO lolo_location VALUES(14,"Isiolo, Kenya",37.5833,0.3556);
INSERT INTO lolo_location VALUES(15,"Kiambu, Kenya",36.8304,1.1748);
INSERT INTO lolo_location VALUES(16,"Gimbi, Ethiopia",35.8334,9.186);
INSERT INTO lolo_location VALUES(17,"Sebeta, Ethiopia",38.6268,8.9112);
INSERT INTO lolo_location VALUES(18,"Dhamasa, Somalia",46.1996,5.1521);
INSERT INTO lolo_location VALUES(19,"Hargeisa, Somalia",44.077,9.5624);
INSERT INTO lolo_location VALUES(20,"Bur Salah, Somalia",47.2387,7.1745);
INSERT INTO lolo_location VALUES(21,"Baragoi, Kenya",40.2585579,52.695844);
INSERT INTO lolo_location VALUES(22,"Kitale, Kenya",107.663944,38.874434);
INSERT INTO lolo_location VALUES(23,"Lang'ata, Kenya",30.8005553,57.8857887);
INSERT INTO lolo_location VALUES(24,"Barawa, Somalia",-39.7755571,9.7220855);
INSERT INTO lolo_location VALUES(25,"Butajira, Ethiopia",-8.7524636,41.8535089);
INSERT INTO lolo_location VALUES(26,"Jimma, Ethiopia",112.8915932,37.1578431);
INSERT INTO lolo_location VALUES(27,"Gimbi, Ethiopia",6.4140214,-26.7162431);
INSERT INTO lolo_location VALUES(28,"Nyeri, Kenya",21.2002807,-7.4141326);
INSERT INTO lolo_location VALUES(29,"Mek'ele, Ethiopia",15.6119301,30.572815);
INSERT INTO lolo_location VALUES(30,"Adale, Somalia",133.7941356,30.375526);
INSERT INTO lolo_location VALUES(31,"Warsheikh, Somalia",100.3273368,13.559532);
INSERT INTO lolo_location VALUES(32,"Irgalem, Ethiopia",105.592898,-6.7050629);
INSERT INTO lolo_location VALUES(33,"Mutomo, Kenya",20.6879247,-3.2023658);
INSERT INTO lolo_location VALUES(34,"Nanyuki, Kenya",14.4514592,49.7762204);
INSERT INTO lolo_location VALUES(35,"Sheikh, Somalia",125.430748,-5.8327847);
INSERT INTO lolo_location VALUES(36,"Wisil, Somalia",115.217658,45.161017);
INSERT INTO lolo_location VALUES(37,"Wisil, Somalia",25.491651,40.4140806);
INSERT INTO lolo_location VALUES(38,"Diani Beach, Kenya",140.2534384,51.9913857);
INSERT INTO lolo_location VALUES(39,"Mogadishu, Somalia",44.2797884,23.744617);
INSERT INTO lolo_location VALUES(40,"Wajir, Kenya",-64.386599,-25.5468699);
INSERT INTO lolo_location VALUES(41,"Barawa, Somalia",22.9355752,19.6808413);
INSERT INTO lolo_location VALUES(42,"Damala Hagare, Somalia",121.0307955,37.3551423);
INSERT INTO lolo_location VALUES(43,"Asosa, Ethiopia",115.1021,2.7682671);
INSERT INTO lolo_location VALUES(44,"Kapenguria, Kenya",62.5102237,34.0293135);
INSERT INTO lolo_location VALUES(45,"Busia, Kenya",111.500774,3.1155165);
INSERT INTO lolo_location VALUES(46,"Qardho, Somalia",149.63283,47.7557543);
INSERT INTO lolo_location VALUES(47,"Embu, Kenya",101.356947,31.415251);
INSERT INTO lolo_location VALUES(48,"El Buur, Somalia",105.9495,60.6302526);
INSERT INTO lolo_location VALUES(49,"Alaba Kulito, Ethiopia",-1.5411258,14.6297081);
INSERT INTO lolo_location VALUES(50,"Hafun, Somalia",123.5982956,57.9760319);
INSERT INTO lolo_image VALUES(1,"Locust1.PNG");
INSERT INTO lolo_image VALUES(2,"Locust2.PNG");
INSERT INTO lolo_image VALUES(3,"Locust3.PNG");
INSERT INTO lolo_image VALUES(4,"Locust4.PNG");
INSERT INTO lolo_image VALUES(5,"Locust5.PNG");
INSERT INTO lolo_image VALUES(6,"Locust6.PNG");
INSERT INTO lolo_image VALUES(7,"Locust7.PNG");
INSERT INTO lolo_image VALUES(8,"Locust8.PNG");
INSERT INTO lolo_image VALUES(9,"Locust9.PNG");
INSERT INTO lolo_image VALUES(10,"Locust10.PNG");
INSERT INTO lolo_image VALUES(11,"Locust11.PNG");
INSERT INTO lolo_image VALUES(12,"Locust12.PNG");
INSERT INTO lolo_image VALUES(13,"Locust13.PNG");
INSERT INTO lolo_image_in_report VALUES(1,10);
INSERT INTO lolo_image_in_report VALUES(2,1);
INSERT INTO lolo_image_in_report VALUES(3,2);
INSERT INTO lolo_image_in_report VALUES(4,3);
INSERT INTO lolo_image_in_report VALUES(5,4);
INSERT INTO lolo_image_in_report VALUES(6,5);
INSERT INTO lolo_image_in_report VALUES(7,6);
INSERT INTO lolo_image_in_report VALUES(8,7);
INSERT INTO lolo_image_in_report VALUES(9,8);
INSERT INTO lolo_image_in_report VALUES(17,9);
INSERT INTO lolo_image_in_report VALUES(11,11);
INSERT INTO lolo_image_in_report VALUES(12,12);
INSERT INTO lolo_image_in_report VALUES(13,13);
