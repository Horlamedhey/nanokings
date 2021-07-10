export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `DateTime` scalar type represents a DateTime. The DateTime is serialized as an RFC 3339 quoted string */
  DateTime: any;
  ObjectId: any;
};

export type BankAccount = {
  __typename?: 'BankAccount';
  _id?: Maybe<Scalars['ObjectId']>;
  accountName?: Maybe<Scalars['String']>;
  accountNumber?: Maybe<Scalars['String']>;
  bankCode?: Maybe<Scalars['String']>;
  bankName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BankAccountInsertInput = {
  _id?: Maybe<Scalars['ObjectId']>;
  accountName?: Maybe<Scalars['String']>;
  accountNumber?: Maybe<Scalars['String']>;
  bankCode?: Maybe<Scalars['String']>;
  bankName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BankAccountQueryInput = {
  accountName_gt?: Maybe<Scalars['String']>;
  createdAt_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  bankCode_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  accountNumber_ne?: Maybe<Scalars['String']>;
  bankName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  AND?: Maybe<Array<BankAccountQueryInput>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_ne?: Maybe<Scalars['DateTime']>;
  createdAt_exists?: Maybe<Scalars['Boolean']>;
  bankCode_exists?: Maybe<Scalars['Boolean']>;
  accountName_lte?: Maybe<Scalars['String']>;
  accountName_ne?: Maybe<Scalars['String']>;
  bankName_gt?: Maybe<Scalars['String']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  bankName_lt?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  accountName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  _id?: Maybe<Scalars['ObjectId']>;
  accountNumber_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  accountNumber_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  accountName_gte?: Maybe<Scalars['String']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  accountNumber_gt?: Maybe<Scalars['String']>;
  accountNumber_lte?: Maybe<Scalars['String']>;
  bankCode_gte?: Maybe<Scalars['String']>;
  bankCode_lt?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  bankCode_lte?: Maybe<Scalars['String']>;
  accountNumber_gte?: Maybe<Scalars['String']>;
  bankName?: Maybe<Scalars['String']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  accountNumber_lt?: Maybe<Scalars['String']>;
  accountName_exists?: Maybe<Scalars['Boolean']>;
  bankName_ne?: Maybe<Scalars['String']>;
  bankName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  bankCode_ne?: Maybe<Scalars['String']>;
  accountName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  OR?: Maybe<Array<BankAccountQueryInput>>;
  bankCode_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_ne?: Maybe<Scalars['DateTime']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  bankCode?: Maybe<Scalars['String']>;
  bankName_exists?: Maybe<Scalars['Boolean']>;
  accountNumber?: Maybe<Scalars['String']>;
  accountName_lt?: Maybe<Scalars['String']>;
  updatedAt_exists?: Maybe<Scalars['Boolean']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  accountNumber_exists?: Maybe<Scalars['Boolean']>;
  bankCode_gt?: Maybe<Scalars['String']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  accountName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  bankName_gte?: Maybe<Scalars['String']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  bankName_lte?: Maybe<Scalars['String']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
};

export enum BankAccountSortByInput {
  BankcodeAsc = 'BANKCODE_ASC',
  BanknameAsc = 'BANKNAME_ASC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  IdAsc = '_ID_ASC',
  AccountnameDesc = 'ACCOUNTNAME_DESC',
  AccountnumberDesc = 'ACCOUNTNUMBER_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  AccountnumberAsc = 'ACCOUNTNUMBER_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC',
  IdDesc = '_ID_DESC',
  AccountnameAsc = 'ACCOUNTNAME_ASC',
  BankcodeDesc = 'BANKCODE_DESC',
  BanknameDesc = 'BANKNAME_DESC'
}

export type BankAccountUpdateInput = {
  bankCode?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  accountName?: Maybe<Scalars['String']>;
  accountName_unset?: Maybe<Scalars['Boolean']>;
  bankName?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  createdAt_unset?: Maybe<Scalars['Boolean']>;
  accountNumber_unset?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_unset?: Maybe<Scalars['Boolean']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  accountNumber?: Maybe<Scalars['String']>;
  bankCode_unset?: Maybe<Scalars['Boolean']>;
  bankName_unset?: Maybe<Scalars['Boolean']>;
};


export type DeleteManyPayload = {
  __typename?: 'DeleteManyPayload';
  deletedCount: Scalars['Int'];
};

export type InsertManyPayload = {
  __typename?: 'InsertManyPayload';
  insertedIds: Array<Maybe<Scalars['ObjectId']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteManyBankAccounts?: Maybe<DeleteManyPayload>;
  deleteManyNotifications?: Maybe<DeleteManyPayload>;
  deleteManySongs?: Maybe<DeleteManyPayload>;
  deleteManySubscriptions?: Maybe<DeleteManyPayload>;
  deleteManyTransactions?: Maybe<DeleteManyPayload>;
  deleteManyUsers?: Maybe<DeleteManyPayload>;
  deleteOneBankAccount?: Maybe<BankAccount>;
  deleteOneNotification?: Maybe<Notification>;
  deleteOneSong?: Maybe<Song>;
  deleteOneSubscription?: Maybe<Subscription>;
  deleteOneTransaction?: Maybe<Transaction>;
  deleteOneUser?: Maybe<User>;
  insertManyBankAccounts?: Maybe<InsertManyPayload>;
  insertManyNotifications?: Maybe<InsertManyPayload>;
  insertManySongs?: Maybe<InsertManyPayload>;
  insertManySubscriptions?: Maybe<InsertManyPayload>;
  insertManyTransactions?: Maybe<InsertManyPayload>;
  insertManyUsers?: Maybe<InsertManyPayload>;
  insertOneBankAccount?: Maybe<BankAccount>;
  insertOneNotification?: Maybe<Notification>;
  insertOneSong?: Maybe<Song>;
  insertOneSubscription?: Maybe<Subscription>;
  insertOneTransaction?: Maybe<Transaction>;
  insertOneUser?: Maybe<User>;
  replaceOneBankAccount?: Maybe<BankAccount>;
  replaceOneNotification?: Maybe<Notification>;
  replaceOneSong?: Maybe<Song>;
  replaceOneSubscription?: Maybe<Subscription>;
  replaceOneTransaction?: Maybe<Transaction>;
  replaceOneUser?: Maybe<User>;
  updateManyBankAccounts?: Maybe<UpdateManyPayload>;
  updateManyNotifications?: Maybe<UpdateManyPayload>;
  updateManySongs?: Maybe<UpdateManyPayload>;
  updateManySubscriptions?: Maybe<UpdateManyPayload>;
  updateManyTransactions?: Maybe<UpdateManyPayload>;
  updateManyUsers?: Maybe<UpdateManyPayload>;
  updateOneBankAccount?: Maybe<BankAccount>;
  updateOneNotification?: Maybe<Notification>;
  updateOneSong?: Maybe<Song>;
  updateOneSubscription?: Maybe<Subscription>;
  updateOneTransaction?: Maybe<Transaction>;
  updateOneUser?: Maybe<User>;
  upsertOneBankAccount?: Maybe<BankAccount>;
  upsertOneNotification?: Maybe<Notification>;
  upsertOneSong?: Maybe<Song>;
  upsertOneSubscription?: Maybe<Subscription>;
  upsertOneTransaction?: Maybe<Transaction>;
  upsertOneUser?: Maybe<User>;
};


export type MutationDeleteManyBankAccountsArgs = {
  query?: Maybe<BankAccountQueryInput>;
};


export type MutationDeleteManyNotificationsArgs = {
  query?: Maybe<NotificationQueryInput>;
};


export type MutationDeleteManySongsArgs = {
  query?: Maybe<SongQueryInput>;
};


export type MutationDeleteManySubscriptionsArgs = {
  query?: Maybe<SubscriptionQueryInput>;
};


export type MutationDeleteManyTransactionsArgs = {
  query?: Maybe<TransactionQueryInput>;
};


export type MutationDeleteManyUsersArgs = {
  query?: Maybe<UserQueryInput>;
};


export type MutationDeleteOneBankAccountArgs = {
  query: BankAccountQueryInput;
};


export type MutationDeleteOneNotificationArgs = {
  query: NotificationQueryInput;
};


export type MutationDeleteOneSongArgs = {
  query: SongQueryInput;
};


export type MutationDeleteOneSubscriptionArgs = {
  query: SubscriptionQueryInput;
};


export type MutationDeleteOneTransactionArgs = {
  query: TransactionQueryInput;
};


export type MutationDeleteOneUserArgs = {
  query: UserQueryInput;
};


export type MutationInsertManyBankAccountsArgs = {
  data: Array<BankAccountInsertInput>;
};


export type MutationInsertManyNotificationsArgs = {
  data: Array<NotificationInsertInput>;
};


export type MutationInsertManySongsArgs = {
  data: Array<SongInsertInput>;
};


export type MutationInsertManySubscriptionsArgs = {
  data: Array<SubscriptionInsertInput>;
};


export type MutationInsertManyTransactionsArgs = {
  data: Array<TransactionInsertInput>;
};


export type MutationInsertManyUsersArgs = {
  data: Array<UserInsertInput>;
};


export type MutationInsertOneBankAccountArgs = {
  data: BankAccountInsertInput;
};


export type MutationInsertOneNotificationArgs = {
  data: NotificationInsertInput;
};


export type MutationInsertOneSongArgs = {
  data: SongInsertInput;
};


export type MutationInsertOneSubscriptionArgs = {
  data: SubscriptionInsertInput;
};


export type MutationInsertOneTransactionArgs = {
  data: TransactionInsertInput;
};


export type MutationInsertOneUserArgs = {
  data: UserInsertInput;
};


export type MutationReplaceOneBankAccountArgs = {
  query?: Maybe<BankAccountQueryInput>;
  data: BankAccountInsertInput;
};


export type MutationReplaceOneNotificationArgs = {
  data: NotificationInsertInput;
  query?: Maybe<NotificationQueryInput>;
};


export type MutationReplaceOneSongArgs = {
  query?: Maybe<SongQueryInput>;
  data: SongInsertInput;
};


export type MutationReplaceOneSubscriptionArgs = {
  query?: Maybe<SubscriptionQueryInput>;
  data: SubscriptionInsertInput;
};


export type MutationReplaceOneTransactionArgs = {
  query?: Maybe<TransactionQueryInput>;
  data: TransactionInsertInput;
};


export type MutationReplaceOneUserArgs = {
  query?: Maybe<UserQueryInput>;
  data: UserInsertInput;
};


export type MutationUpdateManyBankAccountsArgs = {
  query?: Maybe<BankAccountQueryInput>;
  set: BankAccountUpdateInput;
};


export type MutationUpdateManyNotificationsArgs = {
  query?: Maybe<NotificationQueryInput>;
  set: NotificationUpdateInput;
};


export type MutationUpdateManySongsArgs = {
  query?: Maybe<SongQueryInput>;
  set: SongUpdateInput;
};


export type MutationUpdateManySubscriptionsArgs = {
  query?: Maybe<SubscriptionQueryInput>;
  set: SubscriptionUpdateInput;
};


export type MutationUpdateManyTransactionsArgs = {
  query?: Maybe<TransactionQueryInput>;
  set: TransactionUpdateInput;
};


export type MutationUpdateManyUsersArgs = {
  query?: Maybe<UserQueryInput>;
  set: UserUpdateInput;
};


export type MutationUpdateOneBankAccountArgs = {
  query?: Maybe<BankAccountQueryInput>;
  set: BankAccountUpdateInput;
};


export type MutationUpdateOneNotificationArgs = {
  query?: Maybe<NotificationQueryInput>;
  set: NotificationUpdateInput;
};


export type MutationUpdateOneSongArgs = {
  query?: Maybe<SongQueryInput>;
  set: SongUpdateInput;
};


export type MutationUpdateOneSubscriptionArgs = {
  query?: Maybe<SubscriptionQueryInput>;
  set: SubscriptionUpdateInput;
};


export type MutationUpdateOneTransactionArgs = {
  query?: Maybe<TransactionQueryInput>;
  set: TransactionUpdateInput;
};


export type MutationUpdateOneUserArgs = {
  query?: Maybe<UserQueryInput>;
  set: UserUpdateInput;
};


export type MutationUpsertOneBankAccountArgs = {
  query?: Maybe<BankAccountQueryInput>;
  data: BankAccountInsertInput;
};


export type MutationUpsertOneNotificationArgs = {
  query?: Maybe<NotificationQueryInput>;
  data: NotificationInsertInput;
};


export type MutationUpsertOneSongArgs = {
  query?: Maybe<SongQueryInput>;
  data: SongInsertInput;
};


export type MutationUpsertOneSubscriptionArgs = {
  query?: Maybe<SubscriptionQueryInput>;
  data: SubscriptionInsertInput;
};


export type MutationUpsertOneTransactionArgs = {
  query?: Maybe<TransactionQueryInput>;
  data: TransactionInsertInput;
};


export type MutationUpsertOneUserArgs = {
  query?: Maybe<UserQueryInput>;
  data: UserInsertInput;
};

export type Notification = {
  __typename?: 'Notification';
  _id?: Maybe<Scalars['ObjectId']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  user?: Maybe<User>;
};

export type NotificationInsertInput = {
  _id?: Maybe<Scalars['ObjectId']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  user?: Maybe<NotificationUserRelationInput>;
};

export type NotificationQueryInput = {
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  keywords_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  keywords_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  user?: Maybe<UserQueryInput>;
  keywords_exists?: Maybe<Scalars['Boolean']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  user_exists?: Maybe<Scalars['Boolean']>;
  description_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  createdAt_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  AND?: Maybe<Array<NotificationQueryInput>>;
  createdAt_ne?: Maybe<Scalars['DateTime']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  description_lt?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<NotificationQueryInput>>;
  description_gt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_exists?: Maybe<Scalars['Boolean']>;
  description_gte?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_lte?: Maybe<Scalars['String']>;
  description_ne?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
};

export enum NotificationSortByInput {
  IdDesc = '_ID_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  UserAsc = 'USER_ASC',
  UserDesc = 'USER_DESC',
  IdAsc = '_ID_ASC'
}

export type NotificationUpdateInput = {
  user_unset?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<NotificationUserRelationInput>;
  _id?: Maybe<Scalars['ObjectId']>;
  description_unset?: Maybe<Scalars['Boolean']>;
  keywords_unset?: Maybe<Scalars['Boolean']>;
  createdAt_unset?: Maybe<Scalars['Boolean']>;
};

export type NotificationUserRelationInput = {
  create?: Maybe<UserInsertInput>;
  link?: Maybe<Scalars['ObjectId']>;
};


export type Query = {
  __typename?: 'Query';
  bankAccount?: Maybe<BankAccount>;
  bankAccounts: Array<Maybe<BankAccount>>;
  notification?: Maybe<Notification>;
  notifications: Array<Maybe<Notification>>;
  song?: Maybe<Song>;
  songs: Array<Maybe<Song>>;
  subscription?: Maybe<Subscription>;
  subscriptions: Array<Maybe<Subscription>>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Maybe<Transaction>>;
  user?: Maybe<User>;
  users: Array<Maybe<User>>;
};


export type QueryBankAccountArgs = {
  query?: Maybe<BankAccountQueryInput>;
};


export type QueryBankAccountsArgs = {
  query?: Maybe<BankAccountQueryInput>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<BankAccountSortByInput>;
};


export type QueryNotificationArgs = {
  query?: Maybe<NotificationQueryInput>;
};


export type QueryNotificationsArgs = {
  query?: Maybe<NotificationQueryInput>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<NotificationSortByInput>;
};


export type QuerySongArgs = {
  query?: Maybe<SongQueryInput>;
};


export type QuerySongsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SongSortByInput>;
  query?: Maybe<SongQueryInput>;
};


export type QuerySubscriptionArgs = {
  query?: Maybe<SubscriptionQueryInput>;
};


export type QuerySubscriptionsArgs = {
  query?: Maybe<SubscriptionQueryInput>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SubscriptionSortByInput>;
};


export type QueryTransactionArgs = {
  query?: Maybe<TransactionQueryInput>;
};


export type QueryTransactionsArgs = {
  query?: Maybe<TransactionQueryInput>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<TransactionSortByInput>;
};


export type QueryUserArgs = {
  query?: Maybe<UserQueryInput>;
};


export type QueryUsersArgs = {
  query?: Maybe<UserQueryInput>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<UserSortByInput>;
};

export type Song = {
  __typename?: 'Song';
  _id?: Maybe<Scalars['ObjectId']>;
  artWork?: Maybe<Scalars['String']>;
  artiste?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  creatives?: Maybe<Scalars['String']>;
  genre?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  lyrics?: Maybe<Scalars['String']>;
  music?: Maybe<Scalars['String']>;
  musicLink?: Maybe<Scalars['String']>;
  previouslyReleased?: Maybe<Scalars['Boolean']>;
  releasedOn?: Maybe<Scalars['DateTime']>;
  secondaryGenre?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  upcEan?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
  worldwide?: Maybe<Scalars['Boolean']>;
  writer?: Maybe<Scalars['String']>;
};

export type SongInsertInput = {
  writer?: Maybe<Scalars['String']>;
  secondaryGenre?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  artiste?: Maybe<Scalars['String']>;
  creatives?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  artWork?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  worldwide?: Maybe<Scalars['Boolean']>;
  genre?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  lyrics?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  musicLink?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<SongUserRelationInput>;
  releasedOn?: Maybe<Scalars['DateTime']>;
  music?: Maybe<Scalars['String']>;
  previouslyReleased?: Maybe<Scalars['Boolean']>;
  upcEan?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type SongQueryInput = {
  upcEan_lte?: Maybe<Scalars['String']>;
  user?: Maybe<UserQueryInput>;
  musicLink_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  type_lt?: Maybe<Scalars['String']>;
  worldwide?: Maybe<Scalars['Boolean']>;
  music_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  secondaryGenre_gte?: Maybe<Scalars['String']>;
  music?: Maybe<Scalars['String']>;
  upcEan_ne?: Maybe<Scalars['String']>;
  musicLink_gt?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  releasedOn_lt?: Maybe<Scalars['DateTime']>;
  title_gte?: Maybe<Scalars['String']>;
  location_gte?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  releasedOn_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  title_lt?: Maybe<Scalars['String']>;
  label_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  writer?: Maybe<Scalars['String']>;
  writer_gte?: Maybe<Scalars['String']>;
  creatives?: Maybe<Scalars['String']>;
  upcEan_lt?: Maybe<Scalars['String']>;
  upcEan_gte?: Maybe<Scalars['String']>;
  music_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  writer_ne?: Maybe<Scalars['String']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  releasedOn_lte?: Maybe<Scalars['DateTime']>;
  upcEan_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  location_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  genre?: Maybe<Scalars['String']>;
  updatedAt_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  musicLink_lte?: Maybe<Scalars['String']>;
  artiste_ne?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<SongQueryInput>>;
  label_ne?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  releasedOn_exists?: Maybe<Scalars['Boolean']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  OR?: Maybe<Array<SongQueryInput>>;
  previouslyReleased_exists?: Maybe<Scalars['Boolean']>;
  genre_gte?: Maybe<Scalars['String']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  label_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  artWork?: Maybe<Scalars['String']>;
  artiste_lt?: Maybe<Scalars['String']>;
  title_lte?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  artWork_gt?: Maybe<Scalars['String']>;
  musicLink_exists?: Maybe<Scalars['Boolean']>;
  lyrics_lte?: Maybe<Scalars['String']>;
  location_lt?: Maybe<Scalars['String']>;
  type_gt?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  releasedOn_gt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  type_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  artiste_exists?: Maybe<Scalars['Boolean']>;
  releasedOn?: Maybe<Scalars['DateTime']>;
  secondaryGenre_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  genre_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  type_lte?: Maybe<Scalars['String']>;
  music_lt?: Maybe<Scalars['String']>;
  writer_lt?: Maybe<Scalars['String']>;
  writer_lte?: Maybe<Scalars['String']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  previouslyReleased?: Maybe<Scalars['Boolean']>;
  genre_gt?: Maybe<Scalars['String']>;
  label_gte?: Maybe<Scalars['String']>;
  updatedAt_exists?: Maybe<Scalars['Boolean']>;
  artiste?: Maybe<Scalars['String']>;
  creatives_gte?: Maybe<Scalars['String']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  upcEan?: Maybe<Scalars['String']>;
  lyrics?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt_exists?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  artiste_gt?: Maybe<Scalars['String']>;
  music_gte?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  location_gt?: Maybe<Scalars['String']>;
  createdAt_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  writer_gt?: Maybe<Scalars['String']>;
  writer_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_ne?: Maybe<Scalars['DateTime']>;
  location_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_exists?: Maybe<Scalars['Boolean']>;
  artWork_exists?: Maybe<Scalars['Boolean']>;
  lyrics_exists?: Maybe<Scalars['Boolean']>;
  artiste_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  type_gte?: Maybe<Scalars['String']>;
  genre_ne?: Maybe<Scalars['String']>;
  musicLink_gte?: Maybe<Scalars['String']>;
  musicLink_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lyrics_gt?: Maybe<Scalars['String']>;
  genre_exists?: Maybe<Scalars['Boolean']>;
  writer_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  location_ne?: Maybe<Scalars['String']>;
  artWork_ne?: Maybe<Scalars['String']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  label_lt?: Maybe<Scalars['String']>;
  worldwide_exists?: Maybe<Scalars['Boolean']>;
  type_exists?: Maybe<Scalars['Boolean']>;
  music_exists?: Maybe<Scalars['Boolean']>;
  title_gt?: Maybe<Scalars['String']>;
  label_exists?: Maybe<Scalars['Boolean']>;
  artiste_lte?: Maybe<Scalars['String']>;
  creatives_ne?: Maybe<Scalars['String']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  lyrics_ne?: Maybe<Scalars['String']>;
  writer_exists?: Maybe<Scalars['Boolean']>;
  title_ne?: Maybe<Scalars['String']>;
  genre_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  artWork_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  music_lte?: Maybe<Scalars['String']>;
  type_ne?: Maybe<Scalars['String']>;
  releasedOn_ne?: Maybe<Scalars['DateTime']>;
  lyrics_gte?: Maybe<Scalars['String']>;
  genre_lte?: Maybe<Scalars['String']>;
  creatives_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  musicLink?: Maybe<Scalars['String']>;
  creatives_exists?: Maybe<Scalars['Boolean']>;
  creatives_gt?: Maybe<Scalars['String']>;
  label_gt?: Maybe<Scalars['String']>;
  music_gt?: Maybe<Scalars['String']>;
  previouslyReleased_ne?: Maybe<Scalars['Boolean']>;
  location_exists?: Maybe<Scalars['Boolean']>;
  secondaryGenre_gt?: Maybe<Scalars['String']>;
  creatives_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  creatives_lte?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  label_lte?: Maybe<Scalars['String']>;
  lyrics_lt?: Maybe<Scalars['String']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  secondaryGenre_ne?: Maybe<Scalars['String']>;
  title_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  artWork_gte?: Maybe<Scalars['String']>;
  musicLink_ne?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  lyrics_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  user_exists?: Maybe<Scalars['Boolean']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  music_ne?: Maybe<Scalars['String']>;
  upcEan_gt?: Maybe<Scalars['String']>;
  worldwide_ne?: Maybe<Scalars['Boolean']>;
  artWork_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  upcEan_exists?: Maybe<Scalars['Boolean']>;
  upcEan_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  releasedOn_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_ne?: Maybe<Scalars['DateTime']>;
  creatives_lt?: Maybe<Scalars['String']>;
  artiste_gte?: Maybe<Scalars['String']>;
  secondaryGenre?: Maybe<Scalars['String']>;
  musicLink_lt?: Maybe<Scalars['String']>;
  secondaryGenre_exists?: Maybe<Scalars['Boolean']>;
  location_lte?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  artiste_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  artWork_lt?: Maybe<Scalars['String']>;
  artWork_lte?: Maybe<Scalars['String']>;
  lyrics_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  genre_lt?: Maybe<Scalars['String']>;
  releasedOn_gte?: Maybe<Scalars['DateTime']>;
  secondaryGenre_lte?: Maybe<Scalars['String']>;
  secondaryGenre_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  secondaryGenre_lt?: Maybe<Scalars['String']>;
};

export enum SongSortByInput {
  ArtworkDesc = 'ARTWORK_DESC',
  LabelAsc = 'LABEL_ASC',
  TypeAsc = 'TYPE_ASC',
  UserAsc = 'USER_ASC',
  MusicDesc = 'MUSIC_DESC',
  ArtworkAsc = 'ARTWORK_ASC',
  ArtisteDesc = 'ARTISTE_DESC',
  CreativesDesc = 'CREATIVES_DESC',
  LyricsAsc = 'LYRICS_ASC',
  ReleasedonAsc = 'RELEASEDON_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC',
  IdAsc = '_ID_ASC',
  ArtisteAsc = 'ARTISTE_ASC',
  MusiclinkDesc = 'MUSICLINK_DESC',
  TitleAsc = 'TITLE_ASC',
  UpceanDesc = 'UPCEAN_DESC',
  IdDesc = '_ID_DESC',
  CreativesAsc = 'CREATIVES_ASC',
  SecondarygenreAsc = 'SECONDARYGENRE_ASC',
  UpceanAsc = 'UPCEAN_ASC',
  CreatedatAsc = 'CREATEDAT_ASC',
  LyricsDesc = 'LYRICS_DESC',
  MusiclinkAsc = 'MUSICLINK_ASC',
  ReleasedonDesc = 'RELEASEDON_DESC',
  LocationDesc = 'LOCATION_DESC',
  MusicAsc = 'MUSIC_ASC',
  SecondarygenreDesc = 'SECONDARYGENRE_DESC',
  TitleDesc = 'TITLE_DESC',
  WriterDesc = 'WRITER_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  UserDesc = 'USER_DESC',
  CreatedatDesc = 'CREATEDAT_DESC',
  GenreAsc = 'GENRE_ASC',
  GenreDesc = 'GENRE_DESC',
  LabelDesc = 'LABEL_DESC',
  LocationAsc = 'LOCATION_ASC',
  TypeDesc = 'TYPE_DESC',
  WriterAsc = 'WRITER_ASC'
}

export type SongUpdateInput = {
  upcEan_unset?: Maybe<Scalars['Boolean']>;
  artWork_unset?: Maybe<Scalars['Boolean']>;
  previouslyReleased_unset?: Maybe<Scalars['Boolean']>;
  user?: Maybe<SongUserRelationInput>;
  type?: Maybe<Scalars['String']>;
  writer?: Maybe<Scalars['String']>;
  title_unset?: Maybe<Scalars['Boolean']>;
  lyrics_unset?: Maybe<Scalars['Boolean']>;
  location_unset?: Maybe<Scalars['Boolean']>;
  musicLink?: Maybe<Scalars['String']>;
  musicLink_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  createdAt_unset?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  genre?: Maybe<Scalars['String']>;
  previouslyReleased?: Maybe<Scalars['Boolean']>;
  creatives_unset?: Maybe<Scalars['Boolean']>;
  artiste_unset?: Maybe<Scalars['Boolean']>;
  worldwide_unset?: Maybe<Scalars['Boolean']>;
  updatedAt_unset?: Maybe<Scalars['Boolean']>;
  secondaryGenre?: Maybe<Scalars['String']>;
  type_unset?: Maybe<Scalars['Boolean']>;
  user_unset?: Maybe<Scalars['Boolean']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  lyrics?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  upcEan?: Maybe<Scalars['String']>;
  releasedOn_unset?: Maybe<Scalars['Boolean']>;
  worldwide?: Maybe<Scalars['Boolean']>;
  releasedOn?: Maybe<Scalars['DateTime']>;
  artWork?: Maybe<Scalars['String']>;
  secondaryGenre_unset?: Maybe<Scalars['Boolean']>;
  artiste?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  genre_unset?: Maybe<Scalars['Boolean']>;
  music?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  writer_unset?: Maybe<Scalars['Boolean']>;
  creatives?: Maybe<Scalars['String']>;
  label_unset?: Maybe<Scalars['Boolean']>;
  music_unset?: Maybe<Scalars['Boolean']>;
};

export type SongUserRelationInput = {
  create?: Maybe<UserInsertInput>;
  link?: Maybe<Scalars['ObjectId']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  _id?: Maybe<Scalars['ObjectId']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  price?: Maybe<Scalars['Int']>;
  tier?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SubscriptionInsertInput = {
  _id?: Maybe<Scalars['ObjectId']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  price?: Maybe<Scalars['Int']>;
  tier?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SubscriptionQueryInput = {
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_ne?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  price?: Maybe<Scalars['Int']>;
  tier_lte?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  _id?: Maybe<Scalars['ObjectId']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  price_exists?: Maybe<Scalars['Boolean']>;
  price_ne?: Maybe<Scalars['Int']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_exists?: Maybe<Scalars['Boolean']>;
  tier_lt?: Maybe<Scalars['String']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  AND?: Maybe<Array<SubscriptionQueryInput>>;
  price_lte?: Maybe<Scalars['Int']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  price_lt?: Maybe<Scalars['Int']>;
  createdAt_ne?: Maybe<Scalars['DateTime']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  price_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  tier_ne?: Maybe<Scalars['String']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  tier?: Maybe<Scalars['String']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  updatedAt_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  createdAt_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  price_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  price_gt?: Maybe<Scalars['Int']>;
  tier_gt?: Maybe<Scalars['String']>;
  price_gte?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  tier_gte?: Maybe<Scalars['String']>;
  tier_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  OR?: Maybe<Array<SubscriptionQueryInput>>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  tier_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  tier_exists?: Maybe<Scalars['Boolean']>;
  updatedAt_exists?: Maybe<Scalars['Boolean']>;
};

export enum SubscriptionSortByInput {
  IdAsc = '_ID_ASC',
  CreatedatAsc = 'CREATEDAT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  PriceDesc = 'PRICE_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  IdDesc = '_ID_DESC',
  PriceAsc = 'PRICE_ASC',
  TierAsc = 'TIER_ASC',
  TierDesc = 'TIER_DESC',
  UpdatedatDesc = 'UPDATEDAT_DESC'
}

export type SubscriptionUpdateInput = {
  tier?: Maybe<Scalars['String']>;
  tier_unset?: Maybe<Scalars['Boolean']>;
  price_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  createdAt_unset?: Maybe<Scalars['Boolean']>;
  price_inc?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_unset?: Maybe<Scalars['Boolean']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
};

export type Transaction = {
  __typename?: 'Transaction';
  _id?: Maybe<Scalars['ObjectId']>;
  amount?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
};

export type TransactionInsertInput = {
  _id?: Maybe<Scalars['ObjectId']>;
  amount?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<TransactionUserRelationInput>;
};

export type TransactionQueryInput = {
  amount?: Maybe<Scalars['Float']>;
  AND?: Maybe<Array<TransactionQueryInput>>;
  type_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  type?: Maybe<Scalars['String']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  updatedAt_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  amount_exists?: Maybe<Scalars['Boolean']>;
  amount_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  createdAt_ne?: Maybe<Scalars['DateTime']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_exists?: Maybe<Scalars['Boolean']>;
  type_exists?: Maybe<Scalars['Boolean']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  type_ne?: Maybe<Scalars['String']>;
  user_exists?: Maybe<Scalars['Boolean']>;
  type_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  amount_nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  type_gte?: Maybe<Scalars['String']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  createdAt_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  amount_gte?: Maybe<Scalars['Float']>;
  amount_lt?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  amount_gt?: Maybe<Scalars['Float']>;
  type_lte?: Maybe<Scalars['String']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  amount_ne?: Maybe<Scalars['Float']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<UserQueryInput>;
  createdAt_exists?: Maybe<Scalars['Boolean']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  updatedAt_ne?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  _id?: Maybe<Scalars['ObjectId']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  amount_lte?: Maybe<Scalars['Float']>;
  OR?: Maybe<Array<TransactionQueryInput>>;
  type_gt?: Maybe<Scalars['String']>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  type_lt?: Maybe<Scalars['String']>;
};

export enum TransactionSortByInput {
  AmountAsc = 'AMOUNT_ASC',
  CreatedatDesc = 'CREATEDAT_DESC',
  TypeDesc = 'TYPE_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  UserDesc = 'USER_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  TypeAsc = 'TYPE_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC',
  UserAsc = 'USER_ASC',
  AmountDesc = 'AMOUNT_DESC',
  CreatedatAsc = 'CREATEDAT_ASC'
}

export type TransactionUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  user_unset?: Maybe<Scalars['Boolean']>;
  user?: Maybe<TransactionUserRelationInput>;
  amount_inc?: Maybe<Scalars['Float']>;
  createdAt_unset?: Maybe<Scalars['Boolean']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  type_unset?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
  updatedAt_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  amount?: Maybe<Scalars['Float']>;
  amount_unset?: Maybe<Scalars['Boolean']>;
};

export type TransactionUserRelationInput = {
  create?: Maybe<UserInsertInput>;
  link?: Maybe<Scalars['ObjectId']>;
};

export type UpdateManyPayload = {
  __typename?: 'UpdateManyPayload';
  matchedCount: Scalars['Int'];
  modifiedCount: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['ObjectId']>;
  avatar?: Maybe<Scalars['String']>;
  bankAccount?: Maybe<BankAccount>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  downloads?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  lastLogin?: Maybe<Scalars['DateTime']>;
  lastName?: Maybe<Scalars['String']>;
  notifications?: Maybe<Array<Maybe<Notification>>>;
  pendingNotifications?: Maybe<Scalars['Boolean']>;
  phone?: Maybe<Scalars['String']>;
  sales?: Maybe<Scalars['Int']>;
  songs?: Maybe<Array<Maybe<Song>>>;
  streams?: Maybe<Scalars['Int']>;
  subscription?: Maybe<UserSubscription>;
  transactions?: Maybe<Array<Maybe<Transaction>>>;
  twitter?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['Int']>;
  walletBalance?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
};

export type UserBankAccountRelationInput = {
  link?: Maybe<Scalars['ObjectId']>;
  create?: Maybe<BankAccountInsertInput>;
};

export type UserInsertInput = {
  phone?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
  walletBalance?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['Int']>;
  subscription?: Maybe<UserSubscriptionInsertInput>;
  username?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  pendingNotifications?: Maybe<Scalars['Boolean']>;
  streams?: Maybe<Scalars['Int']>;
  downloads?: Maybe<Scalars['Int']>;
  lastLogin?: Maybe<Scalars['DateTime']>;
  lastName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  country?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  transactions?: Maybe<UserTransactionsRelationInput>;
  email?: Maybe<Scalars['String']>;
  bankAccount?: Maybe<UserBankAccountRelationInput>;
  _id?: Maybe<Scalars['ObjectId']>;
  instagram?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  sales?: Maybe<Scalars['Int']>;
  notifications?: Maybe<UserNotificationsRelationInput>;
  songs?: Maybe<UserSongsRelationInput>;
};

export type UserNotificationsRelationInput = {
  create?: Maybe<Array<Maybe<NotificationInsertInput>>>;
  link?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
};

export type UserQueryInput = {
  updatedAt_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  views_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAt_exists?: Maybe<Scalars['Boolean']>;
  youtube_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  downloads_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  songs?: Maybe<Array<Maybe<SongQueryInput>>>;
  lastLogin_gt?: Maybe<Scalars['DateTime']>;
  email_lte?: Maybe<Scalars['String']>;
  walletBalance?: Maybe<Scalars['String']>;
  twitter_gt?: Maybe<Scalars['String']>;
  firstName_gt?: Maybe<Scalars['String']>;
  phone_gte?: Maybe<Scalars['String']>;
  firstName_ne?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  uid_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  firstName_lte?: Maybe<Scalars['String']>;
  pendingNotifications?: Maybe<Scalars['Boolean']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  email_exists?: Maybe<Scalars['Boolean']>;
  views_lt?: Maybe<Scalars['Int']>;
  gender_lte?: Maybe<Scalars['String']>;
  lastName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  country_lt?: Maybe<Scalars['String']>;
  streams_lte?: Maybe<Scalars['Int']>;
  avatar_exists?: Maybe<Scalars['Boolean']>;
  facebook_gt?: Maybe<Scalars['String']>;
  downloads_lte?: Maybe<Scalars['Int']>;
  sales_exists?: Maybe<Scalars['Boolean']>;
  instagram_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  phone_lte?: Maybe<Scalars['String']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  subscription_exists?: Maybe<Scalars['Boolean']>;
  downloads_exists?: Maybe<Scalars['Boolean']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  lastLogin_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  sales_lt?: Maybe<Scalars['Int']>;
  gender_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  twitter_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  sales_gte?: Maybe<Scalars['Int']>;
  downloads_ne?: Maybe<Scalars['Int']>;
  twitter_ne?: Maybe<Scalars['String']>;
  streams_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  email_ne?: Maybe<Scalars['String']>;
  instagram_lt?: Maybe<Scalars['String']>;
  phone_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  sales_ne?: Maybe<Scalars['Int']>;
  streams?: Maybe<Scalars['Int']>;
  streams_gte?: Maybe<Scalars['Int']>;
  lastName_gte?: Maybe<Scalars['String']>;
  downloads_gte?: Maybe<Scalars['Int']>;
  youtube_ne?: Maybe<Scalars['String']>;
  lastName_lt?: Maybe<Scalars['String']>;
  walletBalance_lt?: Maybe<Scalars['String']>;
  instagram_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_ne?: Maybe<Scalars['DateTime']>;
  notifications_nin?: Maybe<Array<Maybe<NotificationQueryInput>>>;
  username?: Maybe<Scalars['String']>;
  lastLogin_gte?: Maybe<Scalars['DateTime']>;
  country_gt?: Maybe<Scalars['String']>;
  email_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  youtube_gte?: Maybe<Scalars['String']>;
  facebook_lt?: Maybe<Scalars['String']>;
  lastLogin_lte?: Maybe<Scalars['DateTime']>;
  uid_gte?: Maybe<Scalars['String']>;
  downloads_gt?: Maybe<Scalars['Int']>;
  lastName_ne?: Maybe<Scalars['String']>;
  sales_gt?: Maybe<Scalars['Int']>;
  youtube?: Maybe<Scalars['String']>;
  username_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  transactions_in?: Maybe<Array<Maybe<TransactionQueryInput>>>;
  email_gt?: Maybe<Scalars['String']>;
  gender_gte?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  pendingNotifications_exists?: Maybe<Scalars['Boolean']>;
  username_ne?: Maybe<Scalars['String']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  walletBalance_gt?: Maybe<Scalars['String']>;
  gender_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  avatar_lte?: Maybe<Scalars['String']>;
  createdAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lastName_gt?: Maybe<Scalars['String']>;
  lastLogin?: Maybe<Scalars['DateTime']>;
  phone_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  country?: Maybe<Scalars['String']>;
  username_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  uid_lt?: Maybe<Scalars['String']>;
  facebook_ne?: Maybe<Scalars['String']>;
  streams_exists?: Maybe<Scalars['Boolean']>;
  instagram_ne?: Maybe<Scalars['String']>;
  lastLogin_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  views_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  views_lte?: Maybe<Scalars['Int']>;
  facebook_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  walletBalance_lte?: Maybe<Scalars['String']>;
  twitter_exists?: Maybe<Scalars['Boolean']>;
  facebook_lte?: Maybe<Scalars['String']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  sales_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  firstName_lt?: Maybe<Scalars['String']>;
  youtube_exists?: Maybe<Scalars['Boolean']>;
  notifications_in?: Maybe<Array<Maybe<NotificationQueryInput>>>;
  walletBalance_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  subscription?: Maybe<UserSubscriptionQueryInput>;
  OR?: Maybe<Array<UserQueryInput>>;
  lastLogin_lt?: Maybe<Scalars['DateTime']>;
  username_lte?: Maybe<Scalars['String']>;
  youtube_lt?: Maybe<Scalars['String']>;
  uid_exists?: Maybe<Scalars['Boolean']>;
  facebook_exists?: Maybe<Scalars['Boolean']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  transactions?: Maybe<Array<Maybe<TransactionQueryInput>>>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  country_exists?: Maybe<Scalars['Boolean']>;
  views_ne?: Maybe<Scalars['Int']>;
  instagram_gte?: Maybe<Scalars['String']>;
  username_gte?: Maybe<Scalars['String']>;
  sales_lte?: Maybe<Scalars['Int']>;
  country_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  walletBalance_gte?: Maybe<Scalars['String']>;
  sales_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  lastName_exists?: Maybe<Scalars['Boolean']>;
  instagram_exists?: Maybe<Scalars['Boolean']>;
  gender_lt?: Maybe<Scalars['String']>;
  avatar_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  downloads_lt?: Maybe<Scalars['Int']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  gender_ne?: Maybe<Scalars['String']>;
  uid_gt?: Maybe<Scalars['String']>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  _id?: Maybe<Scalars['ObjectId']>;
  sales?: Maybe<Scalars['Int']>;
  country_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  twitter_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  youtube_gt?: Maybe<Scalars['String']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  twitter?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  notifications_exists?: Maybe<Scalars['Boolean']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  views?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  views_gt?: Maybe<Scalars['Int']>;
  songs_exists?: Maybe<Scalars['Boolean']>;
  createdAt_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  views_gte?: Maybe<Scalars['Int']>;
  twitter_gte?: Maybe<Scalars['String']>;
  updatedAt_exists?: Maybe<Scalars['Boolean']>;
  notifications?: Maybe<Array<Maybe<NotificationQueryInput>>>;
  uid_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  phone_gt?: Maybe<Scalars['String']>;
  gender_gt?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  email_lt?: Maybe<Scalars['String']>;
  bankAccount_exists?: Maybe<Scalars['Boolean']>;
  downloads_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  uid?: Maybe<Scalars['String']>;
  streams_ne?: Maybe<Scalars['Int']>;
  instagram_gt?: Maybe<Scalars['String']>;
  uid_ne?: Maybe<Scalars['String']>;
  uid_lte?: Maybe<Scalars['String']>;
  country_ne?: Maybe<Scalars['String']>;
  songs_nin?: Maybe<Array<Maybe<SongQueryInput>>>;
  songs_in?: Maybe<Array<Maybe<SongQueryInput>>>;
  lastLogin_ne?: Maybe<Scalars['DateTime']>;
  twitter_lte?: Maybe<Scalars['String']>;
  youtube_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  lastLogin_exists?: Maybe<Scalars['Boolean']>;
  firstName_gte?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  avatar_gt?: Maybe<Scalars['String']>;
  firstName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  streams_lt?: Maybe<Scalars['Int']>;
  twitter_lt?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  phone_exists?: Maybe<Scalars['Boolean']>;
  country_gte?: Maybe<Scalars['String']>;
  createdAt_ne?: Maybe<Scalars['DateTime']>;
  username_lt?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<UserQueryInput>>;
  youtube_lte?: Maybe<Scalars['String']>;
  transactions_nin?: Maybe<Array<Maybe<TransactionQueryInput>>>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  phone_ne?: Maybe<Scalars['String']>;
  pendingNotifications_ne?: Maybe<Scalars['Boolean']>;
  avatar_lt?: Maybe<Scalars['String']>;
  facebook_gte?: Maybe<Scalars['String']>;
  streams_gt?: Maybe<Scalars['Int']>;
  facebook_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  streams_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  views_exists?: Maybe<Scalars['Boolean']>;
  gender_exists?: Maybe<Scalars['Boolean']>;
  country_lte?: Maybe<Scalars['String']>;
  firstName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  username_exists?: Maybe<Scalars['Boolean']>;
  email_gte?: Maybe<Scalars['String']>;
  username_gt?: Maybe<Scalars['String']>;
  walletBalance_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  firstName_exists?: Maybe<Scalars['Boolean']>;
  transactions_exists?: Maybe<Scalars['Boolean']>;
  walletBalance_ne?: Maybe<Scalars['String']>;
  phone_lt?: Maybe<Scalars['String']>;
  downloads?: Maybe<Scalars['Int']>;
  avatar_ne?: Maybe<Scalars['String']>;
  walletBalance_exists?: Maybe<Scalars['Boolean']>;
  bankAccount?: Maybe<BankAccountQueryInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  avatar_gte?: Maybe<Scalars['String']>;
  avatar_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  instagram_lte?: Maybe<Scalars['String']>;
  lastName_lte?: Maybe<Scalars['String']>;
  lastName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UserSongsRelationInput = {
  create?: Maybe<Array<Maybe<SongInsertInput>>>;
  link?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
};

export enum UserSortByInput {
  YoutubeDesc = 'YOUTUBE_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  DownloadsDesc = 'DOWNLOADS_DESC',
  FacebookAsc = 'FACEBOOK_ASC',
  SalesDesc = 'SALES_DESC',
  WalletbalanceAsc = 'WALLETBALANCE_ASC',
  IdAsc = '_ID_ASC',
  AvatarAsc = 'AVATAR_ASC',
  TwitterAsc = 'TWITTER_ASC',
  UidDesc = 'UID_DESC',
  UidAsc = 'UID_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC',
  WalletbalanceDesc = 'WALLETBALANCE_DESC',
  BankaccountAsc = 'BANKACCOUNT_ASC',
  EmailAsc = 'EMAIL_ASC',
  FirstnameDesc = 'FIRSTNAME_DESC',
  GenderAsc = 'GENDER_ASC',
  GenderDesc = 'GENDER_DESC',
  UsernameDesc = 'USERNAME_DESC',
  ViewsDesc = 'VIEWS_DESC',
  IdDesc = '_ID_DESC',
  CreatedatDesc = 'CREATEDAT_DESC',
  DownloadsAsc = 'DOWNLOADS_ASC',
  FirstnameAsc = 'FIRSTNAME_ASC',
  InstagramDesc = 'INSTAGRAM_DESC',
  LastnameAsc = 'LASTNAME_ASC',
  YoutubeAsc = 'YOUTUBE_ASC',
  CountryAsc = 'COUNTRY_ASC',
  CountryDesc = 'COUNTRY_DESC',
  LastnameDesc = 'LASTNAME_DESC',
  TwitterDesc = 'TWITTER_DESC',
  PhoneDesc = 'PHONE_DESC',
  StreamsDesc = 'STREAMS_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC',
  AvatarDesc = 'AVATAR_DESC',
  BankaccountDesc = 'BANKACCOUNT_DESC',
  FacebookDesc = 'FACEBOOK_DESC',
  InstagramAsc = 'INSTAGRAM_ASC',
  SalesAsc = 'SALES_ASC',
  StreamsAsc = 'STREAMS_ASC',
  UsernameAsc = 'USERNAME_ASC',
  ViewsAsc = 'VIEWS_ASC',
  EmailDesc = 'EMAIL_DESC',
  LastloginAsc = 'LASTLOGIN_ASC',
  LastloginDesc = 'LASTLOGIN_DESC',
  PhoneAsc = 'PHONE_ASC'
}

export type UserSubscription = {
  __typename?: 'UserSubscription';
  activatedOn?: Maybe<Scalars['DateTime']>;
  active?: Maybe<Scalars['Boolean']>;
  expiresOn?: Maybe<Scalars['DateTime']>;
  tier?: Maybe<Subscription>;
};

export type UserSubscriptionInsertInput = {
  activatedOn?: Maybe<Scalars['DateTime']>;
  active?: Maybe<Scalars['Boolean']>;
  expiresOn?: Maybe<Scalars['DateTime']>;
  tier?: Maybe<UserSubscriptionTierRelationInput>;
};

export type UserSubscriptionQueryInput = {
  expiresOn?: Maybe<Scalars['DateTime']>;
  activatedOn?: Maybe<Scalars['DateTime']>;
  activatedOn_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  activatedOn_ne?: Maybe<Scalars['DateTime']>;
  activatedOn_gt?: Maybe<Scalars['DateTime']>;
  expiresOn_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  expiresOn_lte?: Maybe<Scalars['DateTime']>;
  expiresOn_gte?: Maybe<Scalars['DateTime']>;
  expiresOn_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  tier?: Maybe<SubscriptionQueryInput>;
  activatedOn_lte?: Maybe<Scalars['DateTime']>;
  activatedOn_exists?: Maybe<Scalars['Boolean']>;
  active_exists?: Maybe<Scalars['Boolean']>;
  expiresOn_lt?: Maybe<Scalars['DateTime']>;
  expiresOn_exists?: Maybe<Scalars['Boolean']>;
  active?: Maybe<Scalars['Boolean']>;
  activatedOn_gte?: Maybe<Scalars['DateTime']>;
  tier_exists?: Maybe<Scalars['Boolean']>;
  expiresOn_gt?: Maybe<Scalars['DateTime']>;
  AND?: Maybe<Array<UserSubscriptionQueryInput>>;
  OR?: Maybe<Array<UserSubscriptionQueryInput>>;
  activatedOn_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  activatedOn_lt?: Maybe<Scalars['DateTime']>;
  active_ne?: Maybe<Scalars['Boolean']>;
  expiresOn_ne?: Maybe<Scalars['DateTime']>;
};

export type UserSubscriptionTierRelationInput = {
  create?: Maybe<SubscriptionInsertInput>;
  link?: Maybe<Scalars['ObjectId']>;
};

export type UserSubscriptionUpdateInput = {
  tier_unset?: Maybe<Scalars['Boolean']>;
  activatedOn?: Maybe<Scalars['DateTime']>;
  activatedOn_unset?: Maybe<Scalars['Boolean']>;
  active?: Maybe<Scalars['Boolean']>;
  active_unset?: Maybe<Scalars['Boolean']>;
  expiresOn?: Maybe<Scalars['DateTime']>;
  expiresOn_unset?: Maybe<Scalars['Boolean']>;
  tier?: Maybe<UserSubscriptionTierRelationInput>;
};

export type UserTransactionsRelationInput = {
  create?: Maybe<Array<Maybe<TransactionInsertInput>>>;
  link?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
};

export type UserUpdateInput = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  notifications_unset?: Maybe<Scalars['Boolean']>;
  pendingNotifications_unset?: Maybe<Scalars['Boolean']>;
  twitter_unset?: Maybe<Scalars['Boolean']>;
  uid?: Maybe<Scalars['String']>;
  firstName_unset?: Maybe<Scalars['Boolean']>;
  views?: Maybe<Scalars['Int']>;
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  email_unset?: Maybe<Scalars['Boolean']>;
  views_unset?: Maybe<Scalars['Boolean']>;
  downloads?: Maybe<Scalars['Int']>;
  downloads_unset?: Maybe<Scalars['Boolean']>;
  lastLogin_unset?: Maybe<Scalars['Boolean']>;
  transactions_unset?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['String']>;
  phone_unset?: Maybe<Scalars['Boolean']>;
  pendingNotifications?: Maybe<Scalars['Boolean']>;
  username?: Maybe<Scalars['String']>;
  lastName_unset?: Maybe<Scalars['Boolean']>;
  avatar?: Maybe<Scalars['String']>;
  walletBalance?: Maybe<Scalars['String']>;
  songs_unset?: Maybe<Scalars['Boolean']>;
  instagram?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
  walletBalance_unset?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  downloads_inc?: Maybe<Scalars['Int']>;
  transactions?: Maybe<UserTransactionsRelationInput>;
  songs?: Maybe<UserSongsRelationInput>;
  streams_inc?: Maybe<Scalars['Int']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  sales_inc?: Maybe<Scalars['Int']>;
  streams_unset?: Maybe<Scalars['Boolean']>;
  gender_unset?: Maybe<Scalars['Boolean']>;
  views_inc?: Maybe<Scalars['Int']>;
  facebook_unset?: Maybe<Scalars['Boolean']>;
  username_unset?: Maybe<Scalars['Boolean']>;
  avatar_unset?: Maybe<Scalars['Boolean']>;
  bankAccount?: Maybe<UserBankAccountRelationInput>;
  notifications?: Maybe<UserNotificationsRelationInput>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  youtube_unset?: Maybe<Scalars['Boolean']>;
  streams?: Maybe<Scalars['Int']>;
  sales_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  subscription?: Maybe<UserSubscriptionUpdateInput>;
  lastLogin?: Maybe<Scalars['DateTime']>;
  country_unset?: Maybe<Scalars['Boolean']>;
  createdAt_unset?: Maybe<Scalars['Boolean']>;
  uid_unset?: Maybe<Scalars['Boolean']>;
  instagram_unset?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  sales?: Maybe<Scalars['Int']>;
  bankAccount_unset?: Maybe<Scalars['Boolean']>;
  gender?: Maybe<Scalars['String']>;
  subscription_unset?: Maybe<Scalars['Boolean']>;
  updatedAt_unset?: Maybe<Scalars['Boolean']>;
};

export type InsertOneSongMutationVariables = Exact<{
  artwork: Scalars['String'];
  musicFile: Scalars['String'];
  lyricsFile?: Maybe<Scalars['String']>;
  songTitle: Scalars['String'];
  artistName: Scalars['String'];
  musicLink: Scalars['String'];
  musicType: Scalars['String'];
  primaryGenre: Scalars['String'];
  secondaryGenre: Scalars['String'];
  releasedOn: Scalars['DateTime'];
  labelName?: Maybe<Scalars['String']>;
  upcean?: Maybe<Scalars['String']>;
  recordLocation?: Maybe<Scalars['String']>;
  writer: Scalars['String'];
  creatives: Scalars['String'];
  worldwide?: Maybe<Scalars['Boolean']>;
  previouslyReleased?: Maybe<Scalars['Boolean']>;
  user: Scalars['ObjectId'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
}>;


export type InsertOneSongMutation = (
  { __typename?: 'Mutation' }
  & { insertOneSong?: Maybe<(
    { __typename?: 'Song' }
    & Pick<Song, 'title'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'firstName'>
    )> }
  )> }
);
