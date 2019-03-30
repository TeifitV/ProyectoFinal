import colors from './../../theme/colors';

export default styles = {
  container: {
    height: 60,
    width: '90%',
    //borderColor: colors.separator,
    borderWidth: 0,
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 15,
    justifyContent: "space-between",
    marginTop: 13,
    marginLeft: 13,
    backgroundColor: '#FFF'
  },
  containerChecked:{
      height: 60,
      width: '90%',
      //borderColor: colors.separator,
      borderWidth: 0,
      padding: 10,
      alignItems: 'center',
      flexDirection: 'row',
      borderRadius: 15,
      justifyContent: "space-between",
      marginTop: 13,
      marginLeft: 13,
      backgroundColor: '#F8F8F8'
  },
  date: {
    width: 50,
    fontSize: 14,
    fontFamily: 'sans-serif',
    fontWeight: '300',
    textAlign: 'center',
    color: colors.dateColor,
    borderColor: colors.dateColor,
    borderRightWidth: 1
  },
  dateChecked:{
    width: 50,
    fontSize: 14,
    fontFamily: 'notoserif',
    fontWeight: '300',
    textAlign: 'center',
    color: colors.dateColorChecked,
    borderColor: colors.dateColorChecked,
    borderRightWidth: 1
  },
  title: {
    width: 339,
    fontSize: 14,
    fontFamily: 'sans-serif',
    fontWeight: '300',
    textAlign: 'left',
    color: colors.dateColor,
    paddingLeft: 5
    
  },
  checked:{
    width: 339,
    fontSize: 14,
    fontFamily: 'notoserif',
    fontWeight: '300',
    textAlign: 'left',
    color: colors.dateColorChecked,
    paddingLeft: 5
  }
}