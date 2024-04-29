import React from 'react'
import "./featured.css"

function Featured() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUQEhIWFhUVFRUVFRUVFRUVFhUVFRYXFhUVFRUYHSggGBolHRUVITEhJSkrLi4uGB8zODMsNygtLisBCgoKDg0OGhAQGislHR8tLSsrLS0rLSstLS0tKysrLS0tLS0rKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAJ4BPwMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAEAgMFBgABBwj/xABJEAACAQIDBAYHBAcGAwkAAAABAhEAAwQSIQUxQVEGEyJhcfAUMoGRocHRQlKx4QcVI2Ki0vEWU3KCkrIzQ+I0NVVlg5OUs8L/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAqEQACAgICAQIFBAMAAAAAAAAAAQIRAxIhMRNBUQQiYaHwFDLR4UKBsf/aAAwDAQACEQMRAD8At7JTTJRrJTbJXfZx0BMlNlKNa3TbW6qxUBFKQUowpSGSnYqAylIKUWUpBSnYgUrSCtElKQUpgDFaSVogrSStMQOVpJWnytJK0AMEUkinytJK0wGCK0RT2WklaAGiKSRTxFJigBqKyKdZeFJikA3FainIrCKBjcVkUuK1FACYrUUuKyKAERW4pUVkUAJisilRWRQAmKyKVFbigBEVkUuKyKAERWRSorIoATFZFKisoA6M1ummt0e1ummt1yWbUAtbptrdHtbpprdVYqAWt021ujmt021uqsVAJSkFKNZKba3VWTQEyU2yUa1um2SmmKgMpSCtFslNlKqxApWkFaKKUgrTEDFaQVogrSStMAcrSCtOX7ioMzEAczpUQ+MuXiVsCF43G+OXme74ipc0hqLYVisWlv1m9nH3UD19+4ewotr95xqfBf6eNGYXZiJ2vWb7zak+HKistLl9lWl0NKkAD4863FORWFasgay1qKcisigBqKyKcitRQA3FZFORWRQA3FZFORWRQMbisilxWRQAiKyKXFZFACIrIpcVqKQCYrIpUVkUAIisilxWqAOrG3TZt0aUpBSuCzqoBa3TbW6Pa3TbW6rYVADW6ba3R7W6ba3VKQqAGt001upBrdNNbqlImgBrdNtbo9rdNNbqkyaAGt02bdHtbpprdUmKgFrdNslE4m6qesfJ3eHtoU9Y+4ZF5sO0f8u8e2I76ewtRm8yrvMVHbQxuRcx7A4T6x8F4e2ido37eGXOdXO6TLHhPcPDfUNs3ANiW9Iv+pPYXnG4kfd/Hw3zKT6RUYrtjGEwD4k9bckWz6ontP4ngvkRoTPJZCiAAAOA0A8O6izb/Mc6SV/L6GqikiZSbBivn50kr5+dEFfPLu8/SklfPLu8KuyQcr588KyKdK+fka1l8+eNFgNRWstPRSctOxDWWtRTuWtZaLAaisinMtZloAbisil5azLRYDcVkU5Fay0WMRFZFLisigBuKyKXFYRSGIitRS4rUUWAiKyKWa1SsKOxlaSUp+K1FebZ20DlKQyUVFJK09hUBtbptrdHFKQbdPYWoA1um2t0e1um2t1WwtSPa3TTW6exWLRBMg6xMgKDugsdJn7Ilu40EUvXdwyLzYEE+CaMeOrFP8BqlInUaxV9EmTu0O7QncCToCeAJ14UGRdubhkXmQZPguje/KR31LWNmokGJYaBmiRO/KBAQdygCnGt1WwqIe1gFTXe33m1Ou+OCzxgCaF2vjVsIXb/ACjmfpUtjrq2ka45hVEn5Ad53Vze/cu7QxIQGAZ7wiDee/5k+57V0JRvsXszBPjbpvXp6oH2M3BR3Dj7uNW/qu7XlwI7qJwmCW2gtosBRGXmOc8T38ePcopp3fFfPnSnF0KXICU934Uhrfd4j5ijmt+/4GmmT3fFT9PO6r2IoDKeeY+tNlPPyNGOn5j5jz+bbJ55jn4+fB7BQKU8/LxpBXz8/Giivnn+fnwQV+v5inYqBwvnzwrCtOlfPj8jWAU9goZK0nLT5WkkU7FQzlrWWniKSRRYUNxWopwitRRYUNxWRSyK1FFjoRFailxWjRYUIrVKrVKwoTWjSqSaLHRo1qtmtGiwo7TWUmaya8fdHfRusitTSXuhQSxAA1JJgAcyTup7oKFRSSKBxO1VUSNAdAzyAx5IsZrh5BRB50KLN69v7K87gH8GHBheYNwswP2aPIGoRidpIokEEEwGJyoTwCtqXJ10QMZoQ2r17eMqc3UiR3WZnd/eHf8AYqRw+CRDn1Z4g3HOZ44gH7I/dWB3UTT8gakfh9nIhzas4EZ31YDiF4IP3VAHdTxSiCKQRT8iFoDNbpprdFsK530z6Whg2GwxlTpcuDjzVDy5njwq4zsTgQ/TfbvXP1VszbQ7x9ttxbvHAe08asnRPYXo9iWEvchrmnaWNyRv7M6jfJPdFe6CbF66/wBa/q2iCJEhrm9V10MesRv3V0spryb4MPn+I8N9eRCcK4I57XPdwYcPHz+bbWjPI/A+fh31IlN8DX7Snj3j67j+DJQRzXlxU/j8xwqlkIcCNa13acRxHh58KQ1v8jwYcj5+YqRa1u18G4GdwMeeUUDi8RbtnK7qpP2WYA85WfA/1mqUydAZk93+0/TzupDW/wAx8x5/M4LMEGZ9VuBHAGkNZ9gH8P8A0+d26txaABt/XTj3jz+bZT66f7h8/Mn3LUSTpGp/d/eB5VC3ukGFVwhuak+soLID/iA4901W4tQgp58fkaQU88dPn+Ipd3H2FEm9aA77iRrw37j57nLRDgMpDA7iCCDHIjeRRuGgxlpJSiLkLvIHiQBr48D8DQ2LxDiOqstemfUIhSIiffw5Gh5UuwWNvo0VrRSoDGJjLaq14XEDMEBLOJYzAhEPI6Vn6rxD8CZ5pfY/gtR+oRXhZORSYqoXFv4K+S6gs6aqUZBlJEEQWM9jlU9Z2/hm/wCaAf3gy/EiK0jlTRLxtEhFJNZZvo4lHVh+6wb8KxqvYmjRpJrTGkM1FhQomkzSS1ILU7EOE0kmmy1JL0WA4WpJamy9JL0AdsLULj9oW7K57rhR38TyA4mud7U6fX3kWE6sfeMM/wBB7j41U8Xibt1i9x2YniSSfCTrHdXjw+FnL93B3OcUdMx/T3DIpKsZHAqS09yAifay+JqDwu2MdtAs2GC2raGDeukOynfCLGVWg8FnUS1UY2al9gbevYQFUAa2xzMh01ylZDDdw5+qK1yfCuMG8fMvr+f9JjkTfPR0vo9sG3hybrO96+whr1wktG/Ksk5V7p9tTnXVTsN0stC0jXCgYqDkW4HjkCYEH89TUNtzbt+8w9FxVuwAo9e4mp1mRkbXdHa56Hh5Mf1U5U4/79PsdOsEuzpPXUnrxz7vhP4Vx65hsVclbu1LeUFWH7RnIidx0PAceVHWc6+vtW42X7rqoOnHsEnTSZnSunwZvf7P+CE4/lHVOsqL2t0isYfR3l/7tO0/tA9X2xVMxG3M4yvijlGkKxWQNO0VWWnvND4fFYVQIy8OJ4/5aaxZF6NlrX1aN7e6Q4jFfs/+FaOnVg6t3O3H/CNPGolNlMdACSdAANSTuAoz0u4LjWxiw2Eclupdc2VjHqsVzLDaiPCN5qbTa2HBBUqSpB16zXTXcuh1+FbaZeOPsClj5JfCYjD4DDraYk7i0IcxuOQJCxLCSAOIAFZ/arDEGetKrBY9TdlJ1XMQPzqmdLLNjFuoQlUJAdlBDpKlS4EQYmY1Jg8daXdtYdnuhwjZ7a20vdUrFNCHPbGaCGIKgCQTqZrZYXXKZg5r6Fh2ptm5eVPRnNsM4AuvbJbeZGSCIgDke4VT9mdM8VbuP1lzr8siGRbZADASSqjMN+usT75TYgSzkRrtsqpbtKhX1T2OwtoMoMnQlvZxr9jYBZ7ztdVGMtbaDludowGCyQYPrEeOtOGOfPANx45L/a2x11lXPV21uWwxUvMknXXMgA8G8aqPTF8OVRs9p4uBbi2jbFxluKwUZhdYkjK2nHXjUhayBFhgrBh2QGSAAwDDIhEyxMTUPt/ZIupbVLmaWtFxu6vq0CyCVUvx0LNoIXLSjDJt0wetdhVno7iLltGwpuqhJAJxNxVIHAL1o3ZTw8KP2hsu86KDeCMMsXLmLJ7JbQFRpMCCfbStntZtqFc2SysTm9HLlhBg52AJ3jQgfV5dpWwAQxmLawtm2CMpkkhhEa754a1MvLfT+41p7oExOAW6QtzF2CFOUKcS90LuYNAAnQZeG81F9JcBbs2etS9bkXQIAuhYJC6sT2hABC/vcasV3asAst6+WU5gB6MoJjLAIQk8DuGnCRUFtfr74Ftzntwbptl07R0bJngZH0jdv+KjHK3ymD19yJ2gA+E6zKsll9Uzy+G+pPoNsq7fXObjNZt3MhsGCjdkOBJIyasTpOtIxOAY4fqQJJAaSUB7BMq2ujaac+A3TIdED6PYuJdBDMzOpUCYCqsuuca9k6d07t+8tteEQqssV3Za2le6MNhxlUsAQDrbBPLu1HPlU1s3aguWLV52QG5atsRm0l1UwJ14+JFUkBSRN/FEM6mCqhO0TAY5zCawe73VWMFhbighluZ1YBXGYFQjZWXdr2ZmdQFHCueWNtGqZ1jb+HW8bcuoCFbq7zLKTlaQRun40xmE63107jpO/wC13CqjsPalwIWuh3L3GjOLcrCKRJjSdSOcGpXD9JdSpsExyK7u7me6pSmvz+htRZA9MXdMQOoYODbSS2pnM+g7WlVl7NyINhiN0qWA/iU/jVi6W3VxFxbl3D3ATbAyh1BUB3AJBQzO/fUYypbtOLdu4FcqHANpj2e0JYRHsiuqM2kkZPGuWEbMu3ltgBGRO0QYETIzAHidRQt3aV9HJzyoYlkMSVB1gxI3HWird1QLa5nCkEAOezq77jmMmF38hW1QBGndcFwKYMTJb26RoedWpe4njtElhsXauI9xXEIASCQGgmNFmTqRuoBsYjuuV4CZnfOGSRlK9nMIYy0wOAPKosbPuZmCuhXIvZNnf27ZMFeOseJrVnIt1rLKhJRgD+07LgrqCDvAnQiKrd88mfjXHBKHalqJJK9zKZ9wmsTaFltBdQnlmAPuOtQzW/VGbsyVaXyDMCADqd414TrHGos3Cz9ggkHQPqV8GjQ92m46GtFkJlha7LmaQd/v+VLtYywwgXVkAZs5VDJndJ1Gm/vpu9irSgMbi5dRIYHXQ8J4A+6r3Rk4NBeAW3mPW5oytGWJkAkb+E0K3dTK7RsE6XVOjc+AnlyDe40+bqZA+dcrAMpJiQYgj3ikmruxtOqorZ25d+5b9zfzUk7du/3dv3N/NXSB0DwPO5/r/wCmnP7EYAD1WPi7/KubzHRocy/Xd77lv/S381NYnbF5hAS2Bx0cT4id1dh2V0bwVuR6PbadZuL1h9heY9lSq7Lwo9XD2R4WkHypvIw1RwZtqXo0FoHmUfXw7enndTrbVv6ZTbH/AKZM+AzV3d8JbAJRUUwYhUGseFVH9FyO+HuC6XMX2jOxJjInEmY0oU2Gpz0Y3FsRlBjusyT7Yge6k38Xi0Ge47Io52LagngMzJrXcr2zwd2nv+tUj9JydXhZyhpdQQe1rlYTpqDrp4cqe7FRzJdu4hjpd8OxaA9+WiLeMxDb8Uo/9v4QtN7Y6M4rDA3Cisg1zISRHAkHUfhUB+tmX7Io2fuOkWoXrxicbHhkFOLffd6cxPc6iKqR2+33ay3t192QHxo2YUiy4y+4BjGXT3C43yNJGDxfVrebEkI65gWv392YrJCgxqDROwOjmIxOS5dy27TANlGtxlO6OCg85nXdVkwGHFzbAw7AdUmHBt24GRCCpUhe460rdWHrRSHtvxx6c/8AtF/XwOXvFMtbcb8cn/yLwn3gV3ba3RaxdtWptLJuQxUKDGsE93dVV6PbFy3MTaOGYjJcykqhGZJy5dd54eNTtKrRSSumc0W2YB9OHEQbt7QjhyOkbudOHD/+YadzXj/+vCutXv0cYZrebqtYBiBM7qhOm3Q2wmFsFMKucuVdrdtQ2m4sQRv5maJSkmkvUIpNMoIw/LaH/wB48J1rdvCjjtEjTd+2PsnNE1ddmfovsXbS3IIJmQTB901q/wDoosgTJ3rpK7jvobaEqZTBhDH/AHiRy1u93HPSWwzzptAnv6y7/PV025+i3D2wpVgsqCZYT8TFBbC/R1hb1/qrmIG4kBCsmOUVnLKox2fRah82pXrOEYgztUrAJEm6ZIjsgh5nX4Vu1hrn/inGJJve0xJ3a+6mNvbDwli/ctrcaFZgPVJ5bxTuzeiVi7aF70sqJiCKuMrSd9kyjToeRMQQSNpp2d+YsNZIgEjXdwobEY7G2xIx9lu5XBPHmkcOfGhtobDs2wSMQWidPJqCvXgpMZTv3z399VtL3FS9ibTpZjR/zv4bf8tFDpxix61zN4ga/wCmKqL380dkeya1qfsn407Yi52+n2InTq55lW/EONak7HSprrq9y6V0gracqup3tmc61z1MMx3KR7/pROH2W7GAyCeZP8tIpN9HSLnSHDMQC2IcqZEOjdpSTIzNoTPKif15hry9WTfWAQCRaU+tvXKwJ+m/SqQ/Q7FomfNaiNP2qqfcwBoEbLxO7smP3lI/Gpi4y5VFPePDLu1zCWVa7bxV4MBID65jAhYzneRwHjRey8BZv57tvEtacZSOsMsD2tcwcBgCsk6RGm+qKvRfGP2wgIA0h0P8Jahn2Zi1JGUzuPqfWjh9A9kuejo2PwOROrGLFwB89yAVUvBh4JiZAkgEEd9VjaFy3aF1gTkLQVVu1GoGrayJ4VWLlu+BBDCDyX4kb6HOFusPVY+z6VSVBObl+4uT9LkurlhBkUa9XbVtOTRMwB40bsPCnFKbyugXN1ZDAlyIVmgorcGiZnWqCuyr3923+lvpUjgrl60gTKQJJOZLnHnA7qbTM0y9bSxqqUtqCfVRewACuo7TAKWbXeQTJbU8Wb2RRqSQnDI+oOgyqX7p3bjVIGKuyT1Z1HAOBHLUUzdxh0zW/YSe4cR3VPJR61tnMAwggiQRBBHAg0m5eUDd8DVBwFy/sy4cLJfDuS+Hc6lTJL2T7NR4NUn+tWZZIju493jWPTKLHZxaA6gU62Nt1VfTWmADu8aU9543eTVbImmWpcZaNA7OFm2pVREsW3VB28QYmN3iKGbGkTroO+mpoHEtbYtOFRHSTDJibPVssjMDw3j+tRtrEM25tNPj3cDTO2bzLaLFzMeYNNTQqBelN60bLqCNLLg9kzohHKuA37gJq67Y2weruDOSWUr/AFqkKk8KcQYgOOVOJeE7qzqO6km3FUI710UxNv0fDLmXMbNqAxiTkE1IWNjuu1fS1Ct+xghd/ARmnu3VxttsZbGFZVGa2IYQNcpjX2RXXtmdKsO/VXZdCyDRCABp30k3XI2uS5Y/bJtp2sNdgHeDaj+JwapmF6Y2UxDm4jICDGds3wBYD2VrpP0rU2TkvOTMQcvv0FcZxe2WN5pnfw0/ClGXY3Gmj0Ld6XYM2pBtFonKxg/7aov6QOl1v0VGt2kBNwjs3ATprJAAMa76o1naIdILE8dT9aE23ez21A1g86TbbQ41TLbsfpNdewIkakSG+VN4/al7JLXuWkKTru3a1WdkrCQdKkPRwRG/dTcW2SmkG7ex14JbLXN6gghnBjwmoGzt69YuLfVnYoZEu2/xM1YMZgMyoCNwgUHc2QrCMtKOG40ypZKlaKnjb1287XCPXYtG/eZ30fs7C3OqiD61WOxsBRw+JqawWyAF0599bLFxRk527KL+p7jTKmnrPRpz9j3iui4bZ8b4qzYDY6tlGYCYp6pBdnJV6OMhE2wZqcwHR6dOrHuq/wDSDZC2nVQ095FOYTZ3JhSQM5Ntiy+HvZcu6DoYrpnR+9ZbDNtZhe6yzba0y52KwoHqLugyDpxk75qqdLLGW+VaD376vvRA222ZdBtjKBcDKBAbsgmfGuf4rFtFHRgl2hrpbjbZwdlwuYXgGSNNInX31StnYQf8QrA38PCrtttJwNiFAQRkH3REQPZVdw+ixl0Oh7xM1fw2FQhSHkncufYvmF2bbbCZsoAKzMfKuaYjApLkLOu/d8K6tsqwhwWQA5SjTz1kn41QnVQHUDQ8Y1FaYsfZnkyN1ZVtqbJT0fOB7YqG2Vs0E/kav+MwwOCCSZDEzzHKobZ2GCnX8KvHCjX47IpOFL/FCLeyh5mirOyARBj21NWwnOn7GUHh7a6HBUecpcj+x+i/ZzAr7PzqvdI9jdogwfFbfyFdawFodUCAN3CqHtmXuNM7+OtcWLEnNs7sub5KNdENsJjLIsXR2h6mb1lZDqp5OhB8QPeVtROq7LiCRow3MO76VyPZ/SEpiBiD2FxMXTGirekrcddTANxWPcGHIT2zZ+It4/DlbgEjRoADK3C4vIHl4jWspQsWxXMPjyp0j2cq3+uANDFV7a+Gv4O91dztKZKPuDqPnzFBvi8xmedZ6cjTLh+sydABQF3GElgRofx3UNs1ZEmn1sSdauOMTkNB83Hz8qE2wH6ogsT8al7WEpO08HKVrGBm5HKLmBLEinbGyRGoj2VbLezNd1EJs/urdQM3Ipt3Zcbo9tAX8HzWr7fwg5VE4rCilKJSZXLWysyxrvqxbN2ewVBJ0p7A2AN9WHB2BprQoWJyIK/sdmUgzv5/WoDEdGibnH8fxrp64cRQjYUTNNYkDmUTD9GGj+oov+ypK793cNfhV2S2BT6MIOlV40TuyoYPo4YgipHD9FgeG7xqw2ry7qIXEgefrVqCI3ZHWtgAgfWif7PR5mj1xy91JfaHn+tNRQnJsjLuystE4bAiOfuNO3ccp30kYwVVCseTBpy91Tmz8AmhDEe7z8Krwxoou3tNRWcosuMuQvpLY7QMz301g2A1PwqM2ntLMd9CHGab6iMS5SInpMma+SKuHRURs68kgFs0T3iN3sqlYu9meZqxbNx3V2cnOpyRtJGmFq3ZL7SvD0Kzb4rE+wVX7V0RH1+lP47GA2wsVF221EVpjVInJLng6fscRgv8jcY51R4HaqxYLHhcNB3x5mqXiMT2jw1pY+2GVUkTFwD0WOOb4VE2LIrLmN/ZgSPD86Hs4mtI0LO26+iJYWhzrYt99B+k93xpS4itDmOlbAM4ca8DVF2mD1jRzNW7o3iAMPB031TNoXR1ja8TXPiXzs6ct6o50Oj8HD4O86pdznLKz+yuqhYxqM6sGtwftjfVo2FtM4K92Cz2AFAZgYdGLJoTqVJQieeXms76bYNbuA9NP/EsuRB3AWroDBGHaGYhGOu/MdJqH6M7ft4m3esi1lVIdQQrBM5/aooaQVOWQDxVDvURyv3N0q4Or7Sw1vG2ChUujgPbZRDW5GjSdxHuI51zZei99HIN6wwBgFbhM+MLlU9xOlDdKOm7W8LZw6KxZ0zsWYFSSSFZhHaaFGh0Fc+xOOvXe3cusZMeB36Twq0k+zNto7Ns/CXLcC4sTMQQVMRuZSQeHHlUlbtg8K4RY2piMMQbd1gDDRJAOuk99de6I7bOKsrdKwZysOBYAGR3EEVUUS2WK1YpeLw4KxTicKfxI0HfWqRDZXlwYpbYPz9DUpbtgmDx0oLEnJK7xNaEETi8LHn51BYywKtN7UdxqEx1sGoki4kfhbFSdm1GtR1loMVKYe7NJAx7rmHGmfTDxp54oG+lUSE+m1r0wVGXDTFy4aLCiX9LHMVr0wc6gWvGkHEGjYKJ04zvpp8b31CHFGkHEUbBRNttA860Nod9QZvmk9eaLCiwen99K9P76rwxBpQvmiwonbmMmm/S6iGvGm+uNFhRLG9RCYzSJqC640pL5osCefFzWW8RrUKLxpQvGnYFrO1Tkyzpu8mo43RUUt81sXjQgbbJR2BFNi2KCF80sXzTEw3ORuPvp2xeM8DUeL1O2r8GmBdcBtIrbjQd2+oDG4gFiaY9LMRQT3ZNRFUy5ytUf//Z" alt="" />
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h2>12345 Dublin</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKs5lOAkbWLYWDUh9VbUdOps46OvEQDfKo6GGbmzoM-w&s" alt="" />
            <div className="featuredTitles">
                <h1>Austin</h1>
                <h2>12345 Dublin</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXtvg17T1KK5Fz_gCfh-L-zBifnBv1BmUzcVI7k3gEAg&s" alt="" />
            <div className="featuredTitles">
                <h1>Reno</h1>
                <h2>12345 Dublin</h2>
            </div>
        </div>
     
    </div>
  )
}

export default Featured