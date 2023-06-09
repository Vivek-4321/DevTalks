
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.15.0
 * Query Engine version: 8fbc245156db7124f997f4cecdd8d1219e360944
 */
Prisma.prismaVersion = {
  client: "4.15.0",
  engine: "8fbc245156db7124f997f4cecdd8d1219e360944"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  username: 'username',
  password: 'password'
};


exports.Prisma.ModelName = {
  User: 'User'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\vivek\\OneDrive\\Desktop\\prisma\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [
      "deno"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "4.15.0",
  "engineVersion": "8fbc245156db7124f997f4cecdd8d1219e360944",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "dataProxy": true,
  "postinstall": false
}
config.dirname = '/'

const compressedDMMF = 'N4IgJghgLhC2D2YCmAbEAuUSB2BXWAzhgNoC6ANCAsikesaNnEhiAKoFIBOIlYARgDlmGPChSUAZgEtUYOgxBNYLdCGlheIANbTsmtQQDGEFBB6VpBADJWoGSac6WCAJSQBHXNK5IDULlwkFzZsaS9VR1pg9QIASX9AmKt3CDAAeWwUAE8HJxiACwgCABEkR1wUKAA1UyCMAKDKKGyAB1UQOOx7PnKISvtMJRE1fqh4PSNfFW6tcwBzBVIAXxcAcRxuaD886JDWyCg/AEFBqM5VxhGQXE4uZRZKXX1WY1NzLStbAjP8l3cvD4duhGskCKFwvUQUkXAlds5YqkMllcuhzoVimUKlVaigoejmm0OgBlAJ6eafAgbbBbI4GAmxNgHbZgU7wpCXYYqVitYoEADu8C4mieegMIDeZgssW+vz2iM83l8iSajLCEXZsPpfwVaUyOU1ICKpT6A1x+J1LXarFJXHJlOptOBDKsTMOJzlFwoIFadtg5myAGkkKixBIbuqggAxWQoeQkb24SNILrIAAeSCW602XBZ7OW3qtmYTqwlRgKSH9GFAelauCg6X4ACskEYoAAVIl0UC+qxV+hXblqDjcADqFd8XTrPSoSBg1Yl8FwXCMHRHPFLRng2B+ub0UG7VAgacE+BjcjoYcosD0p9g57jl8qKFLMgvJEHHWOghKlIBSudHUrFPcQIH4FBIiA7Bp07doFFAItWHXcduBTaD6y0B4CF5VceTtAgq0oFB4BMKBpG3Vha3rRsWzbWDixcWV83IBCiSQu4UMndCZywnCOl7AiIC0YjSPI7BKO4mjWw7LtKSY6EggLTkHlYdJXD/RUgW1eVgOfMCIMNKiZLgj8QEQ4cOInNDp0w5hsIgXC1AEwiQBE6AxIk6cpLo2TGLsBokiUliuQ6QR0nbDTAWVQyCBAsxwMgnTuPo+CzLYiyxysqcMMoXiHP4/CXLcsiKLUIzvOMhiZX8tF8k5cz2Es1Dsp4uy+LwvshKIkj3NK9RJObaSUrkmrQSCz9KJFBUosAnTYr0hLDOS2SBzS601C6KAYyqbhbJUezHJ9QqutcnqSvEsqBtoyqiD8n5mNY9bOlmbrRL6yUPjuz0ORWYKVLUW5uBU/5NOi2q5ri/TEoRIzhtWhrbXJbajmlPLDuck7io8y6vMGnyTK+h61pJMlsApV7eoust3mlL4avRcaQp5PlBWFSKAO0mH5tAxbwZh5aTPh9KQERsnkd23K2vyjrBOEs7sf63HruGwm+Y5YKEdJ8nTreqmPtpmx6bqlZfomjKuHSYVuAAIWyUdpCgAp3DMc6Wq0LcdwCCB90Pf0TzPWN43QABGa9bwD990AABlfQPUv+9QppSUHZq5yHeZdAXiyFp7iSFBsrdRqX0eOuXddYHB8BV6r7rVxmE8B+4RBBmbObBdODLVyws9ShH88t5Ai/29qnNLinzorvBYGruna4Z02maclmhSTtwU7blwO+h5Ie9MvuuALwe9szEejs6svKcnqvfJr76lIXhPkKsiEIjd685yEoYCCXFc1zuEBNzbl3N7bovtjx3gfEHUOVBw73jjhgYOsdI6KAThodmWkYpbyWjBFaigGqbQvhPQwJgpQjTnsbZS1xG7A2mhzTBC1O6ZxwYLPBwtRbayxu9Ehn1b75hNpQocjVuADxtnbB2BRjjzHmL4eYlM34gA9sAn2C4/YQPgSHMO2A1GRxjlIdRKDrhoJbnQrusQsGmNhrgx6JJ+6F2PgdAq59x4K0rtPG+s874PyoXcGhydW70J5owqCzDs6sNzrYo+kth7S1Hk4nWl81CuJnobch0R67XF5AQAUK90FgxdNzeKQSkohN7mwiJEsQoOJlkVeWfUknuJSZ4gRHQAD6W4kwzj8SY/J5imH1jhmEv+3AADCS5ugiK4LbSR0ikCyKOPItGjjZbOL6uVPGN0yFNL+tcFpEAABu2sukYIsQUqG2D+lWOJuxbgxwDkTKmVImR2wFnFyWTU8uONqLrOSfJeezTWAtL9rk1O7cGHb27iUvewt1wAFljz3OyNMp58zuL2NPhjQhCs1nKwab8ih2zBGAr0MCjeZiwXnI2TnIZXAYV6ARUi2ZzzUVRJPjEs+yz4lEMVl8nFBNeF1y8YSgg+ASUBMKeC7llLBnXK4MSfA9LHmMpRTZFlVTYkcs4VTbFQ1cVGzSfwgl1LiTcK4JxJA9tHYMrmZmeRKh5xfx/oddcADKCKK9sooYqiI6PlEM+TR2ifXoDDEgwNBjBHfl/MY45PTyUWN3lSmVxqaZmotRIxV1r4jMsqeisenKsVXR1XyjxRMGrriTVKFN4irXbEzSq7NbKMUrK1QW/GVVi0KR+v8tQalRUnN6cEi5LDrGJpNZWy16aa0vOiSXOJmrPI8sLW2xpAVFKCtCuFXtMbAkSssUOq55ty3mDHWmmZGap2spnRq2pzalaLtuvyhmGtoV3EPaaqyqbq1HFrTletl73kJMlRVH5o1AprsmpuoCpyM4DqlcOja3QP0Tq/eLIeF63mY2vfOhs3zdWpIuE+p6BCm2vBNZsvhXabg+ObrQ6NkH+3FMHaEuDIstaIdPTWlDaKG25rnZ87DvKl14rSQRkmdoyaYq4TTMjAqKOZOyWzKNeS6Oxr6bB/dLGxPzDY8izMnHVU5tnZhvjQHcN3xEzaLWEm9akdVn8sD5thm+CZXWt1e5QEqPAd6oOV4YFaK80+cQIag5ho6NQ6jRywagk3ipmDAzmPsKsyRqTtn8Vmx9MvBTNHIswjJduilcX1MJeI8Q5LD6KH2aEVwUI5ZWzaD8I5pAzmf2uZAQeDz/s4GRx8zePznXA3Br0cgtLRissgui3luNkKE3wZnLx6mpCUv6oo2F7kingRRdy+K/LlzNaacSyVhbZWluGuZlk1mq9/zHI27pCbqmCu7ftMV+bPD212Yo+uN0TWZwtY9aAL1fXvN+t8wGwHgXBuhrSytx4o3SU3a25NxjpTc6Wae/raTj74ta0gZ9o46R2i5nOt+1q070P7cAzhoty6ZMnaXmdnJa3YdQaKfzKb0q1BFbzZJw7r26rmfZ1jwOOOkB49pGJInXG/0YY+eTgT96edLYqx97ANWjB1bAEL+RP33Oes8wDgL4Yesg/10F+OhiLvrzFWchHan8EvU59Z0r8v8PMc2tj5kuP8eU3F/p7jhnpfatbXLqnfyaeUaBuFte/i+0xYYzbthKP7dJe58H3nmPNNu/dCLgnYvz1qvZf+rlAeNmLa9LJjL5uo9bvh3dnb8e9uo5s0d53hWBdyCF1nr3ueDNXv9y24vTfO2K7uA17YcLsDZE10A912u/u68gfr/1/nfVg5AG+CHi9E4QYhjHlniOoWEbt3NtHJfO2h6h7267TOd3xrZxpx7ieDsvZT8dtLcnzsX5y3Dq3Ne90PfEw3x3Z/UvIfbgIXMfbIGFesORLNLXNrHXDrefZfA3WBRAoNZ8E3UyBuKjVbGHS3aDWPe7Ove/I/RvJ3dWNPJGQXd3YXT3QnLvX3HvADIvYDPDU/V/cvLfNOHfHeVnCg//B/Z7A2ITZvP/eYDPbYDvOgrNRZapKXJgvvFgppEAqrZXCsVXPwMAiAcfSfT2NzOA2fBA9RbrFAow9A8HYLYbCvbpZTW7WLWvA/WbIzQQ9HVPdTV3KgzPWgnPaQ15WQsnZg0zcjM/bA6HCLMbTbb/Ow3/Ig/gkgwA4Q8glvdPDwiQrwoBegyXfwhQwI6ndgunTLMIxnejXfOPZHevAQ4/AfeqGIsQlIj3UXdInwknPwp7AIynBI++CjdwnaaUWAsBQwrrIHQ3JfNAlfNfCwjfRUJwTg0FWwgg+wjoIjCo0goAtgjfYlBnPA5nHgvfabZ6Rw6XSo9tMaPnfYsnI41Y9JQRbAeAKALoGY8bavKIpjNww/Jwi4+SE4l3N4w4lYjoirKoB4iI/Akowghw84v4vVUvUPHaIEr/EEnY0oxYn4gDD4qEtYhOeYTpSPaw7fOY0EhY1gJYuI5Pf4ijLE0InE2jPEp4+Y6I8EgA0k9Eq4joG47Ey7JTGkyIukl423A41EyE1g6op6QQTMOkbolGCXUnVo7I9o5kg1NLdhPTBRKfPQ/oo3JAxfPXJAjA1aBOKY2gOEq/bbek0TYg94wUrZYbcSTY6PfExEsEs02Ii0+IkDRSU4jnEkp/Mk0PNk+420qvbkgk00izcor0oQt0xI0QiE10oUgE9ki3O02k4M3kmomMpkuMijWEgMmw5Mh0wk/nMMl0jMq0jfLEo04o/MkMws80342M0szEo4Cs7giFXY2/T04s70+UijD2GAPQIPDk8I+E7Y1spE0M2sgU+soItLH4cwA8VNZs+00cx08c50usks6cyY/QAgBcnMrkhE5cgsu/Ncycjc3IjfagSkwcoolsyVFctQAARSCC4AgMQGhxkPVQLxcSnkUM3ITjZMXLzMPOrOPI4U7IjKFNONFJ+D8CVOkB6KlJaIELaME27OUNGQ6QVXY2VWa1VNa3VJGOgWGO1JDl1JC3Az3K4KXLvKPLzgPgmUQs/LkK5XqTlMzOCPDxwMKK2Ov14MK3KVQzz0bQENYtQvYryPkysOpKoqApopArosPgqQ/Pz2Yu/OvjYqUPezuFuXmCwp0x0KURnyPAGMDSIpMMjkQXMNN0ERG24qTKDKrNTPCXorsR90yKe1EqDzJOULhTTD0qVWslwt0Pwvaw1I0WB0IrIssMAocuAqcpsRcsiV/WlJEp/JyJD0hxCJioPLkviptAEsYpUrJ08pcJfw3zf3p1wPspyt3TyvZwKrcpSrmxKpP06ND1hTpULgeWwsCu+zwt+2MrCrMt61QMstX30WisotmNktqqRwSsUsEu7y/LqTSo0r/O8U4qvMTMDJqpv3iwauSqQuatWrEobIyQ4KmseNityrmvysSqUt8KYuKpOq8rQq0u4DlVgH8utQMun30MGsIq1NGqivWKks5Jkuutmv33moYsaqOqcJaqqIVI302m0wCoIGVL6NCpGOMJGtMLGImsmK8GmMuuBJHJuuhqJJRK5TRPEvWJtKqp2vJqhr2OJPAuky+NeP5JpstPWuuNuP9MZtzMhr2q5vTK7Nrk5r5PFogrOsEUBNJuHN4rbO+O5oVlprlo6GzKFv3OZtFulsZIls1tYHLMVuNOt3vLOMNtlr5o6ApOyr1r4oNuWKnPPP/NuIduVrHJmxltKpEOFmgvFIQyrSQ103gslLhqeplNvUDz9oxJ2XaTtzsqZq9stsDr8AlIeuaKjuQtlNOttoBX2UOSpPBumpFqdoDrFL8CjGImgGVOUuErmxQterpoThaWFVgE9pNLqpAHTrAEzsWoYOWpvQXVjtaoqyJQZuTuFt2orpFKrv7u6HrseqKujtHv7zIJZIBSBTNsrLiturUD7oHsKsbqcObrjrasVNYxDp6oxvDoqSxvgLCtxufrMPGqGyJtwBJp1ohtnpVqSInJ5tdoyvpq7ottooT3DI5sCg9MgfZvHooz9KnpLqHPNp/x7o7PXKNpXSjLTOtovvjLAfQYPtAt9oQZhKbN3tvJZvbLgawZtrduuFNp/rLr/u9tIfwfIbS3tqoeopob4LAvoYIZ7O3D7J3CIeeJIcwdPOwcYcEVnIPh3PEQkZ5KkboZkYYZAf1O3N3JYaurYctukaAbPK0euEvJUZTJIafO4FfOQBPp4wRpeuEd9I9t4Zmv1rwZdpMdcIaj7vYTRozWXuztXtzpjo3suInsToTMrxnsdv/t8YXuPsjpCabrzpbuNrUEnosccpIb8YFwQuSdPt7zCd/LkdaR3r0bJtTqPLyeSIKcOpztSZKfSvKwozgrb2oMkO8Jc36qMv+1GqBvUTGvGOso6E4GidxN/rifYaMfVt5pkwq3cI6c8IaJ3F+rVOxpIuGqGpBoTnGeyf3spp9s4aRoo0mGmBwAmektYemctrZqEa4Y32QCmErEuYOYptZuprmeAdSwvIGGkFaANDcfLvieFnuY0ecbSzAGkD2Q0C2pid1uqZAvBeMdkbe1DyPqXvvt6N6f+v6fxuQLxsGIJo/v1OJsNOBYMaPJRe+e8bKtQWQevJ4u7pIZpa51kalrBa+fZc0d+fdruMZe2tiaRZ7rZYdzPM5YZK8bRb5euAVsqaVpZaOatuld5fpblcoYVbQckeVbFaTxlfVcEWYensRaVc+bVp5chbLM1ZNamZFdZe5fFYNehLSwAspduepcdf1bVf9vnpgsXq2mxfsb93kOabWoWYo1qcoPqcfoMNfvEEGeJZfCsswOuANIHKFdNfAfkvUdRZ9fjpssFYRbtbNdoaLIef5UladMEYhcef5cFttZufteVdmctdVirdXJrbzatYTnlcbf0Y9ZzfLdrdOYofhcmabdLYEbIdHe4audLoHebb2Nbadfza3rUB4a1b3o+bLcAdpedYLY6F7JAQzeLcnezYwdzf3bXYqwUfnOUfdaXd3ZPO7brbTZ0Yfa3eoY8bKL3bbdnY3zda/b4Z/erZnc3qgoXrgvqYboceKfXtKfRbS0xagACY4yDddVxYIpIpfpxrfpGdTcEXTfef4bFpOc3oqw2OA/cbnuRItdXegfdNVvA4icQYFqLYncXanbI9VcY9walagbfflvndQe3dI+dsE4A97ZtZQZvJA9o6pvo+9Z7aYZE7k5o9BYE/gak9U/Heua44vYdaU8fxvbY7U+ZcM91a9ZM4vsg/9dRpvp0zvpg5XqKdDYQ5acNdaSiZI9A9YBQ6CbQ3hvg/4zvRU8JSLt84U8PoXprvgDrow4aZSbPrSfC9aQ7qi809CkSaxZc+Cbc8L1S6E/Kao/7aqe44Sfs9y4jqS4K/zTDfzrKe3uPEy/YYC8S9g5DcK4a/SfIwqz7ri4S5jaw82dQNw5w/w8JrJa/opeo5BfYcG+M+cOK4kla8tsW5Y8+JgeYw2/I9Y5cYFbW6PN294/be2/UxO8k4o6zPM+qsHZ7su+0+u7HaO5Ase4ree7nde4e9rqW41oLo3Zk6Zbu6fZ29+82+7IO++5Ife5HYg+YwG9+8C6Erg/c9C7HtOf66g+vvHVvsxpG6frw4TYiom5JfX2m+/rK8Vcs+Xavf/c+9AcfYq88au6pw7ZrJfevbS9YCQeh5bbp4Y7O6Y4Ac5/p/27Sz7dk4s+If5+HdfZ0+E704XfK5p+fa7a55W8B759p7l414V7tqB8zZLdV+nb259LS2Pf7O17V4h9buuDvaUcdmt9N9O/18nnkF0ap+1dUdl7/cF7d7UCA697E7845/V7F46Ls7pH8cc/RuR6WtUtWSK4D5ADaTGVu5TuZ79aDsDby6C8aZS56+58yZ62d/UyjbFg69c9R+648/DdMcJQqeD+/ei97ux7qZq868YNr/R/Ce8qChACXCgCL6GAxT1OuGsZfK0AI/H8ERkH0BjC4B+GdUoAWFGdYH5CsjL9LSai4jrS7+HqwxM3r9lcERXlEW3+fWES6rEUdmdmgP3+r66/q7r8a/Z8qwRVTXv9diaPz+S5C+P6NcG+R7ZcN/ANjA9M+JvdTE/FQgvwggGRJqoX1f69cmuagGAHVkv5acPu4vDfAQF0CtBMBdHW3hk3AB2BJgGfYVlnyNQmpIEAAUSnjBtu+alNxOGzGgmwDOG2IfiEgXA78s6f/S8mgCexcDkBF9CjPPzACL9l+dwS2O2AKBcB4A/IOYFwEWCEcOgm/VCIQJlRmoEBwXNHoAJQHADWA5/SZLkCZ5QDeBFsG/l/1QAP8f0B/RPiPV76lN3+64T/uIm/5iQdBBfAARTiAGn8QBS/IUJoPNhmo4BvVRgYf2My+CDB/g1gOgKV6icW+WXRTsQIB4Sh8BwQlVqz3N5PMyByuCgVmxl57Ey0NAwOPQJFSFMa+zA5waBgLAcCcswgyqDwKv6D1DoAgsnI0P0GiDQ84g8AivxABr9VBG/LfmYKKG34YBe/OwU/yYFJ8i+mvQfjf0yGuCrB7gmwT/0f75cqhswkQUL347Uo3Bd/NYZ4N/4o9n+2wpwZ5xdYb4jAoAoIaMJ1bFDd+SAMIV4P/56DohxfMyBAAwH3Cfe5rVIagPSEAtMherGzvMOhY/ByBSwl9KULkDlDO6lQs4VTERrHFah3oangyEaH0RmhT0focpXaFCD6wcwytoFAowQBQ6/QwYbPzUEjC5uVLEChMPCGIiZhjgrofMOMG2xoR1/QeLbGsEuxjhGwv/nV3OFsiSRwvCwQcKdhHDtwrw4UayI+HzCbhgQ8AUb3PZjDmMjIl4ScIT5ZFiRDPBOPEJBHWdluKfPAcCN+GWMrOf3eZnZgM6YiiRjGHEV+ApH/xmRkQwfg6IuEn80k5JeQbgFaC2xKRyg9fmoHUG+AuRb6ZqNqKHoOCj+ColPhyNMF0j7uJDZYTyNv4npkUAoqYZsKRFxjZcfHYUvsJWG48sxMo6Me5VCY7CU+/AJMXZUvwh9W+JQmmHQIYFujYxiSJxrsKLEjoWxZQtsbVy2HIiuxKfIoLC34LN95OyQg9KOnfSx8z0FYxAT4ILHzDDRFonJlaIBGGDDAGQ9cYc3+Fm80KdonUFiPSgai7gawP0QGOyDpBPR2I9sR0M9GijURikMQWKDCFBiVB1I4YRoNtINikh7DTUcmFlFDj8xYXBBuiPNqcC7xZ46Aa6KS4EiBCnQ+MZvTfH6APx0grgLIPkGKDV+wYoYaGNpH1jP83vS0Y8MyiwDgJi43QT32fGsdIJ5iaCcP0dFDALBhVRCXNmQkriqi67EAJARgATwU234tQC8wkI0hPxIY8ANABOjETVQGIh4eMOHxOYcKxOIUaBKiHcT4ecE0AqoVqz1ZlJTIwcXmI0ngTMex4+UKePWjni+BeeDiU4S4mmTUJZ+VoHcAbDiT4JVI8ioRN/FVV/xU4wCU8K1GCjThLIsCRj31HXBRJhvKPH5I04BSRkBkkCcZJlyOTLipxJXCrjVwj4VJEQjsSlPCk4CG41BD/HJNIkbjyJVWagklNCkmSCpkfaySoUykaEqp1E7we8M0n0TzJCISyaoAansS3yggpCU+JQmXEeyBkvoR5PwnCSpJ84P8SRMbHTjKs2UpAOAWqnujz6rVdKUpMaxHBVprUt4bRJGlbdV0FGM0a0BKD+iUA0gUiEuggGUDzBwsa2PAHgAQQtCW48rF1JiA9SnRrAY4JIEkDSQ/ArgBQQQFvHMTVJIU90Q5LqnMkKMNAOcMLnckVJPJaWMMQkJVBqiFJDU0IVROCk6i16XovwQrnqGqhvprElof1JoCPjwZdEjostk6ZIzpQKMp5tJJKmYy/hik0Ai1LxkxjdR1YrSRYOqxqE1cGufaXKLCl99IeqMoiVLw7SfT9xnMyMb4CCk5i1JyUjaWZJV5MTuB5M3EfBPxEDTqZeo0ac5PdATTkZU0ryTNJkmyzYp83S2h9moLgF+JtgiGfjKrGEyYhwmBqULL0nq4nZWhCfGLPUn5TJZdvQRGjIjHaDg56s5PtdwYm3kyZzGP6QDLbBAyQZYMnmZWM4nDSOpdM0PPDN2mByJJBEkAJHL3E7tsZWUGOTVNDmIcPpKve0eDOxG6yvw/0wGWAGBn8hQZno3KUbP5kmy0sSADMDcKOCuAIAuEgYZbLSwRAp+c00qQtJmYC9lO8w3kLmDtTcBT2nHRuVjPUwAApb+AzWyFHid5FkmCVZP3mHz3pPo0PLPOyDjzJ5zMhOHfLZnyzK5IvcPv7wimCI15zAFGFvP06nyyJt+A+RREPGZkE51FJOZfLAWu9UJFWT9M8Pgkz8rZafDpEoK/FkASZX08+b1O0lcAMK3QRBZnMdEPjCRNMo6bDNDy7IDkGCrMFrIaG4Kfp5sHSsQqYVkKhpFCvOVQrSzt0KhU8zBZAvhzayWJDUz6mwublsQOFOcrhalPzm8LS+eEwRdgsoDQKLBtKbABIu4HSL7JucuRTwo3yAoWuSi+hdTxEVNDW5MqXylotIVGTa50MsOXfF4nrhLxS4a8SQqaFCSrZI2TyUIuupqKuW1on5jfMyqbU6FCYN+QEt/ai8v5g88qhdQEWmKypqiphZYrD7XyLgFGNBXbl8UqKPRkii+RYMIVQAbFniuxVDL0UwyhSWSyLiYoiUMLSZqShqawtDoeL7x5SvKQ4vrkhLDFGXOpfQD8W8xzFLcsRfgFKXtL7B/cz2d0IUVUdclDSnBQUrwXqK9A4yqRR0qmW0yDFbdCpvMrMWMKllzCyrNYtaXsKNl5C42XTIQXty05ncjOb3K8UW90+4SgZZEqaU8dj51S9CunzWXWhHloNF5VgqAWLKdZzHcBU4o4pNwcCey5JfktBUfKnucShOBVUywwrt2USogeCvzA1LxAgKwZeTQxUpCsVdcZxdpQOS/LocKCyaokvqX7LGlhytJSAFh7y94F71WVGMtOWHL/lqCKaGitjTDLYJEnRFVcrZUaKKV0/KbmbjxV5LCVxzOBUio2pQrocfKibAKsKUs9hV2y86vkV5WWz8VqgNVcso1XYCRV7VO4Ccp6ptL1lVKgFf0qBV0qQVoihFSaq1WCJz8dq/VTgxSUMqXenyiFRJXfweqZV7y6MsSoZj3xrwhs6af0JtU8rpVwK71fCqFUurqlkKmhCqtkqyqOG8q+RfEp1Xxr5JZ8n1R/IyUcg2qIAEqqP1LjTTJ+tjaHHsjqChJwApoPtjuBwAEAHYMLFgBVgUqw0QADavEE2uKBGAtAyAYwCAAqzthcwO4ByK7G/j8jtw1gJAHslQBaAB1QQBQCACRDVZ4AsAG8FADpBaAkQoyPdQ7EPWUB3A7QaSQlCRBaBiQ3AaQKYGkAAAvM5MoVfStj+F66ptSNndXpZ81Bqd+nGHcCSA4YwAZYKWH9CtBWg5IX2ANK6ZAJTI7Q82FoEBbLhTArARuPenEFhDWAOG5MDGvfHJgZBcghQXhqI2QgkF1/bCWRr0QL8fAtccavRqX5QBCNzGn4CRpwnkb2NrGzCTRsnm9DA53GsAObN6IGTWAUUxGVRrE07SVpQmkSeNOLnwTC5HQFTZkGk1aB/R7oTDQzI029AIIRc8fKwBU2ibNNAcozQDHM3ZB+h/o1yTptcnqbKRodVgOSJ6r9DpEbizkRuyvGBj/4dQwfo7GERpFxGQwJzAYCBX8g7QTZegBWpHn1gkAD8rQHfMS0rAINQAA==='
const decompressedDMMF = decompressFromBase64(compressedDMMF)
// We are parsing 2 times, as we want independent objects, because
// DMMFClass introduces circular references in the dmmf object
const dmmf = JSON.parse(decompressedDMMF)
exports.Prisma.dmmf = JSON.parse(decompressedDMMF)
config.document = dmmf


config.inlineSchema = 'Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBwcmV2aWV3RmVhdHVyZXMgPSBbImRlbm8iXQogIG91dHB1dCA9ICIuLi9nZW5lcmF0ZWQvY2xpZW50Igp9CgpkYXRhc291cmNlIGRiIHsKICBwcm92aWRlciA9ICJwb3N0Z3Jlc3FsIgogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQp9Cgptb2RlbCBVc2VyIHsKICBpZCBJbnQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAaWQKICB1c2VybmFtZSBTdHJpbmcgQHVuaXF1ZQogIHBhc3N3b3JkIFN0cmluZwp9'
config.inlineSchemaHash = '276d5b00ae0760cb13d2dfc820cc287dbb0a8beb88d1353d647a1501cd7db2b5'

config.inlineDatasources = {
  "db": {
    "url": {
      "fromEnvVar": "DATABASE_URL",
      "value": null
    }
  }
}

config.injectableEdgeEnv = {
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
}

config.edgeClientProtocol = "graphql";
if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

