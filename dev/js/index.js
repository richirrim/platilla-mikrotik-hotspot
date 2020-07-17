/*
End-User License Agreement (EULA) of inouti-v1

This End-User License Agreement ("EULA") is a legal agreement between you and inouti-v1.

This EULA agreement governs your acquisition and use of our inouti-v1 software ("Software") directly
from inouti-v1 or indirectly through a inouti-v1 authorized reseller or distributor (a "Reseller").

Please read this EULA agreement carefully before completing the installation process and using the
inouti-v1 software. It provides a license to use the inouti-v1 software and contains warranty information
and liability disclaimers.

If you register for a free trial of the inouti-v1 software, this EULA agreement will also govern that trial.
By clicking "accept" or installing and/or using the inouti-v1 software, you are confirming your
acceptance of the Software and agreeing to become bound by the terms of this EULA agreement.

If you are entering into this EULA agreement on behalf of a company or other legal entity, you
represent that you have the authority to bind such entity and its affiliates to these terms and
conditions. If you do not have such authority or if you do not agree with the terms and conditions of
this EULA agreement, do not install or use the Software, and you must not accept this EULA
agreement.

This EULA agreement shall apply only to the Software supplied by inouti-v1 herewith regardless of
whether other software is referred to or described herein. The terms also apply to any inouti-v1
updates, supplements, Internet-based services, and support services for the Software, unless other
terms accompany those items on delivery. If so, those terms apply. This EULA was created by App
EULA Template Generator for inouti-v1.

License Grant

inouti-v1 hereby grants you a personal, non-transferable, non-exclusive licence to use the inouti-v1
software on your devices in accordance with the terms of this EULA agreement.

You are permitted to load the inouti-v1 software (for example a PC, laptop, mobile or tablet) under your
control. You are responsible for ensuring your device meets the minimum requirements of the inouti-v1
software.

You are not permitted to:

- That all or part of the Software is combined or incorporated into any other software, nor does it
decompile, disassemble or reverse engineer the Software or attempt to do such things.
- Reproduce, copy, distribute, resell or otherwise use the Software for any commercial purpose.
- Allow any third party to use the Software on behalf of or for the benefit of any third party
- Use the Software in any way which breaches any applicable local, national or international law
- Use the Software for any purpose that inouti-v1 considers is a breach of this EULA agreement

You are permitted to:

- Edit, modify y adapt for personal use.

Intellectual Property and Ownership

inouti-v1 shall at all times retain ownership of the Software as originally downloaded by you and all
subsequent downloads of the Software by you. The Software (and the copyright, and other intellectual
property rights of whatever nature in the Software, including any modifications made thereto) are and
shall remain the property of inouti-v1.

inouti-v1 reserves the right to grant licences to use the Software to third parties.

Termination

This EULA agreement is effective from the date you first use the Software and shall continue until
terminated. You may terminate it at any time upon written notice to inouti-v1.

It will also terminate immediately if you fail to comply with any term of this EULA agreement. Upon
such termination, the licenses granted by this EULA agreement will immediately terminate and you
agree to stop all access and use of the Software. The provisions that by their nature continue and
survive will survive any termination of this EULA agreement.

Governing Law

This EULA agreement, and any dispute arising out of or in connection with this EULA agreement, shall
be governed by and construed in accordance with the laws of mx.

*/
import { c, doc } from './helpers/constantes'
import { toggleMenu } from './modules/toggle-menu'
import { glide } from './modules/glide'
import { addClampMultipleElements } from './modules/clamp-text'
import { mediumBP , toggleCards, toggleGlider } from './modules/services-toggles'


glide('js-glide-business')
toggleMenu('js-menu-open', 'js-nav')
toggleMenu('js-menu-close', 'js-nav')
addClampMultipleElements('.card-business__text', '#js-card-business')
toggleGlider(mediumBP)
toggleCards(mediumBP)
mediumBP.addListener(toggleGlider)
mediumBP.addListener(toggleCards)
