import uniq from 'lodash/uniq'

const sortLength = (a: string, b: string) => {
  const diff = b.length - a.length
  if (!diff) {
    return a.localeCompare(b)
  }
  return diff
}

const noDuplicateSounds = (s: string) => {
  if (!s.trim()) {
    return false
  }

  let i = 0
  while (i < s.length) {
    const a = s[i++]!
    const b = s[i]
    if (!b) {
      return true
    }
    if (a === b) {
      return false
    }
  }
}

const sStart = (prefix = 's') => `${prefix}br
${prefix}bw
${prefix}by
${prefix}d
${prefix}dy
${prefix}dw
${prefix}djr
${prefix}dr
${prefix}fr
${prefix}fy
${prefix}fw
${prefix}gr
${prefix}gw
${prefix}gy
${prefix}c
${prefix}cw
${prefix}cy
${prefix}k
${prefix}kl
${prefix}kr
${prefix}kw
${prefix}ky
${prefix}l
${prefix}lw
${prefix}m
${prefix}my
${prefix}mw
${prefix}mr
${prefix}ml
${prefix}n
${prefix}ny
${prefix}nw
${prefix}nr
${prefix}p
${prefix}pl
${prefix}pr
${prefix}pw
${prefix}t
${prefix}ty
${prefix}tw
${prefix}tr
${prefix}txr
${prefix}tx
${prefix}dj
${prefix}w
${prefix}j
`

export const startConsonants = uniq(
  `bl
bj
bz
bs
br
bw
by
cl
cr
cw
cy
Cl
Cr
Cw
Cy
dj
dl
dr
dw
dy
dz
fl
fr
fw
fy
fs
fv
fm
fn
fc
fC
gl
gr
gw
gy
gz
gs
gj
gC
hr
hl
hw
hy
hm
hn
jr
jl
jm
jn
kl
kr
kw
ky
kx
kc
kC
ks
lw
mr
mw
ml
my
nr
nw
nl
ny
pl
pr
pw
py
pj
px
ps
pz
pc
pC
qr
q:l
qw
qy
tr
ts
tz
tz:w
tz:y
tl
tw
tx
tj
vl
vr
vw
vy
vm
vn
wr
${sStart('s')}
${sStart('z')}
${sStart('x')}
${sStart('j')}
`
    .trim()
    .split(/\n+/)
    .filter(noDuplicateSounds)
    .sort(sortLength),
)

const mEnd = (prefix: string) => `${prefix}bf
${prefix}bF
${prefix}bv
${prefix}bV
${prefix}bz
${prefix}bZ
${prefix}bs
${prefix}bS
${prefix}bx
${prefix}bX
${prefix}bj
${prefix}bJ
${prefix}bc
${prefix}bct
${prefix}bcT
${prefix}bck
${prefix}bcK
${prefix}bC
${prefix}bCd
${prefix}bCk
${prefix}bCK
${prefix}v
${prefix}V
${prefix}f
${prefix}F
${prefix}z
${prefix}Z
${prefix}s
${prefix}S
${prefix}x
${prefix}X
${prefix}j
${prefix}J
${prefix}c
${prefix}ct
${prefix}cT
${prefix}ck
${prefix}cK
${prefix}C
${prefix}Cd
${prefix}CD
${prefix}Ck
${prefix}CK`

const bEnd = (prefix: string) => `${prefix}v
${prefix}f
${prefix}v
${prefix}z
${prefix}s
${prefix}x
${prefix}j
${prefix}V
${prefix}F
${prefix}V
${prefix}Z
${prefix}S
${prefix}X
${prefix}J
${prefix}c
${prefix}ct
${prefix}ck
${prefix}cT
${prefix}cK
${prefix}C
${prefix}Cd
${prefix}Ck
${prefix}CD
${prefix}CK`

const gEnd = (prefix: string) => `${prefix}j
${prefix}x
${prefix}jd
${prefix}jg
${prefix}jk
${prefix}jt
${prefix}xk
${prefix}xt
${prefix}J
${prefix}X
${prefix}JD
${prefix}Jg
${prefix}Jk
${prefix}JK
${prefix}JT
${prefix}Xk
${prefix}XK
${prefix}XT
${prefix}b
${prefix}p
${prefix}d
${prefix}t
${prefix}f
${prefix}v
${prefix}s
${prefix}z
${prefix}d
${prefix}T
${prefix}F
${prefix}V
${prefix}S
${prefix}Z
${prefix}H`

const kEnd = (prefix: string) => `${prefix}j
${prefix}x
${prefix}xk
${prefix}xt
${prefix}J
${prefix}X
${prefix}Xk
${prefix}Xt
${prefix}XK
${prefix}XT
${prefix}xK
${prefix}xT
${prefix}p
${prefix}t
${prefix}f
${prefix}s
${prefix}T
${prefix}F
${prefix}S
${prefix}H`

const fEnd = (prefix: string) => `${prefix}x
${prefix}s
${prefix}sk
${prefix}st
${prefix}k
${prefix}ks
${prefix}kx
${prefix}t
${prefix}ts
${prefix}tx
${prefix}p
${prefix}ps
${prefix}px
${prefix}c
${prefix}cs
${prefix}cx`

const vEnd = (prefix: string) => `${prefix}j
${prefix}z
${prefix}s
${prefix}k
${prefix}ks
${prefix}kx
${prefix}g
${prefix}gz
${prefix}gj
${prefix}t
${prefix}ts
${prefix}tx
${prefix}d
${prefix}ds
${prefix}dz
${prefix}dj
${prefix}p
${prefix}ps
${prefix}b
${prefix}bz
${prefix}c
${prefix}cs
${prefix}cx
${prefix}C
${prefix}Cz
${prefix}Cj`

export const consonants = `b
c
C
d
f
g
h
j
k
l
m
n
p
q
r
s
t
v
w
x
y
z`.split(/\n+/)

export const endConsonants = uniq(
  `y:g
wg
y:k
wk
ts
tz
y:d
wd
y:t
wt
y:b
wb
y:p
wp
y:z
y:s
wz
ws
y:j
y:x
wj
wx
y:C
y:c
wC
wc
${bEnd('b')}
${bEnd('p')}
${bEnd('rb')}
${bEnd('rp')}
${bEnd('lp')}
${bEnd('lb')}
${bEnd('v')}
${bEnd('lv')}
${bEnd('rv')}
${bEnd('f')}
${bEnd('lf')}
${bEnd('rf')}
${bEnd('ln')}
${bEnd('rm')}
${bEnd('lm')}

${mEnd('m')}
${mEnd('rm')}
${mEnd('n')}
${mEnd('rn')}
${mEnd('r')}
${mEnd('l')}
${mEnd('lm')}
${mEnd('ln')}

${gEnd('g')}
${gEnd('rg')}
${gEnd('lg')}
${gEnd('mg')}
${gEnd('ng')}
${gEnd('qg')}

${kEnd('k')}
${kEnd('rk')}
${kEnd('lk')}

${kEnd('mk')}
m:k
${kEnd('nk')}
n:k
${kEnd('qk')}
q:k

${fEnd('f')}
${fEnd('rf')}
${fEnd('lf')}

${vEnd('v')}
${vEnd('rv')}
${vEnd('lv')}

l:kt
l:tx
l:txc
l:txs
l:dj
l:djz
lt
lp
lz
ls
ls:t
ls:p
ls:f
ls:c
lz:v
mf
mf:t
m:H
mj:k
mj:t
rm:j
rm:s
rm:x
rn:j
rn:s
rn:x
mp
mp:f
mpf:t
mp:H
mp:k
mp:s
mp:sk
mp:st
mp:t
ms
ms:k
ms:t
mt
mv
mv:t
mx:k
mx:t
mz
mz:k
mz:t
nd
nd:k
nd:p
nd:t
ng:d
ng:st
n:sk
n:st
nt
nz
nz:d
rm:p
rn:t
sj
sj:d
sn:j
sn:d
nj:d
nj:t
mj:d
mj:t
nx:t
mx:t
sn:t
dj
tx
`
    .trim()
    .split(/\n+/)
    .filter(noDuplicateSounds)
    .sort(sortLength),
)

export const fullConsonants = uniq(
  `
txm
txn
txq
spldjd
spldjt
spltxt
spltxp
`
    .trim()
    .split(/\n+/)
    .filter(noDuplicateSounds)
    .sort(sortLength),
)

export const vowels = uniq(
  `i
e
a
o
u
I
E
A
O
U
i$
e$
a$
o$
u$
o$u
o$i
o$a
ai
au
ei
oi
ou
iu
ui
Ii
Ei
Ee
Eo
Eu
Ai
Ae
Aa
Ao
Au
OU
Oa
Oe
Oi
UE
Ua
ae
ao
oa
ia
io
ua
uo
ea
eo
oe
e$i
Iu
Ui
AI
aI
eI`
    .trim()
    .split(/\n+/)
    .filter(noDuplicateSounds)
    .sort(sortLength),
)
