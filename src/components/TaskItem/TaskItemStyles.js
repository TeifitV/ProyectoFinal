import colors from './../../theme/colors';

export default styles = {
  container: {
    height: 60,
    width: '100%',
    borderBottomColor: colors.separator,
    borderBottomWidth: 2,
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row'
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 10
  },
  title: {
    fontSize: 21,
    color: colors.primaryText
  }
}