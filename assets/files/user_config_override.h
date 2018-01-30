/*
  user_config_override.h - user configuration overrides user_config.h for Sonoff-Tasmota

  Copyright (C) 2018  Theo Arends

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

#ifndef _USER_CONFIG_OVERRIDE_H_
#define _USER_CONFIG_OVERRIDE_H_

/*****************************************************************************************************\
 * ATTENTION: - Changes to most PARAMETER defines will only override flash settings if you change
 *              define CFG_HOLDER.
 *            - Expect compiler warnings when no ifdef/undef/endif sequence is used.
 *            - You still need to update user_config.h for major defines MODULE and USE_MQTT_TLS.
 *            - Changing MODULE defines are not being tested for validity as they are in user_config.h.
 *            - Most parameters can be changed online using commands via MQTT, WebConsole or serial.
 *            - So I see no use in this but anyway, your on your own.
\*****************************************************************************************************/

#define MQTT_USE 0
#define MQTT_MAX_PACKET_SIZE 1000

#ifdef CFG_HOLDER
#undef CFG_HOLDER
#endif
#define CFG_HOLDER             0x20170102

#ifdef STA_SSID1
#undef STA_SSID1
#endif
#define STA_SSID1              "MelbPC-NUE"

#ifdef STA_PASS1
#undef STA_PASS1
#endif
#define STA_PASS1              "peachspeak38" 

#ifdef STA_SSID2
#undef STA_SSID2
#endif
#define STA_SSID2              "MaisonDuSoleil"

#ifdef STA_PASS2
#undef STA_PASS2
#endif
#define STA_PASS2              "6970710911" 

#ifdef WIFI_CONFIG_TOOL
#undef WIFI_CONFIG_TOOL
#endif
#define WIFI_CONFIG_TOOL       WIFI_RETRY



#endif  // _USER_CONFIG_OVERRIDE_H_
