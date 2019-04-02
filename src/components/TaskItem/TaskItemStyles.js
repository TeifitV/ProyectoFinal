import colors from './../../theme/colors';

export default styles = {
  container: {
    height: 60,
    width: '90%',
    borderWidth: 0,
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 15,
    justifyContent: "space-between",
    marginTop: 13,
    marginLeft: 13,
    backgroundColor: colors.containerUnchecked
  },
  containerChecked:{
      height: 60,
      width: '90%',
      borderWidth: 0,
      padding: 10,
      alignItems: 'center',
      flexDirection: 'row',
      borderRadius: 15,
      justifyContent: "space-between",
      marginTop: 13,
      marginLeft: 13,
      backgroundColor: colors.containerChecked
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
    color: colors.tasktChecked,
    borderColor: colors.tasktChecked,
    borderRightWidth: 1
  },
  unchecked: {
    width: 339,
    fontSize: 14,
    fontFamily: 'sans-serif',
    fontWeight: '300',
    textAlign: 'left',
    color: colors.primaryText,
    paddingLeft: 5
    
  },
  checked:{
    width: 339,
    fontSize: 14,
    fontFamily: 'notoserif',
    fontWeight: '300',
    textAlign: 'left',
    color: colors.tasktChecked,
    paddingLeft: 5
  }
}